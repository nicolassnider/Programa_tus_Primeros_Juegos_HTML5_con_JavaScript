var miCanvas;

function inicializar() {
    miCanvas= document.getElementById('canvas');

    miCanvas.addEventListener('mousedown',clickRaton,false);
    miCanvas.addEventListener('mouseup',sueltaClickRaton,false);
    miCanvas.addEventListener('mousemove',posicionRaton,false);
}

function clickRaton(e) {
    console.log('Click raton');
}

function sueltaClickRaton(e) {
    console.log('soltó raton');
}

function posicionRaton(e) {
    var x=e.pageX;
    var y=e.pageY;
    console.log(`x: ${x} | y: ${y}`)
}