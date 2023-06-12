const express = require('express');
const app = express();

const authRoutes = require('./auth')(app);
module.exports = app;