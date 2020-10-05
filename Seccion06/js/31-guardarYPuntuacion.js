function guardar(valor) {
    localStorage.setItem("nombre_jugador",valor);
}

function cargar() {
    return localStorage.getItem("nombre_jugador");
}

function inicializa() {
    
    //LECTURA DEL TECLADO
    document.addEventListener('keydown', function (tecla) {
        

        if (tecla.keyCode == 38) {
            guardar("Juan");
        }

        if (tecla.keyCode == 40) {
            var nombre = cargar();
            console.log(nombre);
        }

        if (tecla.keyCode == 37) {
           
        }

        if (tecla.keyCode == 39) {
            
        }

    });
}