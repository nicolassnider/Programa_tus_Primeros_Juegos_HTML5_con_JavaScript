var canvas;
var ctx; //contexto del canvas
var FPS=50;

var personaje = function (x,y) {
    this.x= x;
    this.y=y;
    this.derecha = true;

    this.dibuja = function () {
        ctx.fillstyle='#FF000';
        ctx.fillRect(this.x,this.y,50,50);
    }
    this.mueve = function (velocidad) {
        if (this.derecha) {
            if (this.x<400) {
                this.x+=velocidad;
                
            }
            else{
                this.derecha=false;
            }
        }
        else{
            if (this.x>50) {
                this.x-=velocidad;
            }
            else{
                this.derecha = true;
            }
        }
        
        
    }
}

var per1 = new personaje(10,50);
var per2 = new personaje(10,120);
var per3 = new personaje(10,230);

function inicializar() {
    canvas= document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    setInterval(function () {
        principal();        
    },1000/FPS);

    
    //canvas.addEventListener('mousemove',posicionRaton,false);
}

function borrarCanvas() {
    canvas.width = 500;
    canvas.height=400;
}

function principal(){
    borrarCanvas();
    per1.dibuja();    
    per2.dibuja();
    per3.dibuja();
    per1.mueve(1);
    per2.mueve(5);
    per3.mueve(10);
}

function posicionRaton(e) {
    var x=e.pageX;
    var y=e.pageY;
    console.log(`x: ${x} | y: ${y}`)
}

