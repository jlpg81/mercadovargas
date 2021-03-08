// use this file to test the db
const sequelize = require("./server/config/database");
const User = require("./server/models/Users");
const Store = require("./server/models/Stores");
const Product = require("./server/models/Products");
const Order = require("./server/models/Orders");
const OrderItem = require("./server/models/OrderItems");
const CartItem = require("./server/models/CartItems");

const inputDummyData = async () => {
  await sequelize.sync();
  const user = await User.create({
    email: "jorge@email.com",
    firstName: "Jorge",
    lastName: "Perez",
    password: "1234",
  });
  console.log(user.toJSON());

  const store = await Store.create({
    ownerId: 1,
    storeTitle: "Makro Valencia",
    state: "Carabobo",
    city: "Valencia",
    address: "5ta avenida 53",
  });
  console.log(store.toJSON());

  const product = await Product.create({
    storeId: 1,
    productTitle: "Bisteck 1kg",
    productDescription:
      "Carne de tipo bisteck, contiene 5 unidades de 200grs aprox.",
    productPrice: 18.0,
    categoryId: 23,
    amountAvailable: 9999,
  });
  console.log(product.toJSON());

  const product2 = await Product.create({
    storeId: 1,
    productTitle: "Queso Paisa 1kg",
    productDescription: "Queso de los llanos",
    productPrice: 12.0,
    categoryId: 24,
    amountAvailable: 9999,
  });
  console.log(product2.toJSON());

  const order = await Order.create({
    storeId: 1,
    userId: 1,
    orderPrice: 36.0,
  });
  console.log(order.toJSON());

  const orderItem = await OrderItem.create({
    orderId: 1,
    storeId: 1,
    productId: 1,
    quantity: 2,
  });
  console.log(orderItem.toJSON());

  const cartItem = await CartItem.create({
    userId: 1,
    storeId: 1,
    productId: 2,
    quantity: 1,
  });
  console.log(cartItem.toJSON());
};

module.exports = inputDummyData;
