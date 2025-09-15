const { User } = require("../models/user");
const { Op } = require("sequelize");

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
            attributes: ["id", "name", "username", "role"],
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
        const defaultPassword = "motconvit"; // Define your default password here
        await user.update({ password: defaultPassword });
        res.json({ message: "Password reset successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to reset password" });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    resetPassword,
};
