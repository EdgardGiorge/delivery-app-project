/* Projeto em grupo: Quando o grupo definiu que eu não participaria mais, comecei a adiantar as telas na nova branch do PR individual, agora repassando para a branch oficial "18"  */

const cors = require('cors');
const path = require('path');

const express = require('express');

require('express-async-errors');
const routes = require('./routes/index');

const middlewares = require('./middlewares');

const app = express();

app.use(cors());

app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(routes);

app.use('/images', express.static(path.resolve(__dirname, 'images')));

app.get('/coffee', (_req, res) => res.status(418).end());

app.use(middlewares.errorHandler);

module.exports = app;