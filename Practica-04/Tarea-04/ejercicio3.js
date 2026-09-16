//Tarea 3: Máquina de bebidas
//Cree un programa que simule una máquina expendedora de bebidas con las siguientes opciones: 1=Agua, 2=Refresco, 3=Jugo, 4=Café, 5=Té.
//Usando Switch, muestre el mensaje "Ha seleccionado: [nombre de la bebida]". Si la opción no es válida, muestre "Bebida no disponible".
//Además, si la bebida es Refresco o Jugo, agregue el mensaje "¿Desea agregar hielo?".

// Importar el módulo readline para solicitar datos al usuario
const readline = require('readline');

// Crear la interfaz de lectura para entrada y salida de datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar al usuario que seleccione una bebida
rl.question('Seleccione una bebida (1-5): ', (opcion) => {

    // Convertir la entrada a número entero
    let bebidaSeleccionada = parseInt(opcion);

    // Variable para almacenar el nombre de la bebida
    let nombreBebida;

    // Estructura Switch para evaluar la bebida seleccionada
    switch (bebidaSeleccionada) {
        case 1:
            nombreBebida = 'Agua';
            break;
        case 2:
            nombreBebida = 'Refresco';
            break;
        case 3:
            nombreBebida = 'Jugo';
            break;
        case 4:
            nombreBebida = 'Café';
            break;
        case 5:
            nombreBebida = 'Té';
            break;
        default:
            nombreBebida = 'Bebida no disponible';
    }

    // Mostrar el resultado de la selección
    console.log('Ha seleccionado: ' + nombreBebida);

    // Verificar si la bebida permite agregar hielo
    if (bebidaSeleccionada === 2 || bebidaSeleccionada === 3) {
        console.log('¿Desea agregar hielo?');
    }

    // Cerrar la interfaz de lectura
    rl.close();
});