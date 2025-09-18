const { User } = require("../models/user");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");

async function getAllUsers(req, res) {
    try {
        const { search = "", role, page = 1, limit = 20 } = req.query;
        const where = {};

        if (search) {
            where[Op.or] = [
                { name: { [Op.like]: `%${search}%` } },
                { username: { [Op.like]: `%${search}%` } },
            ];
        }

        if (role) {
            where.role = role;
        }

        const pageNum = Math.max(1, parseInt(page, 10) || 1);
        const pageSize = Math.max(1, parseInt(limit, 10) || 20);
        const offset = (pageNum - 1) * pageSize;

        const { rows, count } = await User.findAndCountAll({
            where,
            attributes: [
                "id",
                "name",
                "username",
                "role",
                "email",
                "date_of_birth",
                "phone_number",
            ],
            limit: pageSize,
            offset,
            order: [["name", "ASC"]],
        });

        res.json({ users: rows, total: count, page: pageNum, pageSize });
    } catch (err) {
        res.status(500).json({
            error: "Failed to fetch users",
            details: err.message,
        });
    }
}

async function getUserById(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch user" });
    }
}

async function updateUser(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" });
        await user.update(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: "Failed to update user" });
    }
}

async function resetPassword(req, res) {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({ error: "User not found" });
        const defaultPassword = "motconvit";
        await user.update({ password: defaultPassword });
        res.json({ message: "Password reset successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to reset password" });
    }
}

async function createUser(req, res) {
    try {
        const {
            name,
            username,
            email,
            role = "user",
            password,
            date_of_birth,
            gender,
            department,
            phone_number,
        } = req.body;
        if (!name || !username) {
            return res
                .status(400)
                .json({ error: "Name and username are required" });
        }

        // check duplicate username
        const existing = await User.findOne({ where: { username } });
        if (existing) {
            return res.status(409).json({ error: "Username already exists" });
        }

        const plainPassword = password || "motconvit";
        const password_hash = await bcrypt.hash(plainPassword, 10);

        const created = await User.create({
            name,
            username,
            email: email || null,
            role,
            date_of_birth: date_of_birth || null,
            gender: gender || null,
            department: department || "project",
            phone_number: phone_number || null,
            password_hash,
        });

        // Do not return password hash
        const { password_hash: _, ...safeUser } = created.get({ plain: true });
        res.status(201).json(safeUser);
    } catch (err) {
        console.error("Failed to create user", err);
        res.status(500).json({
            error: "Failed to create user",
            details: err.message,
        });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    resetPassword,
    createUser,
};
