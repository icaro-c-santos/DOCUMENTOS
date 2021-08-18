class aluno {

    nome = null;
    nota = null;

    constructor(nome,nota){
        this.nome = nome;
        this.nota = nota;
    }
    
    getnota(){
        return this.nota;
    }
    getnome(){
        return this.nome;
    }
    isEquals(aluno_1,alunos_2){
      return  aluno_1.nota - alunos_2.nota;
    }

}

module.exports = aluno;