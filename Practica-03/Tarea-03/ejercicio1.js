// 1. Validar número positivo, negativo o cero
// Solicite un número al usuario usando readline. Verifique si es positivo, negativo o cero. 
// Muestre un mensaje que indique el resultado: "El número es positivo", "El número es negativo" o "El número es cero".

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número: ", function(num) {

    // Convertimos el dato ingresado a número
    num = parseFloat(num);

    // Verificamos si el número es positivo
    if (num > 0) {
        console.log(`El número es positivo`);

    // Verificamos si el número es negativo
    } else if (num < 0) {
        console.log(`El número es negativo`);

    // Si no es positivo ni negativo, es cero
    } else {
        console.log(`El número es cero`);
    }

    rl.close();
});