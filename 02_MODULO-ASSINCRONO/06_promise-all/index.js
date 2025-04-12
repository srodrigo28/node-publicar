const loadProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve([{id: "1", name: "Macbook Pro", price: 20200}])
        }, 1000)
    })
}

const loadCategories = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve([{id: "1", name: "Categorias"}])
        }, 2000)
    })
}

const loadUsers = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve([{id: "1", name: "Maria Sousa", age: 19}])
        }, 3000)
    })
}

const init = async () => {
    const users = await loadUsers();
    const products = await loadProducts();
    const categories = await loadCategories();

    console.log({ products, users, categories })
}
init()