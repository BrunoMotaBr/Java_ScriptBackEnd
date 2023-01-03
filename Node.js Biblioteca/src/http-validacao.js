import chalk from "chalk";

function extrairLinks(arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join())
}

async function checaEstado(arrListaUls){
    const arrayStatus = await Promise.all(
       arrListaUls.map(async (url)=>{
            try{
                const response = await fetch(url)
                return response.status;
            }catch(erro){
                return manejaErro(erro);
            }
       }
       )
    )
    return arrayStatus;
}

function manejaErro(erro){
    if(erro.cause.code === "ENOTFOUND"){
        return "Link não encontrado"
    }else{
        return "Ocorreu um erro"
    }
}

async function listaValidada(listaLinks){
    const listaUrls = extrairLinks(listaLinks);
    const resultado = await checaEstado(listaUrls);

    return listaLinks.map((objeto, indice) =>({
        ...objeto, 
        status: resultado[indice]
    }))
}

export default listaValidada


