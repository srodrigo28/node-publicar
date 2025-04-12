// const createProduct = require('./product') // 100%
const { createProduct, Product } = require("./product")
// import createProduct from './product'; // não funcionou

console.log("Welcome to FSC!")


const product = createProduct(1, 'Macbook', 12000);
const product2 = new Product(2, "iPhone", 10200)

console.log(product.getInfo())
console.log(product2.getInfo())
