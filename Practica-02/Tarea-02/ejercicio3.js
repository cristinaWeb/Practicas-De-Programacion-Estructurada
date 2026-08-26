//Tarea 3: Calcular edad y años de experiencia
//Solicite al usuario su año de nacimiento. Obtenga el año actual, calcule su edad y muestre: "Tu edad aproximada es: X años."

let fecha = new Date();

let nacimiento = 2007;
let anio = fecha.getFullYear();

let edad = anio-nacimiento;

console.log(`Tu edad aproximada es: ${edad} años.`);