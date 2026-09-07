// 2. Comparar calificaciones
// Solicite al usuario dos calificaciones (0-100). Compare cuál es la más alta. Si son iguales, indíquelo. 
// Muestre un mensaje descriptivo con el resultado.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese la primera calificación: ", function(calificacion1) {
    rl.question("Ingrese la segunda calificación: ", function(calificacion2) {

        // Convertimos las calificaciones a números
        calificacion1 = parseFloat(calificacion1);
        calificacion2 = parseFloat(calificacion2);

        // Verificamos que las dos calificaciones estén entre 0 y 100
        if (calificacion1 >= 0 && calificacion1 <= 100 &&
            calificacion2 >= 0 && calificacion2 <= 100) {

            // Comparamos las dos calificaciones
            if (calificacion1 > calificacion2) {
                console.log(`La calificación más alta es: ${calificacion1}`);

            } else if (calificacion2 > calificacion1) {
                console.log(`La calificación más alta es: ${calificacion2}`);

            } else {
                console.log(`Las calificaciones son iguales: ${calificacion1} = ${calificacion2}`);
            }

        } else {
            console.log(`Las calificaciones deben estar entre 0 y 100`);
        }

        rl.close();
    });
});