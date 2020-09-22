var canvas;
var ctx; //contexto del canvas
var FPS=50;

var imgRex='';

var protagonista = function (x,y){
    this.x=x;
    this.y=y;
    this.velocidad=12;
    
    this.dibuja = function(){
        ctx.drawImage(imgRex,this.x,this.y);
    }
    this.texto=function(){
        ctx.font='30px impact';
        ctx.fillStyle='#555555'
        ctx.fillText(`x: ${this.x}`,100,100)
    }
    this.arriba = function(){
        this.y-=this.velocidad;
    }
    this.abajo = function(){
        this.y+=this.velocidad;
    }
    this.izquierda = function(){
        this.x-=this.velocidad;
    }
    this.derecha = function(){
        this.x+=this.velocidad;
    }
}

var personaje = function (x,y) {
    this.x= x;
    this.y=y;
    this.derecha = true;

    this.dibuja = function () {
        ctx.fillStyle='#FF0000';
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
var prota = new protagonista(200,200)

document.addEventListener('keydown',function (tecla) {
    console.log(tecla.keyCode);
    //ARRIBA
    if (tecla.keyCode == 38) {
        prota.arriba();
    }    
    //ABAJO
    if (tecla.keyCode == 40) {
        prota.abajo();
    }
    //IZQUIERDA
    if (tecla.keyCode == 37) {
        prota.izquierda();
    }
    //DERECHA
    if (tecla.keyCode == 39) {
        prota.derecha();
    }
})



function inicializar() {
    canvas= document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    imgRex = new Image();
    imgRex.src='js/img/rex.png';    

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
    prota.dibuja();
    prota.texto();
}

function posicionRaton(e) {
    var x=e.pageX;
    var y=e.pageY;
    console.log(`x: ${x} | y: ${y}`)
}

