//Object containing the bingo card's numbers
var bingoCard = [

    { number: 1, matched: false },

    { number: 2, matched: false },

    { number: 3, matched: false },

    { number: 4, matched: false },

    { number: 5, matched: false },

    //next line

    { number: 6, matched: false },

    { number: 7, matched: false },

    { number: 8, matched: false },

    { number: 9, matched: false },

    { number: 10, matched: false }, 
    
    //next line

    { number: 11, matched: false },

    { number: 12, matched: false },

    { number: 13, matched: false },

    { number: 14, matched: false },

    { number: 15, matched: false }];

//Object containing players data
const player = [

    { name: 'Melquiades', score: 1234 },

    { name: 'Ataulfo', score: 9867 },

    { name: 'Aurelio', score: 8465 }

    ];

let score = 0;

//Welcome function. It creates a new entry in the array player with player's name and initial score, wich equals 1.000.
welcome = () => {
    let name = prompt('Introduce tu nombre: ');
    if(typeof name !== 'string' || name === ''){
        do{
            name = prompt('Tienes que introducir un nombre válido, vuelve a probar:')
        }while(typeof name !== 'string' || name === '')
    }
    prompt('Bienvenido/a al juego de Bingo, ' + name + '. Juega con responsabilidad ;-)');
    player.push({name: name,
                score: 1000})
    return name;
};

//This function actualizes the player's score and orders the player object by score (the less points the better).

//CAL SOLUCIONAR-HO
function playerScore(gainedScore){
    let orderedWinnerTable = [];
    player[player.length - 1].score = gainedScore;

    gainedScore.sort((
        (a, b) => this.ordenamiento[a.score] - this.ordenamiento[b.score])
      )

    /*
    for(let i = 0; i > player.length; i++){
        if(player[i].score < player[0].score){
            orderedWinnerTable.unshift(player[i]);
        }
    }
    */
    return gainedScore/*orderedWinnerTable*/;
}


//Log the carton numbers. This function does not calculate anythig, it's only function is to show numbers in a proper format
function logNumbers(numerosCarton) {
    let stringNumbers = `Sus números son: \n`;
    for(let i = 0; i < numerosCarton.length ; i++){
        if((i + 1) % 5 === 0){
            stringNumbers = stringNumbers + numerosCarton[i].number + '\n'
        }else{
            stringNumbers = stringNumbers + numerosCarton[i].number + '  ';
        }
    };
    return stringNumbers;
};

//Asking if player wanna still playing one more number
function newNumber(){
    let askNewNumber = confirm(`Quieres otro número?`);
    return askNewNumber;
}

//Generate a random number between 1 and 99 and prompt it
function generateRandomNumberPrompt(){
    let randomNumber;
    do{
        randomNumber = Math.floor(Math.random() * 16); 
    } while(randomNumber === 0);
    alert(`El próximo número es el ${randomNumber}.`)
    return randomNumber;
}

//Generate random number and DON'T prompt it
function generateRandomNumber(){
    let randomNumber;
    do{
        randomNumber = Math.floor(Math.random() * 100); 
    } while(randomNumber === 0);
    return randomNumber;
}

//Checks if a number in bingoCard matches the new number
function checkCarton(randomNum){
    bingoCard.forEach(function(item){
        if(item.number === randomNum){
            item.number = 'X';
            item.matched = true;
        }
    });
    return bingoCard;
}

//Checks if there is a winner line
function line(bingoNumbers){
    let j = 0;
    let n = 0;
    let m = 0;
    for(let i = 0; i < 5; i++){
        if(bingoNumbers[i].number === 'X'){
            j++
        }
    }
    if(j === 5){
        alert('¡LINEA!');
        return true;
    }
    for(let i = 4; i < 10; i++){
        if(bingoNumbers[i].number === 'X'){
            n++
        }
    }
    if(n === 5){
        alert('¡LINEA!');
        return true;
    }
    for(let i = 9; i < 15; i++){
        if(bingoNumbers[i].number === 'X'){
            m++
        }
    }
    if(m === 5){
        alert('¡LINEA!');
        return true;
    }

}

//Checks if there is a winner card with all the numbers crossed
function winner(bingoNumbers){
    let counter = 0;
    for(let i = 0; i < bingoNumbers.length; i++){
        if(bingoNumbers[i].number === 'X'){
            counter++;
        }
    }
    if(counter === bingoNumbers.length){
        return true;
    } else {
        return false;
    }
}

welcome(score);
alert(logNumbers(bingoCard));
let checkLine = false;
do{
    alert(logNumbers(checkCarton(generateRandomNumberPrompt())));
    score++;
    if(checkLine === false){
        if(line(bingoCard) === true){
            checkLine = true;
        };
    }
    if(winner(bingoCard) === true){
        alert(`¡BINGO! Enhorabuena, has ganado esta partida.`);
    }
} while(newNumber() === true && winner(bingoCard) === false);
alert(playerScore(score));
