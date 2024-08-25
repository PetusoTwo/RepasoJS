//Funciones dentro de objectos

const JUGADOR = {
    user: 'Petuso', 
    level: 15, 
    habilidad: 'Tirar fuego',
    mostrarInfo: function(){
        console.log(`El nombre del jugador es ${this.user} y su nivel es ${this.level}`)
    }
};

JUGADOR.mostrarInfo()