import { sequelize } from '../database/createConnection.js';
import { DataTypes } from 'sequelize';
import { Basket as BasketModel } from '../types/models.js';

export const _Basket = BasketModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize: sequelize,
    modelName: 'basket',
  }
);
