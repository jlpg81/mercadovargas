const express = require("express");
const logger = require("morgan");
const router = require("./server/router/router");
const bodyParser = require("body-parser");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");

// const sequelize = require("./server/config/database");
const schema = require("./schema.js");

// // Database
// sequelize
//   .authenticate()
//   .then(() => console.log("Database connected..."))
//   .catch((err) => console.log("error in database connection", err));

// Uncomment this in order to regenerate the tables
// const inputDummyData = require('./dummydata')
// inputDummyData()

// for authentication, use passport.js

const app = express();

const PORT = process.env.PORT || 4000;

// app.use(logger("dev"));
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

// GraphQL
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Listening at http://127.0.0.1:${PORT}`);
});
