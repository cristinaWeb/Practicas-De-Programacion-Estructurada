//2. Comparar dos números: Solicite dos números. Compare cuál es mayor y muestre el resultado. Si son iguales, indíquelo.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su primer número: " , function(num1){
    rl.question("Ingrese su segundo número: " , function(num2){

        if(num1>num2){
            console.log(`Su número mayor es: ` , num1); 
        }else if(num2>num1){
             console.log(`Su número mayor es: ` , num2);
        }else{
             console.log(`Sus números son iguales: ${num1} = ${num2}`);
        }
        rl.close();

    });
});