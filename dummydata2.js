const users = [
  {
    id: 1,
    email: "jorge@email.com",
    firstName: "Jorge",
    lastName: "Perez",
    password: "1234",
  },
  {
    id: 2,
    email: "emilia@email.com",
    firstName: "Emilia",
    lastName: "Vargas",
    password: "1234",
  },
  {
    id: 3,
    email: "roberto@email.com",
    firstName: "Roberto",
    lastName: "Lopez",
    password: "1234",
  },
];

const stores = [
  {
    id: 1,
    ownerId: 1,
    storeTitle: "Makro Valencia",
    state: "Carabobo",
    city: "Valencia",
    address: "5ta avenida 53",
    rating: 2.5,
    logo:
      "https://seeklogo.com/images/M/makro-logo-920A0E17F9-seeklogo.com.png",
    // logo: "brand.jpg",
    votes: 204,
  },
  {
    id: 2,
    ownerId: 2,
    storeTitle: "La Bodega",
    state: "Carabobo",
    city: "Valencia",
    address: "Calle Bolivar 84",
    rating: 3.7,
    logo:
      "https://labodega.uy/wp-content/uploads/2020/03/la-bodega-LOGO-133-05.png",
    // logo:
    // "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0019/0180/brand.gif?itok=-bfIwBf2",
    // logo: "brand2.jpg",
    votes: 42,
  },
  {
    id: 3,
    ownerId: 3,
    storeTitle: "Super Foods",
    state: "Distrito Federal",
    city: "Caracas",
    address: "Av. Paez 12",
    rating: 4.1,
    logo:
      "https://image.freepik.com/free-vector/modern-super-foods-logo-template_83529-210.jpg",
    // logo: "brand3.jpg",
    votes: 85,
  },
];

const products = [
  {
    id: 1,
    storeId: 1,
    productTitle: "Queso Paisa 1kg",
    productDescription: "Queso de los llanos",
    productFormat: "1kg",
    productPrice: 12.0,
    categoryId: 24,
    amountAvailable: 9999,
    productImage:
      "https://www.thehallacafactory.com/image/cache/catalog/quesopaisa-500x500.jpg",
  },
  {
    id: 2,
    storeId: 1,
    productTitle: "Harina Pan 500gr",
    productDescription: "Harina para arepas",
    productFormat: "500gr",
    productPrice: 2.0,
    categoryId: 24,
    amountAvailable: 9999,
    productImage:
      "https://elrincondelaabuelavenezolana.com/wp-content/uploads/2018/02/harina-pan-blanca-1kg-el-rincon-de-la-abuela-venezolana.jpg",
  },
  {
    id: 3,
    storeId: 1,
    productTitle: "Tomates 1kg",
    productDescription: "Tomates frescos",
    productFormat: "1kg",
    productPrice: 2.0,
    categoryId: 24,
    amountAvailable: 9999,
    productImage:
      "https://imagenes.20minutos.es/files/article_amp/uploads/2020/07/27/tomates.jpeg",
  },
];

module.exports = { users, stores, products };
