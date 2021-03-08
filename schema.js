const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLFloat,
} = require("graphql");

const { users, stores, products } = require("./dummydata2");

// User Type
const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: GraphQLString },
    email: { type: GraphQLString },
    firstName: { type: GraphQLString },
    lastName: { type: GraphQLString },
    userType: { type: GraphQLInt },
    deleted: { type: GraphQLInt },
  }),
});

const StoreType = new GraphQLObjectType({
  name: "Store",
  fields: {
    id: { type: GraphQLInt },
    ownerId: { type: GraphQLInt },
    storeTitle: { type: GraphQLString },
    state: { type: GraphQLString },
    city: { type: GraphQLString },
    address: { type: GraphQLString },
    verified: { type: GraphQLInt },
    commission: { type: GraphQLInt },
    deleted: { type: GraphQLInt },
    rating: { type: GraphQLFloat },
    logo: { type: GraphQLString },
    votes: { type: GraphQLInt },
  },
});

const ProductType = new GraphQLObjectType({
  name: "Product",
  fields: {
    id: { type: GraphQLInt },
    upc: { type: GraphQLInt },
    productTitle: { type: GraphQLString },
    productDescription: { type: GraphQLString },
    productPrice: { type: GraphQLInt },
    categoryId: { type: GraphQLInt },
    amountAvailable: { type: GraphQLInt },
    currentlySold: { type: GraphQLInt },
    deleted: { type: GraphQLInt },
  },
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    user: {
      type: UserType,
      args: {
        id: { type: GraphQLString },
      },
      resolve(parent, args) {
        for (let i = 0; i < users.length; i++) {
          if (users[i].id == args.id) {
            return users[i];
          }
        }
      },
    },

    users: {
      type: GraphQLList(UserType),
      resolve(parent, args) {
        return users;
      },
    },

    stores: {
      type: GraphQLList(StoreType),
      resolve(parent, args) {
        return stores;
      },
    },

    products: {
      type: GraphQLList(ProductType),
      resolve(parent, args) {
        return products;
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
