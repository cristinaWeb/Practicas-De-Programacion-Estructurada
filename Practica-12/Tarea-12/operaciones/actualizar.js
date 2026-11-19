const { guardarUsuarios } = require('../database/database');

function actualizarUsuario(rl, usuarios, callback) {

    console.log("\n===== ACTUALIZAR USUARIO =====");

    rl.question("Ingrese el correo del usuario que desea actualizar: ", (correoBuscar) => {

        // Buscamos la posición del usuario
        const posicion = usuarios.findIndex(usuario =>
            usuario.correo.toLowerCase() === correoBuscar.trim().toLowerCase()
        );

        if (posicion === -1) {

            console.log("\nERROR: No se encontró ningún usuario con ese correo.");
            callback();

        } else {

            console.log("\nUsuario encontrado. Ingrese los nuevos datos.");
            console.log("Si desea conservar un dato, presione ENTER.");

            rl.question("Nuevo nombre: ", (nuevoNombre) => {

                rl.question("Nuevo apellido: ", (nuevoApellido) => {

                    rl.question("Nueva edad: ", (nuevaEdad) => {

                        rl.question("Nuevo correo: ", (nuevoCorreo) => {

                            // Si no escribe un nuevo correo, conserva el anterior
                            const correoFinal = nuevoCorreo.trim() || usuarios[posicion].correo;

                            // Comprobamos que el correo no pertenezca a otro usuario
                            const correoExiste = usuarios.some((usuario, indice) =>
                                indice !== posicion &&
                                usuario.correo.toLowerCase() === correoFinal.toLowerCase()
                            );

                            if (correoExiste) {

                                console.log("\nERROR: El correo ya pertenece a otro usuario.");

                            } else {

                                // Actualizamos los datos
                                usuarios[posicion].nombre = nuevoNombre.trim() || usuarios[posicion].nombre;

                                usuarios[posicion].apellido = nuevoApellido.trim() || usuarios[posicion].apellido;

                                usuarios[posicion].edad = nuevaEdad.trim()
                                    ? parseInt(nuevaEdad)
                                    : usuarios[posicion].edad;

                                usuarios[posicion].correo = correoFinal;

                                // Guardamos los cambios
                                guardarUsuarios(usuarios);

                                console.log("\nUsuario actualizado correctamente.");
                            }

                            callback();

                        });
                    });
                });
            });
        }
    });
}

module.exports = actualizarUsuario;