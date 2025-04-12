const loadProducts = () => {
    return new Promise((resolve, reject) => {
        const error = true
        if(error){
            return reject(error)
        }
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
    try{
        const results = await Promise.allSettled(
            [ loadUsers(), loadCategories(), loadProducts()]
        );
        console.log(results)
        console.log(results[0])
        console.log(results[1])
        console.log(results[2])
    }catch(error){
        console.log(error)
    }
}
init()