const { exec } = require("child_process");
const os = require("os");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { DeviceSession } = require("../models/deviceSession");
const {
    generateAccessToken,
    generateRefreshToken,
} = require("../utils/tokens");

const checkinLog = {};

function getClientIp(req) {
    let ip =
        req.headers["x-forwarded-for"]?.split(",")[0]?.trim() ||
        req.socket?.remoteAddress ||
        req.connection?.remoteAddress ||
        req.ip;

    if (ip && ip.startsWith("::ffff:")) {
        ip = ip.substring(7);
    }

    return ip;
}

function getMacFromIp(ip) {
    return new Promise((resolve) => {
        if (!ip) return resolve(null);

        const platform = os.platform();
        let cmd = "";

        if (platform === "win32") {
            cmd = `arp -a ${ip}`;
        } else {
            cmd = `arp -n ${ip}`;
        }

        exec(cmd, (err, stdout) => {
            if (!err && stdout) {
                const match = stdout.match(
                    /(([a-f0-9]{2}[:-]){5}[a-f0-9]{2})/i
                );
                if (match) {
                    return resolve(match[0]);
                }
            }
            resolve(null);
        });
    });
}

async function handleCheckin(req, res) {
    const ip = getClientIp(req);
    console.log("Client IP:", ip);

    const today = new Date().toISOString().slice(0, 10);
    if (checkinLog[ip] === today) {
        return res.status(400).json({
            ip,
            message: "This device has already checked in today.",
            date: today,
        });
    }

    const mac = await getMacFromIp(ip);
    const recognized = !!mac;

    // Lưu vào log
    if (recognized) {
        checkinLog[ip] = today;
    }

    res.json({
        ip,
        mac,
        timestamp: new Date().toISOString(),
        recognized,
        employeeId: recognized ? "demo-employee-id" : null,
    });
}

// Controller: Bind
async function handleBind(req, res) {
    const { employeeId, ip, mac } = req.body;

    if (!employeeId || !ip || !mac) {
        return res.status(400).json({ error: "Missing employeeId, ip or mac" });
    }

    console.log("Bind Device:", { employeeId, ip, mac });

    res.json({
        success: true,
        message: "Device bound successfully",
        employeeId,
        ip,
        mac,
    });
}

async function handleLogin(req, res) {
    if (req.session && req.session.userId) {
        return res.status(403).json({ error: "Already logged in" });
    }

    const { username, password } = req.body;
    const { User } = require("../models/user");
    const user = await User.findOne({ where: { username } });
    if (!user) {
        return res.status(401).json({ error: "user does not exists" });
    }
    // Check latest_login
    // const today = new Date().toISOString().slice(0, 10);
    // if (user.latest_login) {
    //     const latestLoginDate = new Date(user.latest_login)
    //         .toISOString()
    //         .slice(0, 10);
    //     if (latestLoginDate === today) {
    //         return res
    //             .status(403)
    //             .json({ error: "You can not login twice a day" });
    //     }
    // }
    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    req.session.userId = user.id;
    // Update latest_login to now
    await user.update({ latest_login: new Date() });

    res.json({
        success: true,
        username: user.username,
    });
}

async function Login(req, res) {
    try {
        // Already logged in with session?
        if (req.session && req.session.userId) {
            return res.status(403).json({ error: "Already logged in" });
        }

        const { username, password, deviceId } = req.body;
        const { User } = require("../models/user");

        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ error: "User does not exist" });
        }

        // Password check
        const passwordMatch = await bcrypt.compare(
            password,
            user.password_hash
        );
        if (!passwordMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // === Device-session binding check ===
        const existing = await DeviceSession.findOne({ where: { deviceId } });

        if (existing) {
            if (existing.userId !== user.id) {
                return res.status(403).json({
                    error: "This device is already linked to another account",
                });
            }
        } else {
            // If it's a new deviceId, check if this user already has another device
            const userSession = await DeviceSession.findOne({
                where: { userId: user.id },
            });
            if (userSession) {
                return res.status(403).json({
                    error: "This user has already registered another device",
                });
            }
        }
        // Generate tokens
        const accessToken = generateAccessToken({ userId: user.id, deviceId });

        const refreshToken = generateRefreshToken({
            userId: user.id,
            deviceId,
        });

        // Upsert device session
        if (existing) {
            existing.refreshToken = refreshToken;
            await existing.save();
        } else {
            await DeviceSession.create({
                userId: user.id,
                deviceId,
                refreshToken,
            });
        }

        // Save to session (if you still want session-based login too)
        req.session.userId = user.id;

        // Update latest_login
        await user.update({ latest_login: new Date() });

        // Set refresh token cookie
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
        });

        res.json({
            success: true,
            username: user.username,
            role: user.role,
            accessToken,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
    }
}

function requireAuth(req, res, next) {
    if (req.session && req.session.userId) {
        const { User } = require("../models/user");
        User.findOne({ where: { id: req.session.userId } })
            .then((user) => {
                if (user) {
                    req.userRole = user.role;
                }
                next();
            })
            .catch(() => next());
        return;
    }
    return res.status(401).json({ error: "Not authenticated" });
}

function redirectIfAuthenticated(req, res, next) {
    if (req.session && req.session.userId) {
        return res.redirect("/");
    }
    next();
}

async function handleCheckout(req, res) {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ error: "Logout failed" });
        }
        res.clearCookie("connect.sid");
        res.json({ success: true });
    });
}

async function getCurrentStatus(req, res) {
    const userId = req.session.userId;
    if (!userId) {
        return res.status(401).json({ authenticated: false });
    }
    try {
        const { User } = require("../models/user");
        const user = await User.findOne({ where: { id: userId } });
        if (!user) {
            return res
                .status(404)
                .json({ authenticated: false, error: "User not found" });
        }
        res.json({
            authenticated: true,
            username: user.username,
            status: user.status,
        });
    } catch (err) {
        res.status(500).json({ authenticated: false, error: "Database error" });
    }
}

async function handleCheckinStatusUpdate(req, res) {
    const userId = req.session.userId;
    const { status } = req.body;

    if (!userId) {
        return res.status(401).json({ error: "Not authenticated" });
    }
    if (!status || !["CHECKIN", "CHECKOUT", "LEAVE"].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
    }

    const { Checkin } = require("../models/checkin");
    const { User } = require("../models/user");
    const today = new Date().toISOString().slice(0, 10);

    try {
        await User.update({ status }, { where: { id: userId } });

        let checkinRecord = await Checkin.findOne({
            where: { employee_id: userId, date: today },
        });

        if (!checkinRecord) {
            await Checkin.create({
                employee_id: userId,
                date: today,
                checkin_time: new Date(),
                checkout_time: status === "CHECKIN" ? new Date() : null,
                status,
            });
            return res.json({
                success: true,
                message: `Status set to ${status}`,
            });
        } else {
            const updateData = { status };
            if (status === "CHECKIN") {
                updateData.checkin_time = new Date();
            } else if (status === "CHECKOUT") {
                updateData.checkout_time = new Date();
            }
            await checkinRecord.update(updateData);
            return res.json({
                success: true,
                message: `Status updated to ${status}`,
            });
        }
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Database error", details: err.message });
    }
}

module.exports = {
    handleCheckin,
    handleBind,
    handleLogin,
    handleCheckout,
    requireAuth,
    redirectIfAuthenticated,
    handleCheckinStatusUpdate,
    getCurrentStatus,
    Login,
};
