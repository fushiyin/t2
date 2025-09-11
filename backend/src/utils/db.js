const { Sequelize } = require('sequelize');
const bcrypt = require('bcryptjs'); 
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'mariadb',
    logging: false,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

async function insertUser(username, password) {
  const { User } = require('../models/user');
  try {
    const newUser = await User.create({ username, password_hash: bcrypt.hashSync(password, 10), role: 'admin' });
    console.log('User inserted:', newUser.username, newUser.password);
    return newUser;
  } catch (error) {
    console.error('Error inserting user:', error);
    throw error;
  }
}

async function syncModels(options = {}) {
  try {
    await sequelize.sync(options);
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Error syncing models:', error);
  }
}

module.exports = {
  sequelize,
  testConnection,
  syncModels,
  insertUser
};
