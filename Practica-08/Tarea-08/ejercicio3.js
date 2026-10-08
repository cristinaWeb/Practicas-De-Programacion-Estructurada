// Tarea 3: Funciones para manejo de cadenas
// Cree las siguientes funciones: una que reciba una cadena y devuelva la cantidad de vocales; otra que reciba una cadena y devuelva la
// cadena invertida; y otra que reciba una cadena y determine si es palíndromo (se lee igual al derecho y al revés). 
// Solicite una palabra o frase al usuario y muestre los tres resultados.

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que cuenta las vocales
function contarVocales(cadena) {
    let cantidadVocales = 0;
    let vocales = "aeiouáéíóú";

    for (let letra of cadena.toLowerCase()) {
        if (vocales.includes(letra)) {
            cantidadVocales++;
        }
    }
    return cantidadVocales;
}

// Función que invierte una cadena
function invertirCadena(cadena) {
    let cadenaInvertida = "";

    for (let contador = cadena.length - 1; contador >= 0; contador--) {
        cadenaInvertida = cadenaInvertida + cadena[contador];
    }
    return cadenaInvertida;
}

// Función que determina si una cadena es palíndromo
function esPalindromo(cadena) {
    let texto = cadena.toLowerCase().replace(/ /g, "");
    let invertida = invertirCadena(texto);
    return texto === invertida;
}

// Solicitar palabra o frase
rl.question("Ingrese una palabra o frase: ", (cadena) => {
    
    let cantidadVocales = contarVocales(cadena);
    let cadenaInvertida = invertirCadena(cadena);
    let palindromo = esPalindromo(cadena);

    console.log("\n=== RESULTADOS ===");
    console.log("Cantidad de vocales: " + cantidadVocales);
    console.log("Cadena invertida: " + cadenaInvertida);

    if (palindromo) {
        console.log("Es un palíndromo");
    } else {
        console.log("No es un palíndromo");
    }

    rl.close();
});
 