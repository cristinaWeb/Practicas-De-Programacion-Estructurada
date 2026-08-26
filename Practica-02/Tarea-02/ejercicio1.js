//Tarea 1: Procesar nombre de usuario
// Solicite al usuario su nombre completo. Convierta el nombre a mayúsculas, extraiga las primeras 4 letras y luego conviértalo a minúsculas.
// Muestre todos los resultados.

let nombre = 'Fatima Cristina Blanco Membreño';

let nombreMay = nombre.toUpperCase();
let nombre4Caracteres = nombre.slice(0,4);
let nombreMin = nombre.toLocaleLowerCase();

console.log(`Su nombre en mayúsculas es: `+nombreMay);
console.log(`Las primeras 4 letras son: `+nombre4Caracteres);
console.log(`Su nombre en minúsculas es: `+nombreMin);