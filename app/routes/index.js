const express = require('express');
const app = express();

const authRoutes = require('./auth')(app);
const categoriesRoutes = require('./category')(app);
module.exports = app;