//Tarea 3: Procesamiento de arreglo de objetos con forEach y filter
//Cree un arreglo de objetos que represente productos, donde cada objeto tenga nombre y precio (por ejemplo: { nombre: "Laptop", precio: 800 }).
//Use forEach para recorrer el arreglo y mostrar en consola el nombre y precio de cada producto.
//Use filter para obtener un nuevo arreglo solo con los productos que cuesten más de $100.
//Muestre el nuevo arreglo filtrado en consola.

// Arreglo de objetos con los productos
const productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 15 },
    { nombre: "Teclado", precio: 45 },
    { nombre: "Monitor", precio: 250 },
    { nombre: "Audífonos", precio: 120 }
];

// Utilizamos forEach para recorrer y mostrar todos los productos
console.log("=== LISTA DE PRODUCTOS ===");

productos.forEach(producto => {
    console.log("Producto: " + producto.nombre);
    console.log("Precio: $" + producto.precio);
});

// Utilizamos filter para obtener productos con precio mayor a $100
const productosFiltrados = productos.filter(producto => producto.precio > 100);

// Mostrar el nuevo arreglo filtrado
console.log("\n=== PRODUCTOS MAYORES A $100 ===");

productosFiltrados.forEach(producto => {
    console.log("Producto: " + producto.nombre);
    console.log("Precio: $" + producto.precio);
});

// Mostrar el arreglo filtrado completo
console.log("\nArreglo filtrado:");
console.log(productosFiltrados);