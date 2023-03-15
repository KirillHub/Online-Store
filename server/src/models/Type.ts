import { sequelize } from '../database/createConnection.js';
import { DataTypes } from 'sequelize';

export const Type = sequelize.define('type', {
  id: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});
