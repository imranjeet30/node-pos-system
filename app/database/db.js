const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node_pos_system', 'root', 'Ranjeet!@#94', {
    host: 'localhost',
    dialect: 'mysql'
  });

  module.exports =  sequelize;