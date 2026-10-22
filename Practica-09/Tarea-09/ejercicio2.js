//Tarea 2: Funciones recursivas con figuras y menú
//Cree funciones recursivas para calcular lo siguiente: una que sume los primeros n números pares; otra que sume los primeros n números
// impares; y otra que calcule el n-ésimo término de la serie de Fibonacci. Cree un menú con Switch para que el usuario elija la 
// operación, luego ingrese el valor de n. Muestre el resultado con mensajes descriptivos.


// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función recursiva que suma los primeros n números pares
function sumarPares(n) {

    // Caso base
    if (n === 0) {
        return 0;
    }

    // Llamada recursiva
    return (n * 2) + sumarPares(n - 1);
}

// Función recursiva que suma los primeros n números impares
function sumarImpares(n) {

    // Caso base
    if (n === 0) {
        return 0;
    }

    // Llamada recursiva
    return (n * 2 - 1) + sumarImpares(n - 1);
}

// Función recursiva que calcula Fibonacci
function fibonacci(n) {

    // Caso base 1
    if (n === 0) {
        return 0;
    }

    // Caso base 2
    if (n === 1) {
        return 1;
    }

    // Llamada recursiva
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Mostrar el menú
console.log("=== MENÚ DE FUNCIONES RECURSIVAS ===");
console.log("1. Sumar los primeros n números pares");
console.log("2. Sumar los primeros n números impares");
console.log("3. Calcular el término n de Fibonacci");

// Solicitar la opción
rl.question("Seleccione una opción: ", (opcion) => {

    let seleccion = parseInt(opcion);

    // Solicitar el valor de n
    rl.question("Ingrese el valor de n: ", (dato) => {

        let n = parseInt(dato);

        // Validar el valor ingresado
        if (isNaN(n) || n < 0) {

            console.log("Debe ingresar un número entero igual o mayor que 0.");

        } else {

            // Seleccionar la operación
            switch (seleccion) {

                case 1:
                    console.log(
                        "La suma de los primeros " + n +
                        " números pares es: " + sumarPares(n)
                    );
                    break;

                case 2:
                    console.log(
                        "La suma de los primeros " + n +
                        " números impares es: " + sumarImpares(n)
                    );
                    break;

                case 3:
                    console.log(
                        "El término " + n +
                        " de Fibonacci es: " + fibonacci(n)
                    );
                    break;

                default:
                    console.log("Opción no válida.");
            }
        }

        // Cerrar la interfaz
        rl.close();
    });
});