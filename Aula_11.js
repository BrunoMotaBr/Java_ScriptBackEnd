
// Parametros
function soma(n1, n2){
    return n1+n2;
}

console.log(soma(5,2));

// Argumento possui uma ordem expecifica
function nomeIdade(nome, idade){
    return "Meu nome é " + nome + " e minha idade " + idade;
}

console.log(nomeIdade("Bruno", 23))

// Argumento é o numero que a variavel n1 e n2 recebe de padrão no exemplo 1
function multiplica(n1 = 1, n2 = 1){
    return n1 * n2;
}
console.log(multiplica(soma(2,3), soma(5,3)))
