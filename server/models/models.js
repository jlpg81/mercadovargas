const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'jorge', 'jorge', {
  host: 'localhost',
  dialect: 'postgres'
});
