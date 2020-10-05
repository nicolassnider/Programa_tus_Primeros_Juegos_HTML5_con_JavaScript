var canvas;
var ctx;
var FPS = 50;

var anchoF = 50;
var altoF = 50;

//PARA LA CÁMARA
var anchoEscenario = 25;
var altoEscenario = 20;


var muro = '#044f14';
var puerta = '#3a1700';
var tierra = '#c6892f';
var llave = '#c6bc00';

var protagonista;

var enemigo = [];

var antorchas = []

var imgTilemap;

var camara = []

var escenario = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
    [0, 0, 2, 2, 2, 2, 2, 2, 0, 2, 0, 0, 2, 2, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0],
    [0, 0, 2, 0, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
    [0, 0, 2, 2, 2, 0, 2, 2, 0, 0, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0, 2, 0, 0],
    [0, 2, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0],
    [0, 0, 2, 0, 0, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0],
    [0, 2, 2, 2, 0, 0, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 0, 2, 0, 0],
    [0, 2, 2, 3, 0, 0, 2, 0, 0, 1, 2, 2, 2, 2, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
    [0, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0],
    [0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0],
    [0, 2, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
    [0, 2, 2, 2, 0, 2, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
    [0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 2, 2, 0, 0, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var objCamara = function (x, y, tamX, tamY,posX,posY) {

    this.x = x;
    this.y = y;

    this.tamX = tamX;
    this.tamY = tamY

    this.posX=posX;
    this.posY=posY;



    this.dibuja = function () {
        for (y = 0; y < (this.tamY + this.y); y++) {
            for (x = 0; x < (this.tamX + this.x); x++) {

                var tile = escenario[y][x];
                ctx.drawImage(imgTilemap, tile * 32, 0, 32, 32, anchoF * (x - this.x+ this.posX), altoF * (y - this.y+this.posY ), anchoF, altoF);
            }
        }
    }

    this.arriba=function () {
        if (this.y>0) {
            this.y--;
        }
    }
    this.abajo=function () {
        if (this.y< altoEscenario) {
            this.y++;
        }
    }
    this.izquierda=function () {
        if (this.x< 0) {
            this.x--;
        }
    }
    this.derecha=function () {
        if (this.x< anchoEscenario) {
            this.x++;
        }
    }
}

function dibujaEscenario() {

    for (y = 0; y < 10; y++) {
        for (x = 0; x < 15; x++) {

            var tile = escenario[y][x];
            ctx.drawImage(imgTilemap, tile * 32, 0, 32, 32, anchoF * x, altoF * y, anchoF, altoF);
        }
    }
}

var antorcha = function (x, y) {
    this.x = x;
    this.y = y;

    this.retraso = 10
    this.contador = 0;
    this.fotograma = 0; //0-3

    this.cambiaFotograma = function () {
        if (this.fotograma < 3) {
            this.fotograma++;
        }
        else {
            this.fotograma = 0;
        }
    }

    this.dibuja = function () {
        if (this.contador < this.retraso) {
            this.contador++
        }
        else {
            this.contador = 0;
            this.cambiaFotograma()
        }
        ctx.drawImage(imgTilemap, this.fotograma * 32, 64, 32, 32, anchoF * x, altoF * y, anchoF, altoF)
    }
}


//CLASE ENEMIGO
var malo = function (x, y) {
    this.x = x;
    this.y = y;

    this.direccion = Math.floor(Math.random() * 4);

    this.retraso = 50;
    this.fotograma = 0;

    this.dibuja = function () {
        ctx.drawImage(imgTilemap, 0, 32, 32, 32, this.x * anchoF, this.y * altoF, anchoF, altoF);
    }

    this.compruebaColision = function (x, y) {
        var colisiona = false;

        if (escenario[y][x] == 0) {
            colisiona = true;
        }
        return colisiona;
    }

    this.mueve = function () {

        protagonista.colisionEnemigo(this.x, this.y);

        if (this.contador < this.retraso) {
            this.contador++;
        }

        else {
            this.contador = 0;

            //ARRIBA
            if (this.direccion == 0) {
                if (this.compruebaColision(this.x, this.y - 1) == false) {
                    this.y--;
                }
                else {
                    this.direccion = Math.floor(Math.random() * 4);
                }
            }


            //ABAJO
            if (this.direccion == 1) {
                if (this.compruebaColision(this.x, this.y + 1) == false) {
                    this.y++;
                }
                else {
                    this.direccion = Math.floor(Math.random() * 4);
                }
            }

            //IZQUIERDA
            if (this.direccion == 2) {
                if (this.compruebaColision(this.x - 1, this.y) == false) {
                    this.x--;
                }
                else {
                    this.direccion = Math.floor(Math.random() * 4);
                }
            }

            //IZQUIERDA
            if (this.direccion == 3) {
                if (this.compruebaColision(this.x + 1, this.y) == false) {
                    this.x++;
                }
                else {
                    this.direccion = Math.floor(Math.random() * 4);
                }
            }
        }

    }

}
//CLASE JUGADOR
var jugador = function () {
    this.x = 1;
    this.y = 1;
    this.color = '#820c01';
    this.llave = false;


    this.dibuja = function () {
        ctx.drawImage(imgTilemap, 32, 32, 32, 32, this.x * anchoF, this.y * altoF, anchoF, altoF);
    }

    this.colisionEnemigo = function (x, y) {
        if (this.x == x && this.y == y)
            this.muerte()
    }

    this.margenes = function (x, y) {
        var colision = false;

        if (escenario[y][x] == 0) {
            colision = true;
        }

        return (colision);
    }



    this.arriba = function () {
        if (this.margenes(this.x, this.y - 1) == false) {
            this.y--;
            this.logicaObjetos();
        }
    }


    this.abajo = function () {
        if (this.margenes(this.x, this.y + 1) == false) {
            this.y++;
            this.logicaObjetos();
        }
    }

    this.izquierda = function () {
        if (this.margenes(this.x - 1, this.y) == false) {
            this.x--;
            this.logicaObjetos();
        }
    }

    this.derecha = function () {
        if (this.margenes(this.x + 1, this.y) == false) {
            this.x++;
            this.logicaObjetos();
        }
    }


    this.victoria = function () {
        console.log('Has ganado!');

        this.x = 1;
        this.y = 1;

        this.llave = false;   //reinicia llave
        escenario[8][3] = 3;  //reinicia posicion llave
    }

    this.muerte = function () {
        console.log('Has Muerto!');

        this.x = 1;
        this.y = 1;

        this.llave = false;   //reinicia llave
        escenario[8][3] = 3;  //reinicia posicion llave
    }


    this.logicaObjetos = function () {
        var objeto = escenario[this.y][this.x];

        //OBTIENE llave
        if (objeto == 3) {
            this.llave = true;
            escenario[this.y][this.x] = 2;
            console.log('Has obtenido la llave!!');
        }

        //ABRIMOS LA PUERTA
        if (objeto == 1) {
            if (this.llave == true)
                this.victoria();
            else {
                console.log('No tienes la llave, no puedes pasar!');
            }
        }

    }
}


function inicializa() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    //CREAMOS AL JUGADOR
    protagonista = new jugador();

    //CREA ENEMIGOS
    enemigo.push(new malo(3, 3))
    enemigo.push(new malo(5, 7))
    enemigo.push(new malo(7, 7))

    //CREA ANTORCHAS
    antorchas.push(new antorcha(0, 0))
    antorchas.push(new antorcha(0, 2))
    antorchas.push(new antorcha(0, 4))
    antorchas.push(new antorcha(0, 6))

    //CREA ESCENARIO
    imgTilemap = new Image()
    imgTilemap.src = "js/img/tilemap.png"

    camara = new objCamara(2, 2, 5, 5,1,1);
    camara2 = new objCamara(7, 9, 4, 6,8,2);

    //LECTURA DEL TECLADO
    document.addEventListener('keydown', function (tecla) {

        if (tecla.keyCode == 38) {
            camara.arriba();
        }

        if (tecla.keyCode == 40) {
            camara.abajo();
        }

        if (tecla.keyCode == 37) {
            camara.izquierda();
        }

        if (tecla.keyCode == 39) {
            camara.derecha();
        }

    });

    setInterval(function () {
        principal();
    }, 1000 / FPS);
}


function borraCanvas() {
    canvas.width = 750;
    canvas.height = 500;
}


function principal() {
    borraCanvas();
    //dibujaEscenario();
    camara.dibuja();
    //camara2.dibuja();
    //protagonista.dibuja();


    /* for (c = 0; c < enemigo.length; c++) {
        enemigo[c].mueve();
        enemigo[c].dibuja();
    }
 */
    /* for (c = 0; c < antorchas.length; c++) {

        antorchas[c].dibuja();
    } */

}