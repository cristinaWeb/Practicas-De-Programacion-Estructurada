const { guardarUsuarios } = require('../database/database');

function insertarUsuario(rl, usuarios, callback) {

    console.log("\n===== REGISTRAR NUEVO USUARIO =====");

    rl.question("Ingrese el nombre: ", (nombre) => {

        rl.question("Ingrese el apellido: ", (apellido) => {

            rl.question("Ingrese la edad: ", (edad) => {

                rl.question("Ingrese el correo: ", (correo) => {

                    // Comparamos los correos sin importar mayúsculas
                    const correoRegistrado = usuarios.some(usuario =>
                        usuario.correo.toLowerCase() === correo.trim().toLowerCase()
                    );

                    if (correoRegistrado) {

                        console.log("\nERROR: Este correo ya se encuentra registrado.");

                    } else {

                        const nuevoUsuario = {
                            nombre: nombre.trim(),
                            apellido: apellido.trim(),
                            edad: parseInt(edad),
                            correo: correo.trim()
                        };

                        // Agregamos el usuario al arreglo
                        usuarios.push(nuevoUsuario);

                        // Guardamos los cambios en el JSON
                        guardarUsuarios(usuarios);

                        console.log("\nUsuario registrado correctamente.");
                    }

                    callback();

                });
            });
        });
    });
}

module.exports = insertarUsuario;