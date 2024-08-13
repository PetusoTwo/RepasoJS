//Creacion de funciones con Parametros Default

function Saludar(nombre, mensaje){
    console.log(`Hola, ${nombre} queria decirte que ${mensaje}`)
}

Saludar(); // La salida seria: Hola, undefined queria decirte que undefined

//Misma funcion con Parametros Default

function Saludar2(nombre, mensaje = "hagas tus tareas"){ //Parametro Default 
    console.log(`Hola, ${nombre} queria decirte que ${mensaje}`)
}

console.log(Saludar2("Cristian")); // La salida seria: Hola, Cristian queria decirte que hasgas tus tareas
console.log(Saludar2("Cristian", "te pongas a jugar.")); // Aca se sobreescribe el parametro default ya que si lo esta pasando.


//Forma 2

const SALUDAR3 = function(nombre = "Juan", mensaje = "hagas tus tareas"){ //Parametro Default
    console.log(`Hola, ${nombre} queria decirte que ${mensaje}`)    
}

SALUDAR3("Pedro");