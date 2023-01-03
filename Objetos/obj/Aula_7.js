const cliente = {
    nome: "Joao",
    idade: 25,
    email: "joao@dominio.com",
    telefones: ["11955885869", "1147586699"]
};

cliente.enderecos = [{
    rua: "Jose antonio",
    numero: 1337,
    apt: true,
    complemento: "ap 934"
}];

cliente.enderecos.push({
    rua: "Joao Avilar",
    numero: 404,
    apt: false
})


console.log(cliente.enderecos);

const listaApenasApt = cliente.enderecos.filter((endereco) => endereco.apt === true)

console.log(listaApenasApt)
