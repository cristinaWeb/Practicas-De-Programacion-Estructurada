//Tarea 2: Fábrica de funciones
//Cree una función de orden superior llamada crearMultiplicador que reciba un número (el factor) y devuelva una nueva función que multiplique 
//cualquier número por ese factor. Luego, cree un "duplicador" (factor 2) y un "triplicador" (factor 3), y pruebe ambas funciones con un número 
//para mostrar los resultados.

// Función de orden superior que recibe un factor
function crearMultiplicador(factor) {

    // Devuelve una función que recibe un número
    return (numero) => {
        return numero * factor;
    };
}

// Crear un duplicador (factor 2)
const duplicador = crearMultiplicador(2);

// Crear un triplicador (factor 3)
const triplicador = crearMultiplicador(3);

// Número que utilizaremos para probar las funciones
const numero = 5;

// Llamar a las funciones y guardar los resultados
const resultadoDuplicador = duplicador(numero);
const resultadoTriplicador = triplicador(numero);

// Mostrar los resultados
console.log("=== FÁBRICA DE FUNCIONES ===");
console.log("Número original: " + numero);
console.log("Duplicador: " + resultadoDuplicador);
console.log("Triplicador: " + resultadoTriplicador);