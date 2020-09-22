var turno = 1;
var vida = 100;

//JugadasCPU
var atacar = 0;
var quemar = 1;
var envenenar = 2;
var fallar = 3;

//EstadoJugador
var vivo = true;
var envenenado = false;
var quemado = false;

//objetos
var pocion = 0;
var colaFenix = 1;
var pocionQuemaduras = 2;
var pocionVeneno = 3;

function juegaTurno() {

	var jugadaCPU = Math.floor(Math.random() * 4);

	if (vida <= 0) vivo = false;

	if (vida > 0) {

		if (jugadaCPU == atacar) {
			vida -= 10;
			console.log('CPU ataca jugador')
		}
		if (jugadaCPU == quemar) {
			quemado = true;
			console.log('CPU quema jugador')
		}
		if (jugadaCPU == envenenar) {
			envenenado = true;
			console.log('CPU envenena jugador')
		}
		if (jugadaCPU == fallar) {
			console.log('CPU falla jugador')
		}
		muestraEstadoJugador();
	}
	else {
		vivo = false;
		console.log('Muerto');
	}

}

function usarItem(item) {

	if (item == pocion) vida += 50;
	if (item == colaFenix) {
		if (!vivo) { 
			vivo = true; 
			vida+=30;
		}
		else{
			console.log('No se puede usar estando vivo');
		}
	}
	
	if (item == pocionQuemaduras) quemado = false;
	if (item == pocionVeneno) envenenado = false;
	muestraEstadoJugador();
}

function muestraEstadoJugador() {
	if (vivo) {
		console.log(`Vida: ${vida}`);
		if (envenenado) console.log('Jugador Envenenado')
		if (quemado) console.log('Jugador quemado')
	}
	else {
		console.log('Estas muerto');
	}
}










/////////////////////////
var ataque = 10;
var pocion = 20;

function muestraVida() {
	console.log(`vida del héroe: ${vida}`)
}

function ataqueEnemigo(potencia, nombre) {
	vida -= potencia;
	console.log(`${nombre} causó ${potencia} puntos`)

}

function bebePocion() {
	vida += pocion;

}

var numero1;
var numero2;
var resultado;

function accion(params) {
	numero1 = parseInt(prompt('Introducer n1'));
	numero2 = parseInt(prompt('Introduce n2'));
	resultado = suma(numero1, numero2)
	console.log(resultado)
}

function suma(num1, num2) {
	var valor;
	valor = num1 + num2;
	return (valor);
}
