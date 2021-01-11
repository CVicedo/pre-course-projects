//Object containing the bingo card's numbers
var bingoCard = [

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    //next line

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    //next line

    { number: 0, matched: false },

    { number: 0, matched: false },
    
    { number: 0, matched: false },
    
    { number: 0, matched: false },
    
    { number: 0, matched: false }
];

//Object containing players data
const player = [

    { name: 'Melquiades', score: 123 },

    { name: 'Ataulfo', score: 980 },

    { name: 'Aurelio', score: 560 }

    ];

//Global variables needed to run the program properly
let numberCompare = [];
let randomBingoCard = [];
let playAgain = false;
let newCard = false;
const welcome = 'Bienvenido/a al juego de Bingo. A continuación te mostraremos el ranking actual de jugadores y el sistema de puntos.';



//Asks the new player's name
newPlayerName = () => {
    let name = prompt('Introduce tu nombre: ');
    if(typeof name !== 'string' || name === ''){
        do{
            name = prompt('Tienes que introducir un nombre válido, vuelve a probar:')
        }while(typeof name !== 'string' || name === '')
    }

    return name;
};

//It creates a new entry in the array player with player's name and initial score, wich equals 1.000.
function pushPlayer(playerName){
    alert('Disfruta con el juego de Bingo, ' + playerName + ', y juega con responsabilidad ;-)');
    player.push({name: playerName,
                score: 1000})
}

//Show the points system to the user
showPointsSystem = () => {
    alert('SISTEMA DE PUNTOS DEL JUEGO DE BINGO: \n Empiezas con 1.000 puntos. Por cada turno que emplees se te restarán 10 puntos. \n Gana el jugador con más puntos.')
}

//Show the actual ranking to the user (it does not order the players in a ranking, it only show's the data using an alert())
function showPlayers(playersRanking){
    let playersString = '';

    for(let i = 0; i < playersRanking.length; i++){
        playersString = playersString + playersRanking[i].name + ': ' + playersRanking[i].score + ' puntos\n'
    }
    return playersString;
}
  
//Generates card numbers randomly within a range
function randomCardNumbers(bingoCard) {
    let randomNumber;
    let numberExists = false;

    for(let i = 0; i < bingoCard.length; i++){
        do{
            numberExists = false;
            randomNumber = Math.floor(Math.random() * 100); //You can change the numbers range here
            for(let i = 0; i < bingoCard.length; i++){
                if((randomNumber === bingoCard[i].number) && (randomNumber !== 0)){
                    numberExists = true;
                }
            }
        } while(randomNumber === 0 || numberExists === true);
    bingoCard[i].number = randomNumber;
    }    
    return bingoCard;
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

//Asking if player wanna still playing one more number and extracts ponints from player.score in every turn
function newNumber(){
    let askNewNumber = confirm(`Quieres otro número?`);
    if (askNewNumber){
        player[player.length - 1].score -= 10;
    }
    return askNewNumber;
}

//Generate a random number never used before within a range
function generateRandomNumber(){
    let randomNumber;
    let numberExists = false;

    
    do{
        numberExists = false;
        randomNumber = Math.floor(Math.random() * 100); //You can change the numbers range here
        for(let i = 0; i < numberCompare.length; i++){
            if(randomNumber === numberCompare[i]){
                numberExists = true;
            }
        }
    } while(randomNumber === 0 || numberExists === true);
    numberCompare.push(randomNumber);
    alert(`El próximo número es el ${randomNumber}.`)
    return randomNumber;
}

//Checks if a number in bingoCard matches the new number
function checkCarton(randomNum){
    randomBingoCard.forEach(function(item){
        if(item.number === randomNum){
            item.number = 'X';
            item.matched = true;
        }
    });
    return randomBingoCard;
}

//Checks if there is a winner line.
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
    for(let i = 5; i < 10; i++){
        if(bingoNumbers[i].number === 'X'){
            n++
        }
    }
    if(n === 5){
        alert('¡LINEA!');
        return true;
    }
    for(let i = 10; i < 15; i++){
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

//Program execution
do{
    alert(welcome);
    alert('Puntuación actual: \n' + showPlayers(player.sort((a, b) => b.score - a.score)));
    showPointsSystem();
    pushPlayer(newPlayerName());
    

    do{                                         
        randomBingoCard = randomCardNumbers(bingoCard);
        alert(logNumbers(randomBingoCard));
        newCard = confirm('¿Quieres cambiar de cartón? Si pulsas "Cancelar" jugarás con el cartón que te acabamos de mostrar');

    }while(newCard === true);
    let checkLine = false;
    do{
        alert(logNumbers(checkCarton(generateRandomNumber())));
        if(checkLine === false){
            if(line(randomBingoCard) === true){
                checkLine = true;
            };
        }
        
        if(winner(randomBingoCard) === true){
            alert(`¡BINGO! Enhorabuena, has ganado esta partida.`);
        }
    } while(winner(randomBingoCard) === false && newNumber() === true);
alert('Así ha quedado la puntuación:\n' + showPlayers(player.sort((a, b) => b.score - a.score)));
playAgain = confirm('¿Otra partidita?');

numberCompare = [];
randomBingoCard = [];

} while(playAgain === true);
