
class curso{

    constructor(id,titulo,professor,carga_horaria,preco,descricao){
        this.id = id;
        this.titulo = titulo;
        this.professor = professor;
        this.carga_horaria = carga_horaria;
        this.preco = preco;
        this.descricao = descricao;
    }

    
    criadiv(){
        const newdiv =  document.createElement('div');
        const titulo = document.createElement('h2');
        const professor = document.createElement('span');
        const carga_horaria = document.createElement('span');
        const preco = document.createElement('span');
        const descricao = document.createElement('p');
       
        titulo.innerHTML = this.titulo;
        professor.innerHTML = this.professor;
        carga_horaria.innerHTML = this.carga_horaria;
        preco.innerHTML = this.preco;
        descricao.innerHTML = this.descricao;

        newdiv.appendChild(titulo);
        newdiv.appendChild(professor);
        newdiv.appendChild(carga_horaria);
        newdiv.appendChild(preco);
        newdiv.appendChild(descricao);

      return newdiv;

    }

}

const cursos = [];

function ad_curso(id,titulo,professor,carga_horaria,preco,descricao){
    const novo_curso = new curso(id,titulo,professor,carga_horaria,preco,descricao);
    const nova_div = novo_curso.criadiv();
    document.getElementById('principal').appendChild(nova_div);
}


function remover_curso(codigo){
   var a = cursos.find(p => p.id ===codigo);
    cursos.slice(1,1);
    
}

