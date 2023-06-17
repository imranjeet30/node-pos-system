const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Category = sequelize.define(
    "categories",
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
    },
    {
    }
  );

  module.exports = Category;