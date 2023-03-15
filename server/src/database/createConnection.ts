import { BaseConfig, Config } from 'types/config.js';
import { Sequelize } from 'sequelize';
import configJson from '../../config/config.json' assert { type: 'json' };

const createDatabaseConnection = () => {
  const env = (process.env.NODE_ENV || 'development') as keyof Config;
  const config: BaseConfig = configJson[env];

  const sequelize = new Sequelize({
    username: config.username,
    password: config.password,
    database: config.database,
    host: config.host,
    dialect: 'postgres',
  });

  return sequelize;
};

export const sequelize = createDatabaseConnection();
