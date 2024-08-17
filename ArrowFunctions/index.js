// ARROW FUNCTIONS

// SINTAXIS 

//let <mombre> = (<prametros>) => {
//  Logica de la funcion    
//};

//En las funciones de flecha no es necesario el return, ya que automaticamente retornara.

let saludar = nombre => {
    return `Hola ${nombre}`; //no es necesario poner el return
}

let viajando = (destino, duracion) => {
    return `Viajando a ${destino} por ${duracion} dias`
}

let saludando = saludar("Cristian"); //si retorna un valor debemos crear una variable y llamar a la funcion.
console.log(saludando);

let viaje = viajando("Mexico", 5);
console.log(viaje);