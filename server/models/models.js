const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize("database", "jorge", "jorge", {
  host: "127.0.0.1",
  dialect: "postgres",
});
