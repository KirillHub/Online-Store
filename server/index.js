require('dotenv').config();

const express = require('express');
// const sequelize = require('./db');
const models = require('./models/index');
const handleError = require('./middleware/errors');
const cors = require('cors');
const router = require('./routes/index');
// const createDatabaseConnection = require('./database/db');
const sequelize = require('./database/createConnection');
const { RouteNotFoundError } = require('./errors/customErrors');

// let sequelize;

const establishDatabaseConnection = async () => {
  try {
    sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    });
    await sequelize.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

const initializeExpress = () => {
  const app = express();
  const PORT = process.env.PORT || 5000;

  app.use(cors());
  app.use(express.json());
  app.use('/api', router);

  app.use((req, _res, next) => next(new RouteNotFoundError(req.originalUrl)));
  // error handling, latest middleware
  app.use(handleError);

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

/*
const start = async () => {
  try {
    await sequelize.authenticate().then(() => {
      console.log('Connection has been established successfully.');
    });
    await sequelize.sync();
  } catch (e) {
    console.error('Unable to connect to the database:', e);
  }
};

start();
*/

const initializeApp = async () => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
