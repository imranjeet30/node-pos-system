const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");
const OrderDetail = require("./OrderDetail");

const Order = sequelize.define(
  "orders",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: "users",
      referencesKey: "id",
    },
    status: DataTypes.INTEGER,
  },
  {}
);

Order.orderDetails = Order.hasMany(OrderDetail, {
  foreignKey:'order_id'
});
module.exports = Order;
