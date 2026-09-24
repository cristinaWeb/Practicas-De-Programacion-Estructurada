//Tarea 2: Clasificador de números con múltiples condiciones
// Solicite tres números al usuario (a, b, c). Usando IF...ELSE IF y operadores lógicos, determine y muestre:
// - Si los tres son iguales: "Los tres números son iguales"
// - Si los tres son diferentes: "Los tres números son diferentes"
// - Si exactamente dos son iguales: "Hay dos números iguales"
// - Además, indique cuál de los tres números es el mayor y cuál es el menor.
// - Si algún número es negativo, agregue el mensaje "Hay números negativos".

// Importar el módulo readline
const readline = require('readline');

// Crear la interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar los tres números
rl.question("Ingrese el número a: ", (numeroA) => {
    rl.question("Ingrese el número b: ", (numeroB) => {
        rl.question("Ingrese el número c: ", (numeroC) => {

            // Convertir los valores a números
            let a = parseFloat(numeroA);
            let b = parseFloat(numeroB);
            let c = parseFloat(numeroC);

            console.log("\n CLASIFICADOR DE NÚMEROS");

            // Determinar si los números son iguales o diferentes
            if (a === b && b === c) {
                console.log("Los tres números son iguales");
                
            } else if (a != b && a != c && b != c) {
                console.log("Los tres números son diferentes");

            } else {
                console.log("Hay dos números iguales");
            }

            // Determinar el número mayor
            let mayor;

            if (a >= b && a >= c) {
                mayor = a;
            } else if (b >= a && b >= c) {
                mayor = b;
            } else {
                mayor = c;
            }

            // Determinar el número menor
            let menor;

            if (a <= b && a <= c) {
                menor = a;
            } else if (b <= a && b <= c) {
                menor = b;
            } else {
                menor = c;
            }

            // Mostrar el mayor y el menor
            console.log("El número mayor es:", mayor);
            console.log("El número menor es:", menor);

            // Comprobar si existe algún número negativo
            if (a < 0 || b < 0 || c < 0) {
                console.log("Hay números negativos");
            }

            // Cerrar la interfaz
            rl.close();
        });
    });
});