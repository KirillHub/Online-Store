import { DataTypes } from 'sequelize';
import { sequelize } from '../database/createConnection.js';
import { Brand as BrandModel } from '../types/models.js';

export const _Brand = BrandModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: 'Brand',
	 tableName: 'brand'
  }
);
