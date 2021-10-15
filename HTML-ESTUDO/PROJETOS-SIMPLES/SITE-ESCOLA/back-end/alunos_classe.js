
let id = 1;
function  atualizar_id() {
    id = id+1;
}

export class aluno{

    matricula = null;
    nome = null;
    idade = null;
    turma = null;
    cpf = null;
    

    constructor (nome,idade,turma,cpf){
        this.nome = nome;
        this.idade = this.set_idade(idade);
        atualizar_id();
        this.matricula = id;
        this.turma = turma;
        this.cpf = cpf;
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
        if(idade>0){
            this.idade = idade;
        }else{
            throw new Error("ERRO IDADE INVALIDA!");
        }
    }
}