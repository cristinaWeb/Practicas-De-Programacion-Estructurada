//Información de estudiante: Solicite nombre, apellido, año de ingreso y promedio.
//Muestre nombre y apellido en mayúsculas, primeras 3 letras del apellido, últimos 2 dígitos del año y promedio con 2 decimales.

let nombre = 'Cristina';
let apellido = 'Blanco';
let anio = '2007'
let promedio = 9.8888;

console.log(`Su nombre y apellidos en mayúsculas es: `+nombre.toLocaleUpperCase()+''+apellido.toLocaleUpperCase());
console.log(`Las primeras 3 letras del apellido son: `+apellido.slice(0,3));
console.log(`Los 2 dígitos del año son: `+anio.toString().slice(2,4));
console.log(`Su promedio con 2 decimales es: `+promedio.toFixed(2));