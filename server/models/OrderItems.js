const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')


class OrderItems extends Model {}
OrderItems.init({
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  storeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false
  } 
}, { sequelize, modelName: 'OrderItems' });

module.exports = OrderItems
