function imc(){
        
    var nome = document.getElementsByName("nome_usuario")[0].value.toUpperCase();
    var idade = document.getElementsByName("idade_usuario")[0].value;
    var altura = document.getElementsByName("altura_usuario")[0].value;
    var peso = document.getElementsByName("peso_usuario")[0].value;
    var sexoF = document.getElementsByName("sexo_usuarioF")[0];
    var sexoM = document.getElementsByName("sexo_usuarioM")[0];

    var indice = (peso/(altura**2));
    var resultado;

    var div_resultado =window.document.querySelector('div.result');
        div_resultado.style.display="block";
   
    var div_resposta = window.document.getElementsByClassName('resultado_texto')[0];

    var div_resposta2 = window.document.getElementsByClassName("resultado_nome")[0];

    if(sexoF.checked ==false && sexoM.checked == false){
           alert("ERRO! ESCOLHE UMA OPÇÃO DE SEXO!");
           fechar();
    }
    
  if(sexoF.checked ==true){
      if(indice>=42){
          resultado = "OBESIDADE MORBIDA";
      }if(indice>=37){
          resultado = "OBESIDADE MORBIDA GRAU 2";
      }if(indice>=32){
          resultado = "OBESIDADE MORBIDA GRAU 1";
      }if(indice>=27){
          resultado = "LEVEMENTE ACIMDA DO PESO";
      }if(indice>=22){
          resultado = "PESO IDEAL";
      }if(indice<22){
          resultado = "SUBNUTRIDO/ABAIXO DO PESO";
      }
  }
  
  div_resposta2.innerText = `${nome} SEU RESULTADO É:`;
  div_resposta.innerText = resultado;

  }

  function fechar(){
    var div_resultado =window.document.querySelector('div.result');
    div_resultado.style.display="none";
  }