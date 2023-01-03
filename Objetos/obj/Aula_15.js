const clientes = require("./cliente.json");

function filtroApSemComplemento(lista){
    return lista.filter((cliente) => {
        return (cliente.endereco.apartamento === true && !cliente.endereco.hasOwnProperty("complemento"))
    })
}

const filtrados = filtroApSemComplemento(clientes)

console.log(filtrados)