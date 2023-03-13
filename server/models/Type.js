const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

module.exports = Type;
