//Tarea 1: Acumulación con reduce
//Cree un arreglo con las notas de un estudiante (por ejemplo: 8, 7, 9, 6, 10). Utilice el método reduce para calcular el promedio de las notas. 
//Muestre el resultado en consola con 2 decimales.

// Arreglo con las notas del estudiante
const notas = [8, 7, 9, 6, 10];

// Utilizamos reduce para sumar todas las notas
const sumaNotas = notas.reduce((acumulador, nota) => {
    return acumulador + nota;
}, 0);

// Calcular el promedio dividiendo la suma entre la cantidad de notas
const promedio = sumaNotas / notas.length;

// Mostrar los resultados
console.log("=== PROMEDIO DE NOTAS ===");
console.log("Notas del estudiante: " + notas);
console.log("Suma de las notas: " + sumaNotas);
console.log("Promedio: " + promedio.toFixed(2));