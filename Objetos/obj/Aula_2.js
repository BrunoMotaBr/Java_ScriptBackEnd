const cliente = {
    nome: "Bruno",
    idade: 23,
    cpf: "47647395858",
    email: "bruno.silvamota@outlook.com"
};

console.log(`Olá Sr ${cliente.nome} seus 3 primeiros digitos do CPF: ${cliente.cpf.substring(0,3)}.`);