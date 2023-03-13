require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const models = require('./models/index');
const cors = require('cors');
const router = require('./routes/index');
const errorHandler = require('./middleware/ErrorHandlingMiddleware');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

// error handling, latest middleware
app.use(errorHandler);

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

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
