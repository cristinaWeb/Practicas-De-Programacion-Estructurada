//Tarea 2: Información de producto con precio
//Solicite el nombre del producto, precio unitario y cantidad. Muestre el nombre en mayúsculas, extraiga las primeras 3 letras del producto 
// y muestre el precio total con 2 decimales.

let producto = 'Cuaderno';
let precio = 2.50;
let cantidad = 4;

let productoMay = producto.toUpperCase();
let producto3Caracteres = producto.slice(0,3);
let precioTotal = precio * cantidad;

console.log(`El nombre del producto en mayúsculas es: `+productoMay);
console.log(`Las primeras 3 letras del producto son: `+producto3Caracteres);
console.log(`El precio total es: `+precioTotal.toFixed(2));