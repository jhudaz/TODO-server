require('dotenv').config();

const users = require('./api/users');
const toDos = require('./api/todos');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const app = express();
const port = process.env.PORT || 4000;
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DIALECT
});

app.use(bodyParser.json());

app.use(cors());

app.use('/users', users);
app.use('/todos', toDos);

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));