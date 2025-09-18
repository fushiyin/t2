const { exec } = require("child_process");
const os = require("os");
const bcrypt = require("bcryptjs");
const { generateRefreshToken } = require("../utils/tokens");

async function Login(req, res) {
    const { username, password, deviceId } = req.body;
    const { User } = require("../models/user");
    const user = await User.findOne({ where: { username } });
    if (!user) {
        return res.status(401).json({ error: "user does not exists" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password_hash);
    if (!passwordMatch) {
        return res.status(401).json({ error: "Invalid credentials" });
    }

    try {
        const { DeviceSession } = require("../models/deviceSession");
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
    } catch (err) {
        console.debug("Device binding check skipped", err.message || err);
    }

    req.session.userId = user.id;
    req.session.userRole = user.role;
    req.session.username = user.username;
    req.session.name = user.name;
    await user.update({ latest_login: new Date() });

    return res.json({
        success: true,
        username: user.username,
        role: user.role,
        user: {
            id: user.id,
            username: user.username,
            role: user.role,
            name: user.name,
            userId: user.id,
        },
    });
}

function requireAuth(req, res, next) {
    if (req.session && req.session.userId) {
        if (req.session.userRole) {
            req.user = {
                id: req.session.userId,
                username: req.session.username,
                role: req.session.userRole,
                name: req.session.name,
            };
            req.userRole = req.session.userRole;
            return next();
        }

        const { User } = require("../models/user");
        User.findOne({ where: { id: req.session.userId } })
            .then((user) => {
                if (user) {
                    req.user = {
                        id: user.id,
                        username: user.username,
                        role: user.role,
                        name: user.name,
                    };
                    req.userRole = user.role;
                    req.session.userRole = user.role;
                    req.session.username = user.username;
                    req.session.name = user.name;
                }
                next();
            })
            .catch(() => next());
        console.log(req.user);
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
    try {
        // destroy express session
        req.session.destroy((err) => {
            // Clear session cookie
            res.clearCookie("connect.sid");
            if (err) {
                return res.status(500).json({ error: "Logout failed" });
            }
            return res.json({ success: true });
        });
    } catch (err) {
        return res
            .status(500)
            .json({ error: "Logout failed", details: err.message });
    }
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

        // Map string statuses to numeric values expected by the checkins table
        const checkinStatusMap = {
            CHECKIN: 1,
            CHECKOUT: 0,
            LEAVE: 2,
        };
        const statusValue = checkinStatusMap[status] ?? null;

        if (!checkinRecord) {
            await Checkin.create({
                employee_id: userId,
                date: today,
                checkin_time: status === "CHECKIN" ? new Date() : null,
                checkout_time: status === "CHECKOUT" ? new Date() : null,
                status: statusValue,
            });
            return res.json({
                success: true,
                message: `Status set to ${status}`,
            });
        } else {
            const updateData = { status: statusValue };
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

async function getMe(req, res) {
    // requireAuth already sets req.user
    if (!req.user) {
        return res.status(401).json({ error: "Not authenticated" });
    }
    res.json({ user: req.user });
}

async function refreshToken(req, res) {
    res.status(410).json({
        error: "Refresh token not supported in session-only mode",
    });
}

async function deviceCheck(req, res) {
    const deviceId = req.body?.deviceId || req.cookies?.deviceId;
    if (!deviceId) {
        return res.status(400).json({ error: "deviceId required" });
    }

    try {
        const { DeviceSession } = require("../models/deviceSession");
        const session = await DeviceSession.findOne({ where: { deviceId } });
        if (!session) {
            return res.status(404).json({ exists: false });
        }
        const { User } = require("../models/user");
        const user = await User.findOne({ where: { id: session.userId } });
        if (!user) {
            return res.status(404).json({ exists: false });
        }

        // Return minimal user info for the frontend to show or to auto-login
        return res.json({
            exists: true,
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
                name: user.name,
            },
            accessToken: session.accessToken,
        });
    } catch (err) {
        console.debug("deviceCheck error", err.message || err);
        return res.status(500).json({ error: "Device check failed" });
    }
}

async function deviceLogin(req, res) {
    const deviceId = req.body?.deviceId || req.cookies?.deviceId;
    if (!deviceId) {
        return res.status(400).json({ error: "deviceId required" });
    }

    try {
        const { DeviceSession } = require("../models/deviceSession");
        const session = await DeviceSession.findOne({ where: { deviceId } });
        if (!session) {
            return res.status(401).json({ error: "Device not recognized" });
        }

        const { User } = require("../models/user");
        const userId = session.userId || session.user_id;
        if (!userId) {
            return res
                .status(401)
                .json({ error: "Device not linked to a user" });
        }

        const user = await User.findOne({ where: { id: userId } });
        if (!user) {
            return res.status(401).json({ error: "User not found for device" });
        }

        // restore express session
        req.session.userId = user.id;
        req.session.userRole = user.role;
        req.session.username = user.username;
        req.session.name = user.name;
        await user.update({ latest_login: new Date() });

        return res.json({
            success: true,
            username: user.username,
            role: user.role,
            user: {
                id: user.id,
                username: user.username,
                role: user.role,
                name: user.name,
                userId: user.id,
            },
        });
    } catch (err) {
        console.debug("deviceLogin error", err.message || err);
        return res.status(500).json({ error: "Device login failed" });
    }
}

module.exports = {
    handleCheckout,
    requireAuth,
    redirectIfAuthenticated,
    handleCheckinStatusUpdate,
    getCurrentStatus,
    Login,
    getMe,
    refreshToken,
    deviceCheck,
    deviceLogin,
};
