const cliente = {
    nome: "Bruno",
    idade: 23,
    cpf:"21122255556",
    email:"bruno.silva@outlook.com",
    fone: ["940350891", "945656895"]
}
cliente.dependentes = {
    nome:"Sarah",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}

cliente.dependentes.nome = "Sarah Silva"

console.log(cliente)