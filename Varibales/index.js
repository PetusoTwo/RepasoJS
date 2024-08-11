//Creacion de Variables

/**
 * VARIABLES CON VAR
 * No deben comenzatr con un numero.
 * Permite reescribir la variable.
 * Puede ser de cualquier tipo de dato.
 */
var nombre;
nombre = "Cristian";
var apellido = "Cordova - VAR";
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);


/**
 * VARIBALES CON CONST
 * No se puede reescribir la variable - Cambiar el valor.
 * Puede ser de cualquier tipo de dato.
 * Deben ser escritas en mayusculas.
 * Deben inicializarse.
 */

const nombre1 = "Cristian";
const apellido1 = "Perez - CONST";
const nombreCompleto1 = nombre1 + " " + apellido1;
console.log(nombreCompleto1);


/**
 * VARIBALES CON LET
 * Es parecida a var.
 */

let aprender = "JavaScript";
aprender = "PHP"; //Rescribir su valor 
console.log(aprender);