const cliente = {
    nome: "Bruno",
    idade: 23,
    cpf:"21122255556",
    email:"bruno.silva@outlook.com",
    fone: ["940350891", "945656895"],
    dependentes:[{nome:"Sarah",
                parentesco: "Filha",
                dataNasc: "20/03/2011"}]
                
}
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc: "25/03/2014"
})



console.log(cliente)


const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc === "25/03/2014");

console.log(filhaMaisNova[0].nome)