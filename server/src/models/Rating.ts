import { DataTypes } from 'sequelize';
import { sequelize } from '../database/createConnection.js';
import { Rating as RatingModel } from '../types/models.js';

export const _Rating = RatingModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize,
    modelName: 'Rating',
	 tableName: 'rating'
  }
);
