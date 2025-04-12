const path = require("path")
const fs = require('fs')

// criar uma pasta no diretório atual
// fs.mkdir(path.join(__dirname, 'new-folder'), () => {})

// cria uma pasta
// fs.mkdir(path.join(__dirname, 'new-folder2'), (error) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log('Criado com sucesso')
//     }
// })

// criar um arquivo na nova pasta
// fs.writeFile(path.join(__dirname, 'new-folder2', 'new-file.txt'), 'Hello the boy 2, or big girls', (error) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log('Criado com sucesso')
//     }
// })

// adicionando + textos
// fs.appendFile(path.join(__dirname, 'new-folder2', 'new-file.txt'), '\n Hello world!', (error) => {
//     if(error){
//         console.log(error)
//     }else{
//         console.log('Atualizado com sucesso')
//     }
// })

// Ler os dados de um arquivo

let fileContent = ''

fs.readFile(path.join(__dirname, "new-folder2", "new-file.txt"), "utf-8", (error, data) => {
    if(error){
        console.log(error)
    }else{
        // console.log(data)
        fileContent = data
    }
    console.log("Conteúdo do arquivo: \n\n", fileContent)
})
