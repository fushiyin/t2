const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const LeaveRequest = sequelize.define(
    "LeaveRequest",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        employee_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        leave_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        reason: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updated_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        substitute_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        leader_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        leader_status: {
            type: DataTypes.ENUM("pending", "approved", "rejected"),
            allowNull: true,
        },
        leader_approved_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        hr_leader_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        hr_status: {
            type: DataTypes.ENUM("pending", "approved", "rejected"),
            allowNull: true,
        },
        hr_approved_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        final_status: {
            type: DataTypes.ENUM("pending", "approved", "rejected"),
            allowNull: true,
        },
    },
    {
        tableName: "leave_request",
        timestamps: false,
    }
);

module.exports = { LeaveRequest };
