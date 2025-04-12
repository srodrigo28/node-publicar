const path = require("path")
const fs = require('fs')

//testando
console.log(path.join(__dirname, "message.txt"));
console.log(path.join(__dirname, "folder", "message.txt"));

fs.writeFileSync(path.join(__dirname, "message3.txt"), 
    "Welcome to Treina Dev NodeJS Impressionador!", () => {}
);