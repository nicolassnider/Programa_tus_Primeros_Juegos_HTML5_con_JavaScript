function creaEnemigo(){
    console.log('Enemigo Creado');

}

function tablas(){    
    for (let tabla = 1; tabla < 11; tabla++) {
        console.log(`tabla del ${tabla}`)
        for (let multiplicador = 1; multiplicador < 11; multiplicador++) {
            console.log (`${tabla} * ${multiplicador} = ${tabla*multiplicador}`);
            
        }       
    }
}