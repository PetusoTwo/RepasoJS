//Prototypes en JS
//Permite agregar propiedades y metodos a objetos especificos. 
//Onject literal - Ejemplo


//Funcion - sin prototype
function mostrarInfo(tarea, prioridad){
    return `La tarea es ${tarea} y su prioridad es ${prioridad}`
};

function Tarea(nombre, prioridad){
    this.nombre = nombre;
    this.prioridad = prioridad;
}; 


//Funcion - con prototype
Tarea.prototype.mostrarInfo = function(tarea, prioridad){ //Aca es opcional poner los parametros, ya que esta funcion ya esta atada al objeto Tarea.
    return `La tarea es ${this.nombre} y su prioridad es ${this.prioridad}`
};


const tarea1 = new Tarea('Aprender JavaScript', 'Alta');
console.log(tarea1);
console.log(tarea1.mostrarInfo()); //Llamar a la funcion

//Si la funcion de mostrarInfo se llama de otro objeto va salir error. 
