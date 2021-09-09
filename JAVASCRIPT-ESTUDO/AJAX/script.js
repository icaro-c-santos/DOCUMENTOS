function bt_acionar(){ 
   const div = document.getElementById("formulario");
   const div2 = document.getElementById("dados");
   div.style.transform="translateX(-300px)" ;
   div.style.transitionDuration="1s";
   div2.style.visibility ="visible";
    div2.style.opacity = "1";
   div2.style.transitionDuration="1.5s";
}
