//Tarea 3: Promedio de calificaciones
//Solicite al usuario cuántas calificaciones desea ingresar. Usando un bucle FOR y readline, solicite cada calificación, 
// acumule la suma y al final calcule y muestre el promedio. Además, muestre la calificación más alta y la más baja ingresada.

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar la cantidad de calificaciones
rl.question('¿Cuántas calificaciones desea ingresar?: ', (cantidad) => {

    // Convertir la cantidad a número entero
    let cantidadCalificaciones = parseInt(cantidad);

    // Variable para acumular la suma
    let sumaCalificaciones = 0;

    // Variables para guardar la calificación mayor y menor
    let calificacionMayor = 0;
    let calificacionMenor = 100;

    // Función para solicitar las calificaciones
    function solicitarCalificacion(numeroActual) {

        // Solicitar la calificación
        rl.question('Ingrese la calificación ' + numeroActual + ': ', (calificacion) => {

            // Convertir la calificación a número
            let nota = parseFloat(calificacion);

            // Acumular la calificación
            sumaCalificaciones = sumaCalificaciones + nota;

            // Comprobar si es la calificación más alta
            if (nota > calificacionMayor) {
                calificacionMayor = nota;
            }

            // Comprobar si es la calificación más baja
            if (nota < calificacionMenor) {
                calificacionMenor = nota;
            }

            // Si todavía faltan calificaciones, solicitar la siguiente
            if (numeroActual < cantidadCalificaciones) {
                solicitarCalificacion(numeroActual + 1);
            } else {

                // Calcular el promedio
                let promedio = sumaCalificaciones / cantidadCalificaciones;

                // Mostrar los resultados
                console.log('\n--- RESULTADO ---');
                console.log('Cantidad de calificaciones: ' + cantidadCalificaciones);
                console.log('Suma de calificaciones: ' + sumaCalificaciones);
                console.log('Promedio: ' + promedio.toFixed(2));
                console.log('Calificación más alta: ' + calificacionMayor);
                console.log('Calificación más baja: ' + calificacionMenor);

                // Cerrar la interfaz
                rl.close();
            }
        });
    }

    // Comenzar solicitando la primera calificación
    solicitarCalificacion(1);
});

