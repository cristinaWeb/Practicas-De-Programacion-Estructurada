const readline = require('readline');

const { cargarUsuarios } = require('./database/database');

const insertarUsuario = require('./operaciones/insertar');
const mostrarUsuarios = require('./operaciones/mostrar');
const actualizarUsuario = require('./operaciones/actualizar');
const eliminarUsuario = require('./operaciones/eliminar');

// Creamos la interfaz para solicitar datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Cargamos los usuarios del archivo JSON
let usuarios = cargarUsuarios();

// Función del menú principal
function menuPrincipal() {

    console.log("\n===== SISTEMA DE USUARIOS =====");
    console.log("1. Insertar usuario");
    console.log("2. Mostrar usuarios");
    console.log("3. Actualizar usuario");
    console.log("4. Eliminar usuario");
    console.log("5. Salir");

    rl.question("\nSeleccione una opción: ", (opcion) => {

        switch (opcion) {

            case '1':
                insertarUsuario(rl, usuarios, menuPrincipal);
                break;

            case '2':
                mostrarUsuarios(usuarios, menuPrincipal);
                break;

            case '3':
                actualizarUsuario(rl, usuarios, menuPrincipal);
                break;

            case '4':
                eliminarUsuario(rl, usuarios, menuPrincipal);
                break;

            case '5':
                console.log("\nGracias por utilizar el sistema.");
                rl.close();
                break;

            default:
                console.log("\nOpción incorrecta. Intente nuevamente.");
                menuPrincipal();
                break;
        }
    });
}

// Inicio del programa
console.log("Bienvenido al sistema de registro de usuarios.");

menuPrincipal();