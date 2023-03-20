import { sequelize } from '../database/createConnection.js';
import { DataTypes } from 'sequelize';
import { TypeBrand as TypeBrandModel } from '../types/models.js';

export const _TypeBrand = TypeBrandModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize: sequelize,
    modelName: 'type_brand',
  }
);

/*
export const TypeBrand = sequelize.define('type_brand', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});
*/