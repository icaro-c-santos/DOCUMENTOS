
function menu01(clas){
   const a = document.getElementsByClassName("curso_descricao01")[0];
   const b = document.getElementsByClassName("curso01")[0];
   if(a.style.display === "none"){
        a.style.display = "flex";
        b.style.backgroundColor = "black";
        b.style.color = "white";
   }else{
        a.style.display = "none";
        b.style.backgroundColor = "";
        b.style.color = ""
   }
}

