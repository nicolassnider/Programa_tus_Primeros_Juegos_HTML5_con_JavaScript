var mochila = [];

function inicializar() {

}

//var mochila=['Espada','Poción','Daga','Armadura','Flecha'];

/* mochila.forEach(
    function (item) {
        console.log(item);
    }
); */

function compra(item) {
    switch (item) {
        case 1:
            mochila.push('Espada');
            break;
        case 2:
            mochila.push('Poción');
            break;

        default:
            break;
    }
    mostrarInventario();
}

function mostrarInventario() {
    console.log(`INVENTARIO \n-----------\n`)
    mochila.forEach(function (item) {
        console.log(item);        
    })
}


