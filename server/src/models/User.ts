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
    },
    name: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
    role: {
      type: DataTypes.STRING,
      defaultValue: 'USER',
    },
  },
  {
    tableName: 'user',
    sequelize: sequelize,
  }
);

/*
import { sequelize } from '../database/createConnection.js';
import { DataTypes } from 'sequelize';

export const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  name: {type: DataTypes.STRING},
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: 'USER' },
 
});

*/
