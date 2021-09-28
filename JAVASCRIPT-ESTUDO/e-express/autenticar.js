
const autenticado = true;

function autenticar(req,res,next){
    
    if(autenticado == true){
        console.log("AUTENTICADO!");
        next();
    }else{
        
    }
}