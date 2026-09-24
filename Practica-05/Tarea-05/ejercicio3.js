//Tarea 3: Simulador de cajero automático con menú
// Cree un programa que simule un cajero automático. Inicie con un saldo de $1000.
// Muestre un menú con las opciones:
// 1. Consultar saldo
// 2. Retirar dinero
// 3. Depositar dinero
// 4. Salir
// Usando Switch, ejecute la opción seleccionada:
// - Opción 1: Muestre el saldo actual.
// - Opción 2: Solicite el monto a retirar. Valide que sea mayor a 0, múltiplo de $5 y que no exceda el saldo. Si cumple, reste del 
//   saldo; si no, muestre el errormcorrespondiente.
// - Opción 3: Solicite el monto a depositar. Valide que sea mayor a 0 y que no exceda $5000 en un solo depósito. Si cumple, sume al 
//   saldo; si no, muestre el error.
// - Opción 4: Muestre "Gracias por usar el cajero" y salga.
// - Si la opción no es válida, muestre "Opción no válida".

// Importar el módulo readline
const readline = require('readline');

// Crear la interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Saldo inicial
let saldo = 1000;

// Mostrar el menú
console.log(" CAJERO AUTOMÁTICO ");
console.log("1. Consultar saldo");
console.log("2. Retirar dinero");
console.log("3. Depositar dinero");
console.log("4. Salir");

// Solicitar la opción
rl.question("Seleccione una opción (1-4): ", (opcion) => {

    // Convertir la opción a número
    let opcionSeleccionada = parseInt(opcion);

    // Evaluar la opción seleccionada
    switch (opcionSeleccionada) {

        // Opción 1: Consultar saldo
        case 1:
            console.log("\n CONSULTA DE SALDO ");
            console.log("Su saldo actual es: $" + saldo.toFixed(2));
            rl.close();
            break;

        // Opción 2: Retirar dinero
        case 2:
            rl.question("Ingrese el monto a retirar: $", (monto) => {

                // Convertir el monto a número
                let montoRetiro = parseFloat(monto);

                // Validar el monto
                if (montoRetiro <= 0) {
                    console.log("El monto debe ser mayor a 0");

                } else if (montoRetiro % 5 != 0) {
                    console.log("El monto debe ser múltiplo de 5");

                } else if (montoRetiro > saldo) {
                    console.log("Fondos insuficientes");

                } else {
                    // Restar el retiro al saldo
                    saldo = saldo - montoRetiro;

                    console.log("Retiro exitoso");
                    console.log("Monto retirado: $" + montoRetiro.toFixed(2));
                    console.log("Saldo actual: $" + saldo.toFixed(2));
                }

                // Cerrar la interfaz
                rl.close();
            });
            break;

        // Opción 3: Depositar dinero
        case 3:
            rl.question("Ingrese el monto a depositar: $", (monto) => {

                // Convertir el monto a número
                let montoDeposito = parseFloat(monto);

                // Validar el depósito
                if (montoDeposito <= 0) {
                    console.log("El monto debe ser mayor a 0");

                } else if (montoDeposito > 5000) {
                    console.log("El depósito no puede exceder $5000");

                } else {
                    // Sumar el depósito al saldo
                    saldo = saldo + montoDeposito;

                    console.log("Depósito exitoso");
                    console.log("Monto depositado: $" + montoDeposito.toFixed(2));
                    console.log("Saldo actual: $" + saldo.toFixed(2));
                }

                // Cerrar la interfaz
                rl.close();
            });
            break;

        // Opción 4: Salir
        case 4:
            console.log("Gracias por usar el cajero");
            rl.close();
            break;

        // Opción no válida
        default:
            console.log("Opción no válida");
            rl.close();
            break;
    }
});