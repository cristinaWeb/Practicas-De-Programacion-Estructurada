const { guardarUsuarios } = require('../database/database');

function eliminarUsuario(rl, usuarios, callback) {

    console.log("\n===== ELIMINAR USUARIO =====");

    rl.question("Ingrese el correo del usuario que desea eliminar: ", (correoEliminar) => {

        // Buscamos al usuario
        const posicion = usuarios.findIndex(usuario =>
            usuario.correo.toLowerCase() === correoEliminar.trim().toLowerCase()
        );

        if (posicion === -1) {

            console.log("\nERROR: No se encontró el usuario.");

        } else {

            // Eliminamos el usuario encontrado
            usuarios.splice(posicion, 1);

            // Guardamos el arreglo actualizado
            guardarUsuarios(usuarios);

            console.log("\nUsuario eliminado correctamente.");
        }

        callback();

    });
}

module.exports = eliminarUsuario;