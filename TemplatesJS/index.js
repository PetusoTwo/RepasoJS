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


//Concatenacion de multiples lineas

const contenedor = document.querySelector('#app') //este es el id para acceder al html
const tecnologia = "JavaScript";
const Framework = "React";
const contacto = "Petuso";
let navbar = '<h2>Navbar con la concatenacion </h2>' 
            + '<ul>' + //HTML con multiples lineas - Concatenacion
                '<li>Lenguaje: ' + tecnologia + '</li>' +
                '<li>Framework: ' + Framework + '</li>' +
                '<li>Contacto: ' + contacto + ' </li>' +
            '</ul>';
contenedor.innerHTML = navbar; //La forma de concatenar con multiples lineas no es efectiva.




//Uso de Template String en JS
//El uso de Template String es mejor y hace ver un codigo mas limpio
const contenedor2 = document.querySelector('#app2') //este es el id para acceder al html
const tecnologia2 = "JavaScript";
const Framework2 = "React";
const contacto2 = "Petuso";
let navbar2 = ` 
    <h2>Navbar con Template String</h2>
    <ul>
        <li>Lenguaje: ${tecnologia2}</li>
        <li>Framework: ${Framework2}</li>
        <li>Contacto: ${contacto2}</li>
    </ul>
`;
contenedor2.innerHTML = navbar2;