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

function ligaParaCliente(telefoneComercial, telefonePessoal){
    console.log(`Ligando para Telefone comercial ${telefoneComercial}`);
    console.log(`Ligando para Telefone pessoal ${telefonePessoal}`);
}

ligaParaCliente(...cliente.telefones)

const encomenda = {
    destinatario: cliente.nome,
    ...cliente.enderecos[0]
}

console.log(encomenda)