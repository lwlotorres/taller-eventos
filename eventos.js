document.addEventListener("DOMContentLoaded", function(){
    let eventoDiv = document.getElementById("division");
    let button = document.getElementById("boton")

    eventoDiv.addEventListener("click", function(){
        alert("Hola! Soy el div");

    })
    button.addEventListener("click", function(event){
        event.stopPropagation()
    })
})