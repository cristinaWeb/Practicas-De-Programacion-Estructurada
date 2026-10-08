//Tarea 1: Adivinar el número secreto (WHILE)
//Genere un número secreto entre 1 y 50 usando Math.floor(Math.random() * 50) + 1. Usando un bucle WHILE, solicite al usuario adivinar 
//el número. En cada intento, indique si el número es mayor o menor que el secreto. Cuente los intentos y muéstrelos al final.


// Importar readline-sync para entrada de datos síncrona
const readlineSync = require('readline-sync');

// Generar un número secreto entre 1 y 50
let numeroSecreto = Math.floor(Math.random() * 50) + 1;

// Variable para guardar el intento del usuario
let intento = 0;

// Variable para contar los intentos
let cantidadIntentos = 0;

console.log('=== ADIVINA EL NÚMERO ===');
console.log('Adivina un número entre 1 y 50');

// Bucle WHILE: se repite hasta adivinar el número
while (intento !== numeroSecreto) {

    // Solicitar un número al usuario
    intento = parseInt(readlineSync.question('Ingrese su numero: '));

    // Aumentar la cantidad de intentos
    cantidadIntentos++;

    // Comparar el número ingresado con el número secreto
    if (intento < numeroSecreto) {
        console.log('El numero secreto es mayor');

    } else if (intento > numeroSecreto) {
        console.log('El numero secreto es menor');

    } else {
        console.log('¡Felicidades! Adivinaste el número');
    }
}

// Mostrar los resultados finales
console.log('\n=== RESULTADO FINAL ===');
console.log('Cantidad de intentos: ' + cantidadIntentos);