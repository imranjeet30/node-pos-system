const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const OrderDetail = sequelize.define(
    "orderDetails",
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'orders',
        referencesKey: 'id' 
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: 'products',
        referencesKey: 'id' 
      },
      quantity:DataTypes.INTEGER
    },
    {
    }
  );

  module.exports = OrderDetail;