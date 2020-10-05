var canvas;
var ctx;
var FPS = 50;

//DIMENSIONES DE LAS CASILLAS
var anchoF = 50;
var altoF = 50;

//COLORES
var muro = '#044f14';
var tierra = '#c6892f';

var escenario = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
	[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
	[0, 2, 2, 0, 0, 2, 2, 0, 0, 0, 0, 2, 2, 0, 0],
	[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0],
	[0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0],
	[0, 2, 2, 2, 2, 2, 2, 0, 2, 2, 0, 0, 0, 0, 0],
	[0, 2, 2, 2, 2, 2, 0, 0, 0, 2, 2, 2, 2, 2, 0],
	[0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 2, 2, 0, 2, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function dibujaEscenario() {
	var color;

	for (y = 0; y < 10; y++) {
		for (x = 0; x < 15; x++) {

			if (escenario[y][x] == 0)
				color = muro;

			if (escenario[y][x] == 2)
				color = tierra;

			ctx.fillStyle = color;
			ctx.fillRect(x * anchoF, y * altoF, anchoF, altoF);
		}
	}
}

var protagonista;

//CLASE JUGADOR
var jugador = function () {
	this.x = 100;
	this.y = 100;

	this.vy = 0;
	this.vx = 0;

	this.gravedad = 0.5;
	this.friccion = 0.2;

	this.salto = 10;
	this.velocidad = 3;

	this.velocidadMax = 5;

	this.suelo = false;

	this.pulsaIzquierda = false;
	this.pulsaDerecha = false;

	this.colision = function (x, y) {
		var colisiona = false;
		if (escenario[parseInt(y / altoF)][parseInt(x / anchoF)] == 0) {
			colisiona = true;
		}
		return (colisiona)
	}

	this.fisica = function () {
		//Gravedad
		if (this.suelo == false) {
			this.vy += this.gravedad;
		}

		//movimiento Htal
		if (this.pulsaDerecha == true && (this.vx <= this.velocidadMax)) {
			this.vx += this.velocidad;
		}
		if (this.pulsaIzquierda == true && (this.vx >= 0 - (this.velocidadMax))) {
			this.vx -= this.velocidad;
		}

		//friccion
		//derecha
		if (this.vx > 0) {
			this.vx -= this.friccion;
			if (this.vx < 0) {
				this.vx = 0;
			}
		}
		//izquierda
		if (this.vx < 0) {
			this.vx += this.friccion;
			if (this.vx > 0) {
				this.vx = 0
			}
		}

		//caida
		if (this.colision(this.x, this.y + altoF) == true) {
			this.suelo = true;
			this.vy = 0;
		}

		//Asigna valores
		this.y += this.vy;
		this.x += this.vx;

	}

	this.arriba = function () {
		if (this.suelo) {
			this.vy -= this.salto;
			this.suelo = false;
		}
	}
	this.derecha = function () {
		this.pulsaDerecha = true;
	}
	this.izquierda = function () {
		this.pulsaIzquierda = true;
	}
	this.sueltaDerecha = function () {
		this.pulsaDerecha = false;
	}
	this.sueltaIzquierda = function () {
		this.pulsaIzquierda = false;
	}

	this.dibuja = function () {
		this.fisica();
		ctx.fillStyle = '#820c01';
		ctx.fillRect(this.x, this.y, anchoF, altoF)

	}
}

function inicializa() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');

	//Crear protagonista
	protagonista = new jugador();

	//LECTURA DEL TECLADO
	document.addEventListener('keydown', function (tecla) {

		if (tecla.keyCode == 38) {
			console.log('arriba');
			protagonista.arriba()
		}

		if (tecla.keyCode == 40) {
			console.log('abajo');
		}

		if (tecla.keyCode == 37) {
			console.log('izq');
			protagonista.izquierda();
		}

		if (tecla.keyCode == 39) {
			console.log('der');
			protagonista.derecha();
		}

	});

	//Liberación de tecla
	document.addEventListener('keyup', function (tecla) {
		if (tecla.keyCode == 37) {
			console.log('suela izq');
			protagonista.sueltaIzquierda();
		}

		if (tecla.keyCode == 39) {
			console.log('suela der');
			protagonista.sueltaDerecha();
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
	dibujaEscenario();
	protagonista.dibuja();
}