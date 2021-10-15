
    function imc(){

        const  formData = new FormData(document.querySelector(".principal_formulario"));

        let nome = formData.get("nome_usuario");
        let idade = formData.get("idade_usuario");
        let sexo = formData.get("sexo_usuario");
        let peso = formData.get("peso_usuario");
        let altura = formData.get("altura_usuario");

        if(typeof(peso)==="string"){peso = peso.replace(',','.');}
        if(isNaN(peso)){alert("ERRO! PREENCHA O CAMPO PESO SOMENTE COM NUMEROS E PONTO EX: 1.98" ); return 0;}

        try{
             let resposta = verificar_imc(idade,sexo,peso,altura);
             $("div.result").append(`<h1>${nome}, SEU RESULTADO É:<\h1>`,`<h1>${resposta}<\h1>`);
             $("div.result").css("display","block");
        }catch(e){
             $("div.result").append(`<h1>${e}<\h1>`);
             $("div.result").css("display","block");
        }

       
   };
   

   function fechar(){
    $("div.result").hide();
    $("div.result h1").remove();
    
   }