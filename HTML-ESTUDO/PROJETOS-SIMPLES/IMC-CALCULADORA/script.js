function imc(){
        
    var nome = document.getElementsByName("nome_usuario")[0].value.toUpperCase();
    if(!nome){ alert("ERRO! PREENCHA O CAMPO NOME"); return 0;}

    var idade = document.getElementsByName("idade_usuario")[0].value;
    if(!idade){ alert("ERRO! PREENCHA O CAMPO IDADE"); return 0;} 

    var sexo = document.getElementsByName("sexo_usuario")[0].value;
    if(!sexo){ alert("ERRO! PREENCHA O CAMPO SEXO"); return 0;} //SEXO NÃO TEM SERVENTIA SO COLOQUEI POR APRENDIZADO DO USO DOS INPUTS.

    var altura = document.getElementsByName("altura_usuario")[0].value;
    if(!altura || altura ==="0"){alert("ERRO! PREENCHA O CAMPO ALTURA"); return 0;}
    if(typeof(altura)==="string"){
       altura = altura.replace(',','.');
    }
    if(isNaN(altura)){
       alert("ERRO! PREENCHA O CAMPO ALTURA SOMENTE COM NUMEROS E PONTO EX: 1.98" ); 
       return 0;
    }

    var peso = document.getElementsByName("peso_usuario")[0].value;
    if(!peso){ alert("ERRO! PREENCHA O CAMPO PESO"); return 0;}
    if(typeof(peso)==="string"){
        peso = peso.replace(',','.');
     }
     if(isNaN(peso)){
        alert("ERRO! PREENCHA O CAMPO PESO SOMENTE COM NUMEROS E PONTO EX: 1.98" ); 
        return 0;
     }

    var indice = (peso/(altura*altura));
    var resultado;

    var div_resultado =window.document.querySelector('div.result');
        div_resultado.style.display="block";
   
    var div_resposta = window.document.getElementsByClassName('resultado_texto')[0];

    var div_resposta2 = window.document.getElementsByClassName("resultado_nome")[0];

     if(idade > 65){ indice-=5 }else{
        if(idade >= 55){ indice-=4 }else{
            if(idade >= 45){ indice-=3 }else{
                if(idade >= 35){ indice-=2 }else{
                    if(idade >= 25){ indice-=1 }
                }
            }
        }
    }
  if(sexo === "MASCULINO" || sexo === "FEMININO"){
      if(indice>=39){ resultado = "OBESIDADE GRAVE"; }else{
        if(indice>=29){ resultado = "OBESIDADE"; }else{
            if(indice>=24){ resultado = "PRÉ OBESIDADE"; }else{
                if(indice>=19){ resultado = "PESO NORMAL"; }else{
                    if(indice<19){
                        resultado = "PESO BAIXO";
                    }
                }

            }
        }
      }
  }
  
  div_resposta2.innerText = `${nome} SEU RESULTADO É:`;
  div_resposta.innerText = resultado;
  setTimeout(3000);
  }

  function fechar(){
    var div_resultado =window.document.querySelector('div.result');
    div_resultado.style.display="none";
  }
  

      
  