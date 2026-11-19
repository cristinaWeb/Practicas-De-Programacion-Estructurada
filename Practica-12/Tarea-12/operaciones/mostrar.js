function mostrarUsuarios(usuarios, callback) {

    console.log("\n===== USUARIOS REGISTRADOS =====");

    if (usuarios.length === 0) {

        console.log("No existen usuarios registrados.");

    } else {

        usuarios.forEach((usuario, posicion) => {

            console.log("\nUsuario #" + (posicion + 1));
            console.log("Nombre: " + usuario.nombre);
            console.log("Apellido: " + usuario.apellido);
            console.log("Edad: " + usuario.edad);
            console.log("Correo: " + usuario.correo);

        });
    }

    callback();
}

module.exports = mostrarUsuarios;