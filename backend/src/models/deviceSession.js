const { DataTypes } = require("sequelize");
const { sequelize } = require("../utils/db");

const DeviceSession = sequelize.define(
    "DeviceSession",
    {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        userId: { type: DataTypes.INTEGER, allowNull: false },
        deviceId: { type: DataTypes.STRING, allowNull: false },
        refreshToken: { type: DataTypes.STRING, allowNull: false },
    },
    { tableName: "device_sessions", timestamps: false }
);

module.exports = { DeviceSession };
