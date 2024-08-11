//Templates Strings
/**
 * Templates Strings
 * Permite escribir texto con variables
 * Se escribe entre ${} (dentro de las llaves va la variable)
 * No se recomienda el uso de variables globales, ya que pueden ser modificadas en cualquier parte del programa.
 */

//Forma no convencional
const NOMBRE = "Cristian";
const TRABAJO = "Programador";
console.log("Mi nombre es " + NOMBRE + " y mi trabajo es " + TRABAJO); //Forma no convencional - Concatenacion

//Forma convencional
const NOMBRE2 = "Cristian";
const TRABAJO2 = "Programador";
console.log(`Mi nombre es ${NOMBRE2} y mi trabajo es ${TRABAJO2}`); //Forma convencional - Template String