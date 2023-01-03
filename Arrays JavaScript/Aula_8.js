
const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];
const listaDeAlunosEMedias = [alunos, medias];


function exibeNomeeNota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        const [alunos, medias] = listaDeAlunosEMedias;

        console.log(`${aluno} Encontrado`)
        
        const indice = alunos.indexOf(aluno)
        const mediaDoAluno = medias[indice]
        

        console.log(`${aluno} tem a média ${mediaDoAluno}`)
    }
    else{
        console.log(`${aluno} não encontrado`)
    }
}

exibeNomeeNota("bruno")