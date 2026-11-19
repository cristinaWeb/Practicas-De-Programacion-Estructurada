const fs = require('fs');
const path = require('path');

// Ubicación del archivo donde se guardarán los usuarios
const RUTA_ARCHIVO = path.join(__dirname, '..', 'usuarios.json');

// Función para cargar los usuarios
function cargarUsuarios() {

    if (fs.existsSync(RUTA_ARCHIVO)) {

        const contenido = fs.readFileSync(RUTA_ARCHIVO, 'utf8');

        return JSON.parse(contenido);

    } else {

        fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify([], null, 2));

        return [];
    }
}

// Función para guardar los usuarios
function guardarUsuarios(usuarios) {

    fs.writeFileSync(RUTA_ARCHIVO, JSON.stringify(usuarios, null, 2));

}

// Exportamos las funciones
module.exports = { cargarUsuarios, guardarUsuarios };