const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database')


class Categories extends Model {}
Categories.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { sequelize, modelName: 'Categories' });

module.exports = Categories
