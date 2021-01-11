var readline = require('readline-sync');

//Función que comprueba los números introducidos por el usuario y realiza las operaciones
function calculator(args){
    if (args.length === 1){
        return (args[0] * args[0]);
    }else{
        for(let i = 0; i < args.length; i++){
            
            if (typeof args[i] !== 'number'){
                return 'Solo puedes introducir números.'
            } else {
                let sum = args[0];
                let subs = args[0];
                let mult = args[0];
                let div = args[0];

                for (let j = 1; j < args.length; j++){
                    sum += args[j];
                    subs -= args[j];
                    mult *= args[j];
                    div /= args[j];
                };
                return 'Suma: ' + sum.toFixed(3) + ' Resta: ' + subs.toFixed(3) + ' Multiplicacion: ' + mult.toFixed(3) + ' Division: ' + div.toFixed(3);
            };
        };    
    };
};

//Recojemos todo el input del usuario y lo convertimos de string a number guardandolo en un array
function input() {
    let arr = [];
    let arrNum = [];
    let isNumber = true;
    do{
        var num = readline.question('Introduce un numero o pulsa "n" cuando hayas acabado: ');
        
        if(num !== 'n'){
            arr.push(num);
        };
    
    }while(num !== 'n');

    for(let i = 0; i < arr.length; i++){
        arrNum.push(Number(arr[i]));
    };

    for(let j = 0; j < arrNum.length; j++){
        if(isNaN(arrNum[j])){
            isNumber = false;
        };
    };

    if(isNumber === true){
        return arrNum;
    } else {
        return 'Solo puedes introducir numeros.';
    };
};

//Damos la bienvenida
console.log('\nIntroduce un solo numero para obtener su raiz cuadrada o varios numeros para \nobtener la suma, resta, multiplicacion y division entre ellos.\n')

//Llamamos a las funciones hasta que el usuario decida salir
do{
    console.log(calculator(input()));
    
    //Preguntamos si se quiere repetir la operación con nuevos números
    var respuesta = readline.question("\nPara realizar otra operacion pulsa 's'. Para salir pulsa cualquier tecla. \n");
}while(respuesta === 's');