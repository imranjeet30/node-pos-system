const express = require('express');
const app = express();

const authRoutes = require('./auth')(app);
const categoriesRoutes = require('./category')(app);
const productsRoutes = require('./product')(app);
const ordersRoutes = require('./order')(app);
module.exports = app;