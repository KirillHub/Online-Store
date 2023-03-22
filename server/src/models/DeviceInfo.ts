import { sequelize } from '../database/createConnection.js';
import { DataTypes } from 'sequelize';
import { DeviceInfo as DeviceInfoModel } from '../types/models.js';

export const _DeviceInfo = DeviceInfoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: 'DeviceInfo',
    tableName: 'device_info',
  }
);
