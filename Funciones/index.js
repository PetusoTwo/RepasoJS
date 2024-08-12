//Creacion de funciones en js 

/**
 * Permite reutilizarlas
 * Existen varias formas de declarar funciones
 */

//Palabra reservada 'function' - no importa donde se llame a la funcion
function saludar(nombre){  //dentro del parentesis son los parametros de la fucion.
    return console.log("Hola", nombre) //Funcion para saludar y se le concatena un nombre  
};                              //que se pasa por parametro 

saludar('Juan'); //Llamando a la funcion con el valor del parametro




//Function expression - Si importa el orden de la llamada
const PERSONA = function(nombrePersona){ //Se declara como una variable y seguido la palabra 'function'
    console.log(`El nombre de la persona uno es: ${nombrePersona}`)
};

PERSONA('Pedro'); //Se llama a PERSONA por que es la variable.