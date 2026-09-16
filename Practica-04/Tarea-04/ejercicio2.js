//Tarea 2: Nivel de estudios
//Solicite al usuario su nivel de estudios con un número del 1 al 5: 1=Primaria, 2=Secundaria, 3=Bachillerato, 4=Universidad, 5=Postgrado. 
//Usando Switch, muestre el nivel correspondiente. Si el número no es válido, muestre "Nivel no válido".

// Importar el módulo readline para solicitar datos al usuario
const readline = require('readline');

// Crear la interfaz de lectura para entrada y salida de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar el nivel de estudios al usuario
rl.question('Ingrese su nivel de estudios (1-5): ', (nivel) => {

    // Convertir la entrada a número entero
    let nivelEstudios = parseInt(nivel);

    // Variable para almacenar el nivel de estudios
    let nombreNivel;

    // Estructura Switch para evaluar el nivel
    switch (nivelEstudios) {
        case 1:
            nombreNivel = 'Primaria';
            break;
        case 2:
            nombreNivel = 'Secundaria';
            break;
        case 3:
            nombreNivel = 'Bachillerato';
            break;
        case 4:
            nombreNivel = 'Universidad';
            break;
        case 5:
            nombreNivel = 'Postgrado';
            break;
        default:
            nombreNivel = 'Nivel no válido';
    }

    // Mostrar el resultado en consola
    console.log('Nivel de estudios: ' + nombreNivel);

    // Cerrar la interfaz de lectura
    rl.close();
});