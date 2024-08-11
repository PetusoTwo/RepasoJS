/**
 * SCOPE
 * Es el alcance de las variables.
 * Las variables que se crean dentro de una funcion solo existen dentro de esa funcion.
 * Se recomienda usar CONST. 
 * No se recomienda el uso de variables globales, ya que pueden ser modificadas en cualquier parte del programa.
 */

//Funcion - 
const nombre = "Pedro"; //Variable global
function saludar(){
    const nombre = "Cristian"; //Variable local de la funcion
    console.log("Hola " + nombre);
}
saludar(nombre);


//Ejemplo con var - Tomara el valor de la variable global, pero lo va a reescribir
//la salida sera la de la variable local
var music = "Creep"; //Variable global
if(music){
    var music = "Notes"; //Variable local
    console.log("Dentro del condicional: " + music);
}

console.log("Fuera del condicional: " + music);

//Ejemplo con const - no reescribira la variable y tomara en cuenta el scope de la variable

const musica = "Creep"; //Variable global

if(music){
    const musica = "Notes"; //Variable local
    console.log("Dentro del condicional: " + musica); //Salida local
}

console.log("Fuera del condicional: " + musica); //Salida global