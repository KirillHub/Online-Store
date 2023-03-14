const { Sequelize } = require('sequelize');

const createDatabaseConnection = () => {
  const env = process.env.NODE_ENV || 'development';
  const config = require(__dirname + '/../config/config.json')[env];
  let sequelize;
  if (config.use_env_variable) {
    return (sequelize = new Sequelize(process.env[config.use_env_variable], config));
  }
  sequelize = new Sequelize(config.database, config.username, config.password, config);
  return sequelize;
};

const sequelize = createDatabaseConnection();

module.exports = sequelize;
