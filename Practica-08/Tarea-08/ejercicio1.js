// Tarea 1: Sistema de calificaciones con funciones
// Cree una función que reciba una calificación numérica (0-100) y devuelva la letra correspondiente (A, B, C, D, F). 
// Cree otra función que reciba un arreglo de calificaciones y devuelva el promedio. Solicite al usuario cuántas calificaciones desea
// ingresar, almacene cada una en un arreglo, y al final muestre: cada calificación con su letra, el promedio y la letra del promedio.

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que recibe una calificación y devuelve su letra
function obtenerLetra(calificacion) {
    if (calificacion >= 90) {
        return "A";
    } else if (calificacion >= 80) {
        return "B";
    } else if (calificacion >= 70) {
        return "C";
    } else if (calificacion >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Función que recibe un arreglo y calcula el promedio
function calcularPromedio(calificaciones) {
    let suma = 0;

    for (let calificacion of calificaciones) {
        suma = suma + calificacion;
    }
    return suma / calificaciones.length;
}

// Solicitar la cantidad de calificaciones
rl.question("¿Cuántas calificaciones desea ingresar?: ", (cantidad) => {
    let cantidadCalificaciones = parseInt(cantidad);
    let calificaciones = [];

    // Función para solicitar las calificaciones una por una
    function solicitarCalificacion(contador) {
        if (contador <= cantidadCalificaciones) {
            rl.question("Ingrese la calificación " + contador + ": ", (dato) => {
                let calificacion = parseFloat(dato);
                calificaciones.push(calificacion);
                solicitarCalificacion(contador + 1);
            });

        } else {

            // Calcular el promedio
            let promedio = calcularPromedio(calificaciones);
            console.log("\n=== RESULTADOS ===");

            // Mostrar cada calificación con su letra
            for (let calificacion of calificaciones) {
                console.log(
                    "Calificación: " + calificacion +
                    " - Letra: " + obtenerLetra(calificacion)
                );
            }

            // Mostrar promedio y letra
            console.log("Promedio: " + promedio.toFixed(2));
            console.log("Letra del promedio: " + obtenerLetra(promedio));

            // Cerrar la interfaz
            rl.close();
        }
    }

    // Comenzar a solicitar las calificaciones
    solicitarCalificacion(1);
});