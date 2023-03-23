import { DataTypes } from 'sequelize';
import { sequelize } from '../database/createConnection.js';
import { BasketDevice as BasketDeviceModel } from '../types/models.js';

export const _BasketDevice = BasketDeviceModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize: sequelize,
    modelName: 'BasketDevice',
    tableName: 'basket_device',
  }
);
