// import ProductImport from "./product.js"
import { CreateProduct, Product, ProductPrice } from "./product.js"

console.log("Welcome to FSC!")


const product = CreateProduct(1, 'Macbook', 12000);
const product2 = new Product(2, "iPhone", 10200)

console.log(product.getInfo())
console.log(product2.getInfo())

console.log("Preço do produto: R$", ProductPrice)
