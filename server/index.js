require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const models = require('./models/index');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

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
