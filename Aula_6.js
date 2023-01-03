// Conversão e tipos de dados
// booleanos

// Conversão de implicita
const numero = 457;
const numeroString = "457";

console.log(numero === numeroString); // retornara false pois mesmo que parecem iguais na vdd nao sao diferentes tipos
console.log(numero == numeroString); //comparaçao implicita retornara True

// Conversao explicita

console.log(numero + Number(numeroString));