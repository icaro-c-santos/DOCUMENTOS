



function buscar(nome){

    const p = new Promise((resolve,reject)=>{

    
        try{
            if(Math.floor(Math.random() * 11)<5){
                resolve(`TUDO CERTO! ${nome} FOI ENCONTRADO!`);
            }else{
                throw ("ALGO DEU ERRADO!");
            }
            
        }catch(e){
            reject(e);
        }

    });

    p.then(console.log).catch(console.log);

}


buscar("icaro");




