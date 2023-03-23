import { DataTypes } from 'sequelize';
import { sequelize } from '../database/createConnection.js';
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
    modelName: 'Basket',
    tableName: 'basket',
  }
);
