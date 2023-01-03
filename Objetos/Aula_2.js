const cliente = {
    nome: "Bruno",
    idade: 23,
    cpf:"21122255556",
    email:"bruno.silva@outlook.com"
}

console.log(`
            Nome: ${cliente.nome}
            Idade: ${cliente.idade}
            CPF: ${cliente.cpf}
            Email: ${cliente.email}`)

console.log(cliente.cpf.substring(0, 3))