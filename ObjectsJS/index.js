// Object Literal 
//Creando un objeto
const PERSONA = {
    nombre: 'Pedro',
    apellido: 'Cordova',
    trabajo: 'Programador',
    edad: 30
}
console.log(PERSONA);

//Como acceder a las propiedades individualmente
console.log(PERSONA.apellido); // Forma uno
console.log(PERSONA['trabajo']); // Forma dos

//Object Constructor

class Personas {
    constructor(nombre, apellido, trabajo, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.trabajo = trabajo;
        this.edad = edad;
    }
}

const persona1 = new Personas('Cristian', 'Cordova', 'Programador', 30); //Creando objecto de la clase Personas
console.log(persona1);
console.log(persona1.nombre);