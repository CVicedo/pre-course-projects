function calculator(num1, num2){
    if (num2 === undefined){
        return (num1 * num1);
    } else if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Debes introducir números.'
    } else {
        let results = [(num1 + num2).toFixed(3), (num1 - num2).toFixed(3), (num1 * num2).toFixed(3), (num1 / num2).toFixed(3)];
        return results;
    }
}

console.log(calculator(5, 2));