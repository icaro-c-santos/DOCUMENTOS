import { aluno } from "./alunos_classe.js";
import { bd_aluno } from "./banco.js";


function buscar_nome(nome){
    
    const alunos = bd_aluno.filter(p => p.nome === nome);
    if(alunos.length >0){
        return alunos;
    }else{
        throw new Error("ALUNO NÃO ENCONTRADO!");
    } 
}

function buscar_idade(idade){
    const alunos = bd_aluno.filter(p => p.idade === idade);
    if(alunos.length >0){
        return alunos;
    }else{
        throw new Error("ALUNO NÃO ENCONTRADO!");
    } 
}

function buscar_matricula(matricula){
    const aluno = bd_aluno.filter(p => p.matricula === matricula);
    if(aluno != null && aluno.length >0){
        return aluno;
    }else{
        console.log("NÃO TEM ESSE ALUNO");
    }
}

function criar_aluno(nome,idade){
   bd_aluno.push(new aluno(nome,idade));
}


function excluir_aluno(matricula){
   bd_aluno.splice(bd_aluno.findIndex(p=> p.matricula = matricula),1);
}

export{excluir_aluno,criar_aluno,buscar_matricula,buscar_idade,buscar_nome};