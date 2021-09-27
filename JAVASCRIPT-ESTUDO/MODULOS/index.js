import axios from "axios";

const url ="http://files.cod3r.com.br/curso-js/funcionarios.json";

var ar = [];

axios.get(url).then( response =>{
    const funcionario = response.data;
  const resultado = funcionario.filter(p => p.pais==="China").filter(p => p.genero ==="F");
 resultado.sort
})




