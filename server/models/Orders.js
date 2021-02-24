const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')


class Orders extends Model {}
Orders.init({
  storeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  delivered: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  details: {
    type: DataTypes.STRING,
  },
  orderPrice: {
    type: DataTypes.DECIMAL(20, 2),
    allowNull: false
  },
}, { sequelize, modelName: 'Orders' });

module.exports = Orders
