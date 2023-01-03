const cliente = {
    nome: "Bruno",
    idade: 23,
    cpf:"21122255556",
    email:"bruno.silva@outlook.com"
}

const chaves =['nome', 'idade', 'cpf', 'email']

//for(let i = 0; i < chaves.length; i++){
//    console.log(cliente[chaves[i]])
//}

chaves.forEach(info => console.log(cliente[info]))
