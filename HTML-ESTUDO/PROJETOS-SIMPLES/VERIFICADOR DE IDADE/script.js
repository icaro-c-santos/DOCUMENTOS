function verificar(){
    var imagem = document.getElementById("imagem");
    var data = document.getElementById("usuario_nascimento").value;
    var sexo = document.getElementById("usuario_sexo").value;
    var div_imagem = document.getElementById("resultado_imagem");
    var imagem = document.getElementById("imagem");
    var resposta = document.getElementById("nome");
    var data_atual =new Date();
    var final;

    if(!data){
        alert("ERRO! PREENCHA O CAMPO DATA!");
        return 0;
      }
      
    if(!sexo){
        alert("ERRO! PREENCHA O CAMPO SEXO!");
        return 0;
      }

     var data_usuario = new Date(data);
     const D = Math.abs(data_atual - data_usuario);
     const D2 = Math.ceil(D / (1000 * 60 * 60 * 24));

     if(data_usuario > data_atual){
      alert("ERRO! DIGITE UMA DATA VALIDA! ANTERIOR A DATA ATUAL");
      return 0;
   }
     
     if (D2>=365){
            var idade = parseInt(D2/365);
            final =`VOCÊ TEM ${idade} ANOS DE IDADE!`
            if(sexo==="MASCULINO"){
               imagem.setAttribute("src","AVATAR_HOMEM.png");
            }else{
               imagem.setAttribute("src","AVATAR_MULHER.png");
            }
            imagem.style.display ="block";
            div_imagem.style.display = "block";
            
     }else{
        var idade = parseInt(D2/30);
        final= `QUE FOFINHO 🤭, VOCÊ AINDA É UM BEBÊ DE ${idade} MESES.👶`;
        imagem.style.display ="block";
        div_imagem.style.display = "block";
        imagem.setAttribute("src","AVATAR_BEBE.jpg");
     }
     
     resposta.innerText = final;
}
