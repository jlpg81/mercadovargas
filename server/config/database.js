const { Sequelize, Model, DataTypes } = require("sequelize");
module.exports = new Sequelize("mercado", "jorge", "jorge", {
  host: "127.0.0.1",
  dialect: "postgres",
});
