//3. Validar calificación: Solicite una calificación (0-100). Muestre si aprobó (>=60) o reprobó (<60).

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese una  calificación (0-100): " , function(calificacion){

    if(calificacion>=0 && calificacion<=100){
        if(calificacion>=60){
            console.log(`Felicidades, usted aprobó`); 

        }else{
            console.log(`Usted no aprobó`);

        };
    }else{
       console.log(`Su calificación tienen que estar en el rango de 0-100`);
    }
    rl.close();
});