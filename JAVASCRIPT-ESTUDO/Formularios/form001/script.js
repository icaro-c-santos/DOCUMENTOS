function cadastro_pessoa(){
    

    const form = document.querySelector("#form_pessoa"); ///obtem o formulario que queremos pegar os dados.

    const formData = new FormData(form); ///obtem os dados do formulario

    alert(formData.get("nome")); ///  get the field value 
    alert(formData.has("idade")); /// chek  if has a field with  name set  and  return true or false
    
    
}