var numeroCPU;
var numeroUsuario;

numeroCPU= Math.floor((Math.random()*10)+1);

do {
    numeroUsuario= parseInt(prompt(`Adivina el número`));
    if(numeroUsuario==numeroCPU){
        console.log(`acertado!`);
    }
    else{
        console.log(`no acertado`);
        if(numeroCPU<numeroUsuario){
            console.log('numerocpu es menor');
        }
        else{
            console.log('numerocpu es mayor');
        }

    }
} while (numeroUsuario != numeroCPU);


