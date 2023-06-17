const express = require('express');
const app = express();

const authRoutes = require('./auth')(app);
const categoriesRoutes = require('./category')(app);
const productsRoutes = require('./product')(app);
module.exports = app;