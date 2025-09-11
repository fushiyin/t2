const { Op } = require("sequelize");
const { Checkin } = require("../models/checkin");
const { User } = require("../models/user");

async function getCheckins(req, res) {
    try {
        const {
            page = 1,
            pageSize = 20,
            sortBy = "checkin_time",
            sortOrder = "DESC",
            name,
            startDate,
            endDate,
            status,
        } = req.query;

        const where = {};
        if (startDate && endDate) {
            where.date = { [Op.between]: [startDate, endDate] };
        } else if (startDate) {
            where.date = { [Op.gte]: startDate };
        } else if (endDate) {
            where.date = { [Op.lte]: endDate };
        }

        if (status === "late") {
            where.status = false;
        } else if (status === "on-time") {
            where.status = true;
        }

        const userWhere = {};
        if (name) {
            userWhere.name = { [Op.like]: `%${name}%` };
        }

        const offset = (parseInt(page) - 1) * parseInt(pageSize);

        const { rows, count } = await Checkin.findAndCountAll({
            where,
            include: [
                {
                    model: User,
                    where: userWhere,
                    attributes: ["id", "name", "username", "email"],
                },
            ],
            order: [[sortBy, sortOrder]],
            offset,
            limit: parseInt(pageSize),
        });

        res.json({
            data: rows,
            total: count,
            page: parseInt(page),
            pageSize: parseInt(pageSize),
        });
    } catch (err) {
        res.status(500).json({ error: "Database error", details: err.message });
    }
}

module.exports = { getCheckins };
