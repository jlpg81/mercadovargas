var express = require("express");
var router = express.Router();
const { graphqlHTTP } = require("express-graphql");

const schema = require("../../schema");
const { mainView } = require("../controllers/controllers");

router.get("/", mainView);
// router.post(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     graphiql: true,
//   })
// );

module.exports = router;
