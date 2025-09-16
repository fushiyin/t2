const { sequelize } = require("../utils/db");
const { DataTypes } = require("sequelize");

const Project = sequelize.define(
    "Project",
    {
        project_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        client_name: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        project_manager: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: true,
        },
        status: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        budget: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: true,
        },
        actual_cost: {
            type: DataTypes.DECIMAL(12, 2),
            allowNull: true,
        },
    },
    {
        tableName: "projects",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        underscored: true,
    }
);

try {
    const { Report } = require("./report");
    if (Report) {
        Project.hasMany(Report, { foreignKey: "project_id", as: "Reports" });
        Report.belongsTo(Project, { foreignKey: "project_id", as: "Project" });
    }
} catch (e) {}

module.exports = { Project };
