// 3. Descuento por monto de compra:
// Solicite el monto de compra. Si es mayor a $100, aplique 15% de descuento. Si es mayor a $50, aplique 10%. 
// En otro caso, no hay descuento. Muestre el monto original, el descuento aplicado y el total a pagar con 2 decimales.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el monto de compra: $", function(monto) {

    // Convertimos el monto ingresado a número
    monto = parseFloat(monto);

    let descuento;
    let total;

    // Verificamos si el monto es mayor a $100
    if (monto > 100) {
        descuento = monto * 0.15;

    // Verificamos si el monto es mayor a $50
    } else if (monto > 50) {
        descuento = monto * 0.10;

    // Si no supera los $50, no hay descuento
    } else {
        descuento = 0;
    }

    // Calculamos el total a pagar
    total = monto - descuento;

    // Mostramos los resultados con dos decimales
    console.log(`Monto original: $${monto.toFixed(2)}`);
    console.log(`Descuento aplicado: $${descuento.toFixed(2)}`);
    console.log(`Total a pagar: $${total.toFixed(2)}`);

    rl.close();
});