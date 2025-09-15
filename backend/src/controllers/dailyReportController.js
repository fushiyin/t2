const { Op } = require("sequelize");
const { DailyReport } = require("../models/report");
const { User } = require("../models/user");

const getDailyReports = async (req, res) => {
    try {
        const {
            user_id,
            start_date,
            end_date,
            page = 1,
            pageSize = 20,
            username,
            name,
        } = req.query;

        const where = {};
        const include = [
            {
                model: User,
                as: "User",
                attributes: ["id", "username", "name"],
                required: false,
                where: {},
            },
        ];

        if (user_id) where.user_id = user_id;
        if (start_date && end_date) {
            where.report_date = { [Op.between]: [start_date, end_date] };
        } else if (start_date) {
            where.report_date = { [Op.gte]: start_date };
        } else if (end_date) {
            where.report_date = { [Op.lte]: end_date };
        }

        if (username) {
            include[0].where.username = { [Op.like]: `%${username}%` };
            include[0].required = true;
        }
        if (name) {
            include[0].where.name = { [Op.like]: `%${name}%` };
            include[0].required = true;
        }

        if (Object.keys(include[0].where).length === 0) delete include[0].where;

        const offset = (parseInt(page) - 1) * parseInt(pageSize);
        const { rows, count } = await DailyReport.findAndCountAll({
            where,
            include,
            offset,
            limit: parseInt(pageSize),
            order: [["report_date", "DESC"]],
        });

        const data = rows.map((r) => {
            const obj = r.toJSON();
            const user = obj.User || {};
            delete obj.User;
            return {
                ...obj,
                username: user.username || null,
                name: user.name || null,
            };
        });

        res.json({
            data,
            total: count,
            page: parseInt(page),
            pageSize: parseInt(pageSize),
        });
    } catch (err) {
        res.status(500).json({ error: "Database error", details: err.message });
    }
};

const createNewReport = async (req, res) => {
    try {
        const { report_date, tasks_today, plan_tomorrow, project_id } =
            req.body;

        const newReport = await DailyReport.create({
            user_id: req.user.id,
            report_date,
            tasks_today,
            plan_tomorrow,
            project_id,
        });

        console.log(newReport)

        res.status(201).json({ data: newReport });
    } catch (err) {
        res.status(500).json({ error: "Database error", details: err.message });
    }
};

module.exports = {
    getDailyReports,
    createNewReport,
};
