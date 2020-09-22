var personaje = function (x,y,nombre) {
    this.x = x;
    this.y = x;
    this.nombre = nombre;

    //metodo Abajo
    this.abajo = function () {
        this.y +=10;
        return this.y
    }

    //metodo hablar
    this.hablar = function () {
        return console.log(`hola soy ${this.nombre}`)
        
    }

}

var personaje1= new personaje(10,100,'Frodo')
var personaje2= new personaje(220,380,'Sam')