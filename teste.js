const { shuffle } = require("lodash");
const aluno = require("./js");
const alunos = [];

ad_aluno('icaro',10);
ad_aluno('camila',8);
ad_aluno('daniel',15);
ad_aluno('paulo',15);

alunos.sort(isEquals);


function sortear(grupos){
    if(alunos.length === 0){
       throw new Error("NÃO TEM ALUNOS PARA SEREM SORTEADOS!");
    }else if(aluno.length%2 ==0){
       const aluno1 = alunos.slice(0,alunos.length/2);
       const aluno2 = alunos.slice(alunos.length/2);

       console.log(aluno1);     //// retirar.
       console.log(aluno2);    ////  retirar.
    }else{
        
    }
}




function isEquals(aluno_1,alunos_2){
    return  aluno_1.nota - alunos_2.nota;
}

function ad_aluno(nome,nota){
    alunos.push(new aluno(nome,nota));
}

function embaralhar(array){

    novo_array = [];
    for (i =0; i<arrai.length;i++) {

       var sorteio = Math.random();
    }

}

const client = new MongoClient(uri);

    await client.connect();
    const database = client.db("sample_mflix");
    const movies = database.collection("movies");