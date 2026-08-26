//Ejercicio 6: Cálculo del Índice de Masa Corporal (IMC) 
// Declare variables para el peso en kilogramos y la altura en metros. Calcule el IMC usando la fórmula apropiada 
// y muestre el resultado redondeado a dos decimales.

let peso = 70;
let altura = 1.70;

let imc = peso/(altura**2);

console.log(`El IMC es: `+imc.toFixed(2))