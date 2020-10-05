var sonido1,sonido2;
var musica;

sonido1 =new Howl({
    src:['sound/fuego.wav'],
    loop:false,

});
sonido2 =new Howl({
    src:['sound/llave.wav'],
    loop:false,    
});
musica =new Howl({
    src:['music/fortaleza.mp3'],
    loop:true,    
});

function inicializa() {
    
    //LECTURA DEL TECLADO
    document.addEventListener('keydown', function (tecla) {
        

        if (tecla.keyCode == 38) {
            sonido1.play();
        }

        if (tecla.keyCode == 40) {
            sonido2.play();
        }

        if (tecla.keyCode == 37) {
           
        }

        if (tecla.keyCode == 39) {
            
        }

    });

    musica.play();

    setInterval(function () {
        principal();
    }, 1000 / FPS);
}

