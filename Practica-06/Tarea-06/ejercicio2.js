//Tarea 2: Números primos
//Solicite un número N. Usando un bucle FOR, determine si el número es primo o no. Un número primo solo es divisible entre 1 y sí mismo.
//  Muestre el resultado. Además, muestre todos los números primos desde 1 hasta N.

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar el número N
rl.question('Ingrese un número N: ', (numero) => {

    // Convertir la entrada a número entero
    let n = parseInt(numero);

    // Variable para contar los divisores
    let divisores = 0;

    // Bucle FOR para buscar divisores
    for (let i = 1; i <= n; i++) {

        // Verificar si el número es divisible entre i
        if (n % i === 0) {
            divisores++;
        }
    }

    // Mostrar si el número es primo
    console.log('\n--- NÚMERO PRIMO ---');

    if (n < 2) {
        console.log('El número no es primo');

    } else if (divisores === 2) {
        console.log('El número ' + n + ' es primo');

    } else {
        console.log('El número ' + n + ' no es primo');
    }

    // Mostrar todos los números primos desde 1 hasta N
    console.log('\n--- NÚMEROS PRIMOS DEL 1 AL ' + n + ' ---');

    for (let numeroActual = 2; numeroActual <= n; numeroActual++) {

        let cantidadDivisores = 0;

        // Buscar los divisores del número actual
        for (let divisor = 1; divisor <= numeroActual; divisor++) {

            if (numeroActual % divisor === 0) {
                cantidadDivisores++;
            }
        }

        // Si tiene exactamente dos divisores, es primo
        if (cantidadDivisores === 2) {
            console.log(numeroActual);
        }
    }

    // Cerrar la interfaz
    rl.close();
});