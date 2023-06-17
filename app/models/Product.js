const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Product = sequelize.define(
    "products",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: 'categories',
        referencesKey: 'id' 
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
    }
  );

  module.exports = Product;