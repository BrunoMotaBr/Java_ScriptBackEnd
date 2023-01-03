const cliente = {
    nome: "Bruno",
    idade: 23,
    cpf:"21122255556",
    email:"bruno.silva@outlook.com",
    fone: ["940350891", "945656895"],
    dependentes:[
                {nome:"Sarah",
                parentesco: "Filha",
                dataNasc: "20/03/2011"},
                {nome: "Samia Maria",
                parentesco: "Filha",
                dataNasc: "25/03/2014"}],
    saldo: 100,
    depositar: function(valor){
        if(valor > 0){
            this.saldo += valor;
        }
        else{
            console.log("Valor para deposito invalido")
        }
    },
    sacar: function(valor){
        if(valor <= this.saldo){
            this.saldo -= valor;
        }
        else{
            console.log("Valor para saque invalido")
        }
    }
    
}

console.log(cliente.saldo)

cliente.depositar(30);

console.log(cliente.saldo)

cliente.depositar(10);

console.log(cliente.saldo);

cliente.sacar(130);

console.log(cliente.saldo)