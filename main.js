/**Calcular tiempo de espera promedio en relación con la cantidad de turnos registrados. */


// Función para calcular el tiempo de espera promedio
function calcularTiempoEsperaPromedio(totalTurnos, tiempoTotalEspera) {
    if (totalTurnos === 0) {
        return "No hay turnos registrados.";
    } else {
        return tiempoTotalEspera / totalTurnos;
    }
}

// Solicitar al usuario la cantidad de turnos y tiempo de espera por turno
let cantidadTurnos = parseInt(prompt("Ingrese la cantidad de turnos registrados:"));
let tiempoTotalEspera = 0;
 
for (let i = 1; i <= cantidadTurnos; i++) {
    let tiempoEspera = parseInt(prompt(`Ingrese el tiempo de espera del turno ${i} (en minutos):`));
    tiempoTotalEspera += tiempoEspera;
}

// Calcular tiempo de espera promedio
let tiempoEsperaPromedio = calcularTiempoEsperaPromedio(cantidadTurnos, tiempoTotalEspera);

// Mostrar el tiempo de espera promedio
alert(`El tiempo de espera promedio es de: ${tiempoEsperaPromedio} minutos por turno, considerando ${cantidadTurnos} turnos registrados.`);
