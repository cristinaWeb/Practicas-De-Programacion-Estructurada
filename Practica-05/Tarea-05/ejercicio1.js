// //Tarea 1: Sistema de acceso bancario
// Solicite al usuario su tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium) y el monto a retirar. Usando Switch, asigne un límite 
// de retiro según el tipo de tarjeta: 
// 1=$500, 2=$1000, 3=$2000. Luego, valide con IF si el monto solicitado es menor o igual al límite y si es múltiplo de $10.
// Si cumple ambas condiciones, muestre "Retiro exitoso". Si el monto excede el límite, muestre "Límite excedido". 
// Si no es múltiplo de $10, muestre "El monto debe ser múltiplo de 10". Si el tipo de tarjeta no es válido, muestre "Tarjeta no válida".

// Importar el módulo readline
const readline = require('readline');

// Crear la interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mostrar los tipos de tarjeta
console.log(" SISTEMA DE ACCESO BANCARIO ");
console.log("1. Débito");
console.log("2. Crédito");
console.log("3. Premium");

// Solicitar el tipo de tarjeta
rl.question("Ingrese su tipo de tarjeta (1-3): ", (tarjeta) => {

    // Solicitar el monto a retirar
    rl.question("Ingrese el monto a retirar: $", (monto) => {

        // Convertir los datos a números
        let tipoTarjeta = parseInt(tarjeta);
        let montoRetiro = parseFloat(monto);

        // Variables para el límite y el nombre de la tarjeta
        let limiteRetiro = 0;
        let nombreTarjeta = "";

        // Asignar el límite según el tipo de tarjeta
        switch (tipoTarjeta) {
            case 1:
                limiteRetiro = 500;
                nombreTarjeta = "Débito";
                break;
            case 2:
                limiteRetiro = 1000;
                nombreTarjeta = "Crédito";
                break;
            case 3:
                limiteRetiro = 2000;
                nombreTarjeta = "Premium";
                break;
            default:
                console.log("Tarjeta no válida");
                rl.close();
                return;
        }

        // Mostrar los datos de la tarjeta
        console.log("\n DATOS DEL RETIRO ");
        console.log("Tipo de tarjeta:", nombreTarjeta);
        console.log("Límite de retiro: $" + limiteRetiro);
        console.log("Monto solicitado: $" + montoRetiro);

        // Validar el monto solicitado
        if (montoRetiro > limiteRetiro) {
            console.log("Límite excedido");
        } else if (montoRetiro % 10 != 0) {
            console.log("El monto debe ser múltiplo de 10");
        } else {
            console.log("Retiro exitoso");
        }

        // Cerrar la interfaz
        rl.close();
    });
});