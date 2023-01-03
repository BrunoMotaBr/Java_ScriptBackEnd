const clientes = require("./cliente.json");


function ordenar(lista, parametro){
    const resultado = lista.sort((a, b) => {
        if(a[parametro] < b[parametro]){
            return -1
        }
        if(a[parametro] > b[parametro]){
            return 1
        }
        return 0
    }) 
    return resultado;
}

const nomesEmOrdem = ordenar(clientes, 'nome');

console.log(nomesEmOrdem);