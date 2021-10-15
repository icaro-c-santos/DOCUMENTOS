function verificar_imc(idade,sexo,peso,altura){

    let indice = (peso/(altura*altura));
    let resultado;
    if(idade <=0 || idade >=180){ throw "IDADE INVALIDA, DIGITE UM VALOR ENTRE 0 E 180!"}
    if(altura > 3 || altura <=0){ throw "ALTURA INVALIDA DIGITE UM VALOR ENTRE 0 E 3!"}
    if(isNaN(peso)){ throw "ERRO! PREENCHA O CAMPO PESO SOMENTE COM NUMEROS E PONTO EX: 1.98"}
    if(peso <=0 || peso >=800){ throw "PESO INVALIDO, DIGITE UM VALOR ENTRE 0 E 800!"}
    if(!(sexo == "MASCULINO" || sexo == "FEMININO")){ throw "SEXO INVALIDO, SELECIONE UMA OPÇÃO!"}
    
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

  return resultado;
}

