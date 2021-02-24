const { Sequelize, Model, DataTypes } = require('sequelize');
module.exports = new Sequelize('mercado', 'jorge', 'jorge', {
  host: 'localhost',
  dialect: 'postgres'
});

