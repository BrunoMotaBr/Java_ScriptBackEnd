import pegaArquivo from "./index.js";
import fs from "fs"
import chalk from "chalk";
import listaValidada from "./http-validacao.js";

const caminho = process.argv;
async function imprimeLista(valida ,lista, nomeDoArquivo = ""){
    if(valida){
        console.log(chalk.greenBright(`Lista validada de ${nomeDoArquivo}:`), await listaValidada(lista))
    }else{
        console.log(chalk.greenBright(`Lista de ${nomeDoArquivo}:`), lista)
    }
}
async function processaTexto(argumento){
    const caminho = argumento[2];
    const valida  = argumento[3] === '--valida';



    try{
        fs.lstatSync(caminho)
    }catch(erro){
        if(erro.code === "ENOENT"){
            console.log(chalk.red("Caminho ou diretorio não existem"))
            return
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida,resultado);
    }else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async(nomeDeArquivo)=>{
             const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`)
             imprimeLista(valida,lista, nomeDeArquivo);
        })
    }
}


processaTexto(caminho)