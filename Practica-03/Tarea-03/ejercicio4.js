// 4. Validar requisitos de empleado
// Solicite nombre, edad y años de experiencia. Valide que la edad sea mayor a 18 Y que la experiencia sea mayor a 0. 
// Si cumple ambas condiciones, muestre "Candidato válido". Si no cumple, muestre "No cumple con los requisitos".

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre: ", function(nombre) {
    rl.question("Ingrese su edad: ", function(edad) {
        rl.question("Ingrese sus años de experiencia: ", function(experiencia) {

            // Convertimos edad y experiencia a números
            edad = parseFloat(edad);
            experiencia = parseFloat(experiencia);

            // Verificamos que ambas condiciones se cumplan
            if (edad > 18 && experiencia > 0) {
                console.log(`Nombre: ${nombre}`);
                console.log(`Candidato válido`);

            } else {
                console.log(`Nombre: ${nombre}`);
                console.log(`No cumple con los requisitos`);
            }

            rl.close();
        });
    });
});