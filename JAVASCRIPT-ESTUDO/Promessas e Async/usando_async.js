
const funcao_assincrona = async () => {

    /// AQUI VAI TUDO QUE VC QUER QUE A FUNCAO EXECUTE ASSINCRONAMENTE.

    return "TERIMNOU A EXECUÇÃO DO CODIGO ASSICRONO!";
};

funcao_assincrona().then(console.log)/// PARA OBTER O RETORNO É PRECISO USAR O .THEN 



console.log("INICIO");

console.log("ETAPA 1 ");

setTimeout(()=> console.log("ETAPA 2"),1000);

setTimeout(()=> console.log("ETAPA 3"),2000);

setTimeout(()=> console.log("ETAPA 4"),3000);




