const cliente = {
    nome: "Joao",
    idade: 25,
    email: "joao@dominio.com",
    telefones: ["11955885869", "1147586699"],
    saldo: 200,
    temSaldo: function(valor){
        if(valor > this.saldo){
            console.log(`Saldo atual R$${this.saldo} não foi possivel realizar compra.`);
            return false;
        }
        else{
            this.saldo -= valor;
            console.log(`Saldo atual R$${this.saldo}`);
            return true;
        }
    }
};

cliente.temSaldo(200)

