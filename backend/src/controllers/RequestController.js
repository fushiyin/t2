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
        console.log(req.userRole);
        if (req.userRole === "employee") {
            where.user_id = req.user.id;
        } else if (user_id) {
            where.user_id = user_id;
        }
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

async function updateLeaveRequestStatus(req, res) {
    try {
        console.log(req);
        const { id } = req.params;
        const { status } = req.body;

        const { userRole, user } = req;
        const request = await LeaveRequest.findByPk(id);
        if (!request) {
            return res.status(404).json({ error: "Leave request not found" });
        }

        const validStatuses = ["pending", "approved", "rejected"];
        if (!validStatuses.includes((status || "").toLowerCase())) {
            return res.status(400).json({ error: "Invalid status" });
        }

        if (userRole === "admin") {
            request.hr_status = status;
            request.hr_leader_id = user.id;
            request.hr_approved_at = new Date();
        } else if (userRole === "manager" || userRole === "leader") {
            request.leader_status = status;
            request.leader_id = user.id;
            request.leader_approved_at = new Date();
        } else {
            return res
                .status(403)
                .json({ error: "Forbidden: insufficient role" });
        }

        await request.save();
        res.json({ success: true, data: request });
    } catch (err) {
        res.status(500).json({ error: "Database error", details: err.message });
    }
}

const getLeaveRequestsById = async (req, res) => {
    try {
        const { id } = req.params;
        const request = await LeaveRequest.findByPk(id);
        if (!request) {
            return res.status(404).json({ error: "Leave request not found" });
        }
        res.json({ data: request });
    } catch (err) {
        res.status(500).json({ error: "Database error", details: err.message });
    }
};

const addRequest = async (req, res) => {
    try {
        const { leave_type, start_date, end_date, reason, substitute_id } =
            req.body;
        if (!leave_type || !start_date || !end_date) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        let status = "pending";
        if (
            req.userRole === "admin" ||
            req.userRole === "manager" ||
            req.userRole === "leader"
        ) {
            status = "approved";
        }
        const newRequest = await LeaveRequest.create({
            user_id: req.user.id,
            employee_name: req.user.name,
            leave_type,
            start_date,
            end_date,
            reason,
            status,
            substitute_id,
            created_at: new Date(),
            updated_at: new Date(),
        });
        res.json({ success: true, data: newRequest });
    } catch (err) {
        res.status(500).json({ error: "Database error", details: err.message });
    }
};

module.exports = {
    getLeaveRequests,
    updateLeaveRequestStatus,
    getLeaveRequests,
    addRequest,
    getLeaveRequestsById,
};
