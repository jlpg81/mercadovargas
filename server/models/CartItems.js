const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')


class CartItems extends Model {}
CartItems.init({
  userId: {
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
}, { sequelize, modelName: 'CartItems' });

module.exports = CartItems
