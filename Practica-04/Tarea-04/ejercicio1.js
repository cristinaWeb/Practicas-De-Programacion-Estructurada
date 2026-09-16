//Tarea 1: Clasificación de figuras geométricas
//Solicite al usuario el número de lados de una figura (3, 4, 5, 6). Utilizando Switch, muestre el nombre de la figura correspondiente:
// 3=Triángulo, 4=Cuadrilátero, 5=Pentágono, 6=Hexágono. Si el número no está en la lista, muestre "Figura no reconocida".

// Importar el módulo readline para solicitar datos al usuario
const readline = require('readline');

// Crear la interfaz de lectura para entrada y salida de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar el número de lados de la figura
rl.question('Ingrese el número de lados de la figura (3-6): ', (lados) => {

    // Convertir la entrada a número entero
    let numeroLados = parseInt(lados);

    // Variable para almacenar el nombre de la figura
    let figura;

    // Estructura Switch para clasificar la figura
    switch (numeroLados) {
        case 3:
            figura = 'Triángulo';
            break;
        case 4:
            figura = 'Cuadrilátero';
            break;
        case 5:
            figura = 'Pentágono';
            break;
        case 6:
            figura = 'Hexágono';
            break;
        default:
            figura = 'Figura no reconocida';
    }

    // Mostrar el resultado en consola
    console.log('Resultado: ' + figura);

    // Cerrar la interfaz de lectura
    rl.close();
});