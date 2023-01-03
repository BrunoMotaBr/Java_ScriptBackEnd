
function apresentar(frase){
    return `Olá meu nome é ${frase}`
}


const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

console.log(apresentarArrow("Bruno"))
console.log(soma(2, 2))
console.log(apresentar("Bruno"))

const somaDeNumerosPequenos = (n1, n2) => {
    if(n1 > 10 || n2 > 10){
        return "Um dos números é maior que 10"
    }else{
        return n1 + n2
    }
} 

console.log(somaDeNumerosPequenos(5, 11));
