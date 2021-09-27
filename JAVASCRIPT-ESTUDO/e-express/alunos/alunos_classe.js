
let id = 1;
function  atualizar_id() {
    id = id+1;
}

export class aluno{

    matricula = null;
    nome = null;
    idade = null;

    constructor (nome,idade){
        this.nome = nome;
        this.idade = idade;
        atualizar_id();
        this.matricula = id;
    }

    get_nome(){
        return this.nome;
    }

    get_idade(){
        return this.idade;
    }

    get_matricula(){
        return this.matricula;
    }

    set_nome(nome){
        if(!nome){
            this.nome = nome;
        }else{
            throw new Error("ERRO NOME INVALIDO!");
        }
    }

    set_idade(idade){
        if(!idade && !isNaN(idade)){
            this.idade = idade;
        }else{
            throw new Error("ERRO NOME INVALIDO!");
        }
    }
}

