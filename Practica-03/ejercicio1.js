// 1. Validar número positivo: Solicite un número al usuario. Verifique si es positivo, negativo o cero, y
// muestre un mensaje correspondiente.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un número: ", function(num) {

    num = parseFloat(num);

    if (num > 0) {
        console.log(`Su número es positivo`);
    } else if (num < 0) {
        console.log(`Su número es negativo`);
    } else {
        console.log(`Su número es 0`);
    }

    rl.close();
});