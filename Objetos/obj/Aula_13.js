const dados = require("./Aula_12.json");

console.log(typeof dados)

const clienteString = JSON.stringify(dados)

console.log(clienteString);

const cliente = JSON.parse(clienteString);

console.log(cliente)