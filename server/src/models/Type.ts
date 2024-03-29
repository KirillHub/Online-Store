import { DataTypes } from 'sequelize';
import { sequelize } from '../database/createConnection.js';
import { Type as TypeModel } from '../types/models.js';

export const _Type = TypeModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      validate: {
        isNumeric: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: 'Type',
    tableName: 'type',
  }
);
