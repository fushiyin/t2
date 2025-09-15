const { sequelize } = require("../utils/db");
const { DataTypes } = require("sequelize");

const DailyReport = sequelize.define(
    "DailyReport",
    {
        report_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        report_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        tasks_today: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        plan_tomorrow: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
    },
    {
        tableName: "daily_reports",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
    }
);

try {
    const { User } = require("./user");
    if (User) {
        DailyReport.belongsTo(User, { foreignKey: "user_id", as: "User" });
        User.hasMany(DailyReport, {
            foreignKey: "user_id",
            as: "DailyReports",
        });
    }
} catch (e) {
}

module.exports = { DailyReport };
