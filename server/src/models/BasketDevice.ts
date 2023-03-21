import { sequelize } from '../database/createConnection.js';
import { DataTypes } from 'sequelize';
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
    modelName: 'basket_device',
  }
);
