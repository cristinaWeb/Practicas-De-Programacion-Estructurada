//Tarea 1: Factorial de un número
//Solicite un número entero positivo al usuario. Usando un bucle FOR, calcule y muestre su factorial. 
//Ejemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar el número al usuario
rl.question('Ingrese un número entero positivo: ', (numero) => {

    // Convertir la entrada a número entero
    let n = parseInt(numero);

    // Variable para almacenar el factorial
    let factorial = 1;

    // Validar que el número sea positivo
    if (n < 0) {
        console.log('El número debe ser positivo');

    } else {

        // Bucle FOR para calcular el factorial
        for (let i = 1; i <= n; i++) {
            factorial = factorial * i;
        }

        // Mostrar el resultado
        console.log('\n=== FACTORIAL ===');
        console.log('Número: ' + n);
        console.log('Factorial: ' + factorial);
    }

    // Cerrar la interfaz
    rl.close();
});