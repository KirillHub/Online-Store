// import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { sequelize } from './database/createConnection.js';
import { router } from './routes/index.js';
import { RouteNotFoundError } from './errors/customErrors.js';
import { handleError } from './middleware/errors.js';
import fileUpload from 'express-fileupload';
import path from 'path';

// assisiation
// import * as modelsWithAssociations from './associations/modelAssociations.js';

// dotenv.config();

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

  // create filePath for static
  const __dirname = path.resolve();
  const fp = path.resolve(__dirname, 'static');

  app.use(cors());
  app.use(express.json());
  app.use(express.static(fp));
  app.use(fileUpload({}));
  app.use('/api', router);

  app.use((req, _res, next) => next(new RouteNotFoundError(req.originalUrl)));

  // error handling, latest middleware
  app.use(handleError);

  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
};

const initializeApp = async () => {
  await establishDatabaseConnection();
  initializeExpress();
};

initializeApp();
