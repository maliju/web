'use strict'
window.addEventListener('load',()=> {
    
    let boton = document.querySelector("#Saludar");

    
    boton.addEventListener("click", () => {
        let nombre = document.getElementById("txtNombre").value;
        console.log(nombre + "  " + nombre.length)
        if (nombre.length > 0)
            alert("Mucho gusto " + nombre);
        else
            alert("Dime quien eres");
    });

});

