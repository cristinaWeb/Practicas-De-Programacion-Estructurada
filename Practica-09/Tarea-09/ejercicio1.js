//Tarea 1: Funciones recursivas para cálculos matemáticos
//Cree una función recursiva que calcule el factorial de un número entero positivo. Cree otra función recursiva que calcule la potencia
// de una base elevada a un exponente sin usar el operador **. Cree una tercera función recursiva que sume todos los números desde 1 
// hasta n. Solicite al usuario un número, y muestre el factorial, la potencia (usando ese número como base y como exponente) y la suma
//  hasta ese número.


// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función recursiva que calcula el factorial
function factorial(n) {

    // Caso base: el factorial de 0 o 1 es 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // Llamada recursiva
    return n * factorial(n - 1);
}

// Función recursiva que calcula una potencia sin usar **
function calcularPotencia(base, exponente) {

    // Caso base: cualquier número elevado a 0 es 1
    if (exponente === 0) {
        return 1;
    }

    // Llamada recursiva
    return base * calcularPotencia(base, exponente - 1);
}

// Función recursiva que suma los números desde 1 hasta n
function sumarHastaN(n) {

    // Caso base: si n es 0, la suma es 0
    if (n === 0) {
        return 0;
    }

    // Llamada recursiva
    return n + sumarHastaN(n - 1);
}

// Solicitar un número al usuario
rl.question("Ingrese un número entero positivo: ", (dato) => {

    let numero = parseInt(dato);

    // Verificar que el número sea válido
    if (numero < 0 || isNaN(numero)) {

        console.log("Debe ingresar un número entero positivo.");

    } else {

        // Llamar a las funciones recursivas
        let resultadoFactorial = factorial(numero);
        let resultadoPotencia = calcularPotencia(numero, numero);
        let resultadoSuma = sumarHastaN(numero);

        // Mostrar los resultados
        console.log("\n=== RESULTADOS ===");
        console.log("Factorial de " + numero + ": " + resultadoFactorial);
        console.log(numero + " elevado a " + numero + ": " + resultadoPotencia);
        console.log("Suma desde 1 hasta " + numero + ": " + resultadoSuma);
    }

    // Cerrar la interfaz
    rl.close();
});
