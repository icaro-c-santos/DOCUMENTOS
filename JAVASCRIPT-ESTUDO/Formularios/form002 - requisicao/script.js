function cadastro_pessoa(){
    

    const form = document.querySelector("#form_pessoa"); ///obtem o formulario que queremos pegar os dados.

    const formData = new FormData(form); ///obtem os dados do formulario
 
    console.log(formData);
    
}


function validEmail(email){
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email)
}

