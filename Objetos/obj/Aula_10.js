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

const chaves = Object.keys(cliente);

console.log(chaves)
if(!chaves.includes("enderecos")){
    console.log("Não possui endereço!");
}
else{
    console.log("Possui endereço!");
}
