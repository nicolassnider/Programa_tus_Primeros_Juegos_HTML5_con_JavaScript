//usa libreria Keypress
var configTeclado = {prevent_repeat:true}; 

var eventoTeclado = new window.keypress.Listener(this,configTeclado);

eventoTeclado.simple_combo('a', PulsaA);

eventoTeclado.simple_combo('a b', PulsaAB);

eventoTeclado.sequence_combo('left down right a', AtaqueEspecial);

function PulsaA(){
    console.log('Pulsó a');
}
function PulsaAB()
{
    console.log('pulsó a y b!');
}
function AtaqueEspecial()
{
    console.log('HADUKEN!');
}

