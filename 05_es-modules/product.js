export class Product{
    constructor(id, name, price){
        this.name = name;
        this.price = price;
        this.id = id;
    }

    getInfo(){
        return `ID do produto: ${this.id}; Nome: ${this.name}; Preço: ${this.price}`;
    }

}

export function CreateProduct(id, name, price){
    return new Product(id, name, price);
}

export const ProductPrice = 200;

// export default {
//     Product,
//     CreateProduct,
//     ProductPrice
// }

// module.exports = createProduct; // 100%
// module.exports = { createProduct, Product } // 100%