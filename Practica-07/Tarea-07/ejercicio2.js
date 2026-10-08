//Tarea 2: Cajero automático mejorado (DO...WHILE)
//Cree un cajero con saldo inicial de $1000. El menú debe repetirse hasta que el usuario salga: 1) Consultar saldo, 2) Retirar, 
// 3) Depositar, 4) Salir. Valide que los retiros no excedan el saldo y que los depósitos sean mayores a 0. Use Switch y DO...WHILE.

// 2. Cajero automático mejorado (DO...WHILE)
// El cajero inicia con $1000.
// El menú se repite hasta que el usuario seleccione salir.

// Importar readline-sync para entrada de datos síncrona
const readlineSync = require('readline-sync');

// Saldo inicial
let saldo = 1000;

// Variable para controlar la salida
let salir = false;

// Bucle DO...WHILE: se ejecuta al menos una vez
do {

    // Mostrar el menú
    console.log('\n=== CAJERO AUTOMÁTICO ===');
    console.log('1. Consultar saldo');
    console.log('2. Retirar dinero');
    console.log('3. Depositar dinero');
    console.log('4. Salir');

    // Solicitar la opción al usuario
    let opcion = parseInt(readlineSync.question('Seleccione una opcion (1-4): '));

    // Ejecutar la opción seleccionada
    switch (opcion) {

        case 1:
            // Consultar saldo
            console.log('\nSu saldo actual es: $' + saldo.toFixed(2));
            break;

        case 2:
            // Solicitar el monto a retirar
            let retiro = parseFloat(
                readlineSync.question('Ingrese el monto a retirar: $')
            );

            // Validar el retiro
            if (retiro <= 0) {
                console.log('El monto debe ser mayor a 0');

            } else if (retiro > saldo) {
                console.log('No tiene suficiente saldo');

            } else {
                // Restar el retiro al saldo
                saldo = saldo - retiro;

                console.log('Retiro realizado correctamente');
                console.log('Saldo actual: $' + saldo.toFixed(2));
            }

            break;

        case 3:
            // Solicitar el monto a depositar
            let deposito = parseFloat(
                readlineSync.question('Ingrese el monto a depositar: $')
            );

            // Validar el depósito
            if (deposito <= 0) {
                console.log('El depósito debe ser mayor a 0');

            } else {
                // Sumar el depósito al saldo
                saldo = saldo + deposito;

                console.log('Depósito realizado correctamente');
                console.log('Saldo actual: $' + saldo.toFixed(2));
            }

            break;

        case 4:
            // Salir del cajero
            console.log('Gracias por usar el cajero');
            salir = true;
            break;

        default:
            // Opción no válida
            console.log('Opción no válida. Intente nuevamente.');
    }

} while (!salir);