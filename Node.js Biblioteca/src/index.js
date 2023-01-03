import fs from "fs"
import chalk from 'chalk';


function extrairLinks(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s#.].[^\s]*)\)/gm;
    const capituras = [...texto.matchAll(regex)];
    const resultado = capituras.map((captura)=>({
        [captura[1]]: [captura[2]]
    }))
    return resultado.length !== 0 ? resultado : "Não a links no arquivo"; 
}

function trataErro(erro){
    throw new Error(chalk.red(erro.code, "Não encontrado!"))
}

async function pegaArquivo(caminho){
    try{
        const encoding = "utf-8"
        const texto = await fs.promises.readFile(caminho, encoding)
    
        return extrairLinks(texto)
    }catch(erro){
        trataErro(erro)
    }
    
}

/*function pegaArquivo(caminho){
    const encoding = "utf-8"
    fs.promises.readFile(caminho, encoding)
        .then((texto) => console.log(chalk.green(texto)))
        .catch(trataErro)
}

function pegaArquivo(caminho){
    const encoding = "utf-8"
    fs.readFile(caminho, encoding, (erro, texto)=>{
        if(erro){
            trataErro(erro);
        }
        console.log(chalk.green(texto))
    });
}*/



/* \[[^[\]]*?\] */
/* \(https?:\/\/[^\s#.].[^\s]*\) */

export default pegaArquivo;