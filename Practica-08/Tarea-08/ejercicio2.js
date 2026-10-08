// Tarea 2: Funciones para figuras geométricas
// Cree funciones para calcular el área y el perímetro de las siguientes figuras: círculo, cuadrado, rectángulo y triángulo. 
// Cada función debe recibir los parámetros necesarios y retornar el resultado. Cree un menú con Switch para que el usuario elija 
// la figura y luego ingrese los datos necesarios. Muestre el área y el perímetro con 2 decimales.

// Importar el módulo readline
const readline = require('readline');

// Crear interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para calcular el área del círculo
function calcularAreaCirculo(radio) {
    return Math.PI * radio * radio;
}

// Función para calcular el perímetro del círculo
function calcularPerimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

// Función para calcular el área del cuadrado
function calcularAreaCuadrado(lado) {
    return lado * lado;
}

// Función para calcular el perímetro del cuadrado
function calcularPerimetroCuadrado(lado) {
    return lado * 4;
}

// Función para calcular el área del rectángulo
function calcularAreaRectangulo(base, altura) {
    return base * altura;
}

// Función para calcular el perímetro del rectángulo
function calcularPerimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

// Función para calcular el área del triángulo
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}

// Función para calcular el perímetro del triángulo
function calcularPerimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

// Mostrar menú
console.log("=== FIGURAS GEOMÉTRICAS ===");
console.log("1. Círculo");
console.log("2. Cuadrado");
console.log("3. Rectángulo");
console.log("4. Triángulo");

rl.question("Seleccione una figura: ", (opcion) => {
    let figura = parseInt(opcion);

    switch (figura) {
        case 1:
            rl.question("Ingrese el radio: ", (dato) => {
                let radio = parseFloat(dato);
                console.log("\nÁrea: " + calcularAreaCirculo(radio).toFixed(2));
                console.log("Perímetro: " + calcularPerimetroCirculo(radio).toFixed(2));
                rl.close();
            });
            break;
        case 2:
            rl.question("Ingrese el lado: ", (dato) => {
                let lado = parseFloat(dato);
                console.log("\nÁrea: " + calcularAreaCuadrado(lado).toFixed(2));
                console.log("Perímetro: " + calcularPerimetroCuadrado(lado).toFixed(2));
                rl.close();
            });
            break;
        case 3:
            rl.question("Ingrese la base: ", (datoBase) => {
                rl.question("Ingrese la altura: ", (datoAltura) => {
                    let base = parseFloat(datoBase);
                    let altura = parseFloat(datoAltura);
                    console.log("\nÁrea: " + calcularAreaRectangulo(base, altura).toFixed(2));
                    console.log("Perímetro: " + calcularPerimetroRectangulo(base, altura).toFixed(2));
                    rl.close();
                });
            });
            break;
        case 4:
            rl.question("Ingrese la base: ", (datoBase) => {
                rl.question("Ingrese la altura: ", (datoAltura) => {
                    rl.question("Ingrese el primer lado: ", (datoLado1) => {
                        rl.question("Ingrese el segundo lado: ", (datoLado2) => {
                            let base = parseFloat(datoBase);
                            let altura = parseFloat(datoAltura);
                            let lado1 = parseFloat(datoLado1);
                            let lado2 = parseFloat(datoLado2);
                            console.log("\nÁrea: " + calcularAreaTriangulo(base, altura).toFixed(2));
                            console.log("Perímetro: " + calcularPerimetroTriangulo(base, lado1, lado2).toFixed(2));
                            rl.close();
                        });
                    });
                });
            });
            break;
        default:
            console.log("Opción no válida");
            rl.close();
    }
});