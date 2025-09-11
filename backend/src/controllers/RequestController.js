const { Op } = require("sequelize");
const { LeaveRequest } = require("../models/leave");

async function getLeaveRequests(req, res) {
    try {
        const {
            status,
            start_date,
            end_date,
            leave_type,
            user_id,
            name, 
            page = 1,
            pageSize = 20,
        } = req.query;

        const where = {};
        if (status) where.status = status;
        if (leave_type) where.leave_type = leave_type;
        if (user_id) where.user_id = user_id;
        if (name) where.name = { [Op.like]: `%${name}%` };
        if (start_date && end_date) {
            where.start_date = { [Op.gte]: start_date };
            where.end_date = { [Op.lte]: end_date };
        } else if (start_date) {
            where.start_date = { [Op.gte]: start_date };
        } else if (end_date) {
            where.end_date = { [Op.lte]: end_date };
        }

        const offset = (parseInt(page) - 1) * parseInt(pageSize);
        const { rows, count } = await LeaveRequest.findAndCountAll({
            where,
            offset,
            limit: parseInt(pageSize),
            order: [["created_at", "DESC"]],
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

module.exports = { getLeaveRequests };
