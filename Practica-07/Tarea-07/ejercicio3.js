//Tarea 3: Inventario de productos (FOR...OF y FOR...IN)
//Cree un arreglo de objetos que represente un inventario con al menos 4 productos. Cada producto debe tener: nombre, precio y cantidad.
// Usando FOR...OF, recorra el arreglo y muestre cada producto con su valor total (precio × cantidad). Además, usando FOR...IN, recorra 
// un objeto que represente el resumen del inventario (total de productos, valor total del inventario) y muestre sus propiedades.

// 3. Inventario de productos (FOR...OF y FOR...IN)
// Crear un inventario con al menos 4 productos.
// Mostrar cada producto y su valor total.
// Después mostrar un resumen del inventario.

// Arreglo de objetos que representa el inventario
let inventario = [
    {
        nombre: "Teclado",
        precio: 25,
        cantidad: 4
    },
    {
        nombre: "Mouse",
        precio: 15,
        cantidad: 6
    },
    {
        nombre: "Monitor",
        precio: 150,
        cantidad: 3
    },
    {
        nombre: "Audifonos",
        precio: 30,
        cantidad: 5
    }
];

// Variables para el resumen
let totalProductos = 0;
let valorTotalInventario = 0;

console.log('=== INVENTARIO DE PRODUCTOS ===');

// Bucle FOR...OF para recorrer cada producto
for (let producto of inventario) {

    // Calcular el valor total del producto
    let valorTotal = producto.precio * producto.cantidad;

    // Mostrar los datos del producto
    console.log('\nProducto: ' + producto.nombre);
    console.log('Precio: $' + producto.precio.toFixed(2));
    console.log('Cantidad: ' + producto.cantidad);
    console.log('Valor total: $' + valorTotal.toFixed(2));

    // Acumular la cantidad de productos
    totalProductos = totalProductos + producto.cantidad;

    // Acumular el valor total del inventario
    valorTotalInventario = valorTotalInventario + valorTotal;
}

// Crear objeto con el resumen del inventario
let resumenInventario = {
    totalProductos: totalProductos,
    valorTotalInventario: valorTotalInventario
};

console.log('\n=== RESUMEN DEL INVENTARIO ===');

// Bucle FOR...IN para recorrer el objeto resumen
for (let propiedad in resumenInventario) {

    // Mostrar cada propiedad con su valor
    if (propiedad === "valorTotalInventario") {
        console.log(propiedad + ': $' + resumenInventario[propiedad].toFixed(2));
    } else {
        console.log(propiedad + ': ' + resumenInventario[propiedad]);
    }
}