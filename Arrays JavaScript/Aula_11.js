const notas = [10, 6.5, 8, 7.5];
let somaNotas = 0;

for(let elemento of notas){
    somaNotas += elemento;
}
const media = somaNotas / notas.length
console.log(media)
