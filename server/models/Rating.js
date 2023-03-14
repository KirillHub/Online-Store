const sequelize = require('../database/createConnection');
const { DataTypes } = require('sequelize');

const Rating = sequelize.define('rating', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = Rating;
