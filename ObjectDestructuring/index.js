//Destructuring es extraer valores de un objeto

//Objeto
const Juego = {
    nombre: 'Snake Game',
    version: {
        actual: '1.0.0',
        anterior: '0.9.0'
    },
    año: 2020,
    variantes: ['snakeGC', 'GameS', 'SnakeX']
};


//Destructuring forma antigua

let version = Juego.version.actual; //Extrae el valor de la version actual
let variante = Juego.variantes[0]; //Extrae el valor de la primer variante

//Destructuring forma nueva

let {anterior} = Juego.version; //Extrae el valor de la version antigua
console.log(anterior);

