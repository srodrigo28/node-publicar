const path = require("path")

// console.log(__filename);
// console.log(__dirname)

// pegar o nome de um arquivo
console.log("Nome do arquivo: ", path.basename(__filename))
console.log("Nome do diretório: ", path.basename(__dirname))

// pegar a extensão de um arquivo
console.log("Extensão do arquivo: ", path.extname(__filename))