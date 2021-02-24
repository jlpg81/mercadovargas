const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')


class Products extends Model {}
Products.init({
  storeId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  upc: {
    type: DataTypes.INTEGER,
  },
  productTitle: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  productDescription: {
    type: DataTypes.STRING,
  },
  productPrice: {
    type: DataTypes.DECIMAL(20, 2),
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  amountAvailable: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  currentlySold: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  deleted: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, { sequelize, modelName: 'Products' });

module.exports = Products
