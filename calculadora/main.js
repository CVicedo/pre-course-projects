//Global variables
let accumulateNumbers = '';
let floatNum = 0;
let operandOne = 0;
let operandTwo = 0;
let operation;
let resultado = document.getElementsByClassName("result").innerHTML;

//Input from every number in the calculator
document.getElementById('num1').addEventListener('click', () => inputNumber(1));
document.getElementById('num2').addEventListener('click', () => inputNumber(2));
document.getElementById('num3').addEventListener('click', () => inputNumber(3));
document.getElementById('num4').addEventListener('click', () => inputNumber(4));
document.getElementById('num5').addEventListener('click', () => inputNumber(5));
document.getElementById('num6').addEventListener('click', () => inputNumber(6));
document.getElementById('num7').addEventListener('click', () => inputNumber(7));
document.getElementById('num8').addEventListener('click', () => inputNumber(8));
document.getElementById('num9').addEventListener('click', () => inputNumber(9));
document.getElementById('num0').addEventListener('click', () => inputNumber(0));
document.getElementById('comma').addEventListener('click', () => inputNumber('.'));

//Input from non number buttons and opertions
document.getElementById('ret').addEventListener('click', () => deleteNum());
document.getElementById('ac').addEventListener('click', () => clear());
document.getElementById('ac').addEventListener('click', () => changeResult(0));
document.getElementById('adding').addEventListener('click', function(){
    operandOne = floatNum;
    operation = '+';
    clear();
});
document.getElementById('subs').addEventListener('click', function(){
    operandOne = floatNum;
    operation = '-';
    clear();
});
document.getElementById('mult').addEventListener('click', function(){
    operandOne = floatNum;
    operation = '*';
    clear();
});
document.getElementById('divi').addEventListener('click', function(){
    operandOne = floatNum;
    operation = '/';
    clear();
});
document.getElementById('equals').addEventListener('click', function(){
    operandTwo = floatNum;
    switch(operation){
        case '+':
            changeResult(operandOne + operandTwo);
            break;
        case '-':
            changeResult(operandOne - operandTwo);
            break;
        case '*':
            changeResult(operandOne * operandTwo);
            break;
        case '/':
            changeResult(operandOne / operandTwo);
            break;
    }
    clear();   
});

//Clear accumalatedNumbers
function clear(){
    accumulateNumbers = '';
    floatNum = 0;
}

//Change operation's result in html
function changeResult(num){
    result.innerHTML = num;
}

//Receives the input number from the calculator and puts it together in a string to show and in a float to calculate
function inputNumber(number){
    let stringNum = '';
    accumulateNumbers += number.toString();
    stringNum = accumulateNumbers;
    floatNum = parseFloat(accumulateNumbers)
    console.log(floatNum);
    result.innerHTML = stringNum;
}

//Substracts the last number from accumulateNumbers
function deleteNum(){
    let stringNum = '';
    accumulateNumbers = accumulateNumbers.slice(0, -1);
    stringNum = accumulateNumbers;
    result.innerHTML = stringNum;
}

