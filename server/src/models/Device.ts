import { sequelize } from '../database/createConnection.js';
import { DataTypes } from 'sequelize';
import { Device as DeviceModel } from '../types/models.js';

export const _Device = DeviceModel.init(
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
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   //  brandId: { type: DataTypes.NUMBER },
   //  typeId: { type: DataTypes.NUMBER },
  },
  {
    sequelize: sequelize,
    modelName: 'device',
  }
);

/*
export const Device = sequelize.define('device', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, allowNull: false },
  rating: { type: DataTypes.INTEGER, defaultValue: 0 },
  img: { type: DataTypes.STRING, allowNull: false },
});
*/
