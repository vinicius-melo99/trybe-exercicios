const express = require('express');
require('express-async-errors');
const adtivitiesRoute = require('./routes/activitiesRoute');
const middlewares = require('./middlewares/index');

const app = express();

app.use(express.json());

app.use('/activities', adtivitiesRoute);

app.use(middlewares.error);

module.exports = app;