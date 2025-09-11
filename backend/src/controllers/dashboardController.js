const { User } = require("../models/user");
const { Checkin } = require("../models/checkin");
const { Op, Sequelize } = require("sequelize");

User.hasMany(Checkin, { foreignKey: "employee_id" });
Checkin.belongsTo(User, { foreignKey: "employee_id" });

async function getDashboardSummary(req, res) {
    try {
        const today = new Date().toISOString().slice(0, 10);
        const nineAM = new Date(`${today}T09:00:00`);

        const data = await Checkin.findAll({
            where: { date: today },
            include: [
                {
                    model: User,
                },
            ],
        });

        const totalLateCheckin = data.filter((record) => {
            const checkinTime = new Date(record.checkin_time);
            return checkinTime > nineAM;
        });

        const totalUser = await User.count();

        const flatData = data.map((record) => ({
            ...record.toJSON(),
            name: record.User ? record.User.name : null,
            email: record.User ? record.User.email : null,
            status: record.User ? record.User.status : null,
        }));

        res.json({
            data: flatData,
            lateCheckInList: totalLateCheckin,
            totalLoginToday: flatData.length,
            totalLateCheckin: totalLateCheckin.length,
            totalEmployees: totalUser,
        });
    } catch (err) {
        res.status(500).json({ error: "Database error", details: err.message });
    }
}

const getGeneralStats = async (req, res) => {
    try {
        const maleCount = await User.count({ where: { gender: "MALE" } });
        const femaleCount = await User.count({ where: { gender: "FEMALE" } });

        const today = new Date();
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(today.getDate() - 5);
        sevenDaysAgo.setHours(0, 0, 0, 0);

        const weeklyCheckins = await Checkin.findAll({
            where: {
                date: { [Op.gte]: sevenDaysAgo.toISOString().slice(0, 10) },
            },
        });

        const days = [];
        for (
            let d = new Date(sevenDaysAgo);
            d <= today;
            d.setDate(d.getDate() + 1)
        ) {
            days.push(d.toISOString().slice(0, 10));
        }

        const checkinStats = {};
        days.forEach((day) => {
            checkinStats[day] = { late: 0, onTime: 0 };
        });

        weeklyCheckins.forEach((record) => {
            const checkinTime = new Date(record.checkin_time);
            const nineAM = new Date(`${record.date}T09:00:00`);

            if (!checkinStats[record.date]) {
                checkinStats[record.date] = { late: 0, onTime: 0 };
            }

            if (checkinTime > nineAM) {
                checkinStats[record.date].late += 1;
            } else {
                checkinStats[record.date].onTime += 1;
            }
        });

        // count users by ranking
        const result = await User.findAll({
            attributes: [
                "ranking",
                [Sequelize.fn("COUNT", Sequelize.col("ranking")), "count"],
            ],
            group: ["ranking"],
            raw: true,
        });

        const rankingStats = {};
        result.forEach((row) => {
            rankingStats[row.ranking] = parseInt(row.count, 10);
        });

        res.json({
            genderDistribution: {
                male: maleCount,
                female: femaleCount,
            },
            weeklyCheckinStats: checkinStats,
            rankingDistribution: rankingStats,
        });
    } catch (err) {
        res.status(500).json({ error: "Database error", details: err.message });
    }
};

module.exports = {
    getDashboardSummary,
    getGeneralStats,
};
