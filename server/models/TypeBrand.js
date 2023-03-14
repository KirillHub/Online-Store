const sequelize = require('../database/createConnection');
const { DataTypes } = require('sequelize');

const TypeBrand = sequelize.define('type_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

module.exports = TypeBrand;
