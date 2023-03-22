import { sequelize } from '../database/createConnection.js';
import { DataTypes } from 'sequelize';
import { User as UserModel } from '../types/models.js';

export const _User = UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'USER',
    },
  },
  {
    sequelize: sequelize,
    modelName: 'User',
    tableName: 'user',
  }
);
