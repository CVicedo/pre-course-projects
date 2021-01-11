var readline = require('readline-sync');

var flights = [

    { id: 00, to: 'Bilbao', from: 'Barcelona', cost: 1600, scale: false },

    { id: 01, to: 'New York', from: 'Barcelona', cost: 700, scale: false },

    { id: 02, to: 'Los Angeles', from: 'Madrid', cost: 1100, scale: true },

    { id: 03, to: 'Paris', from: 'Barcelona', cost: 210, scale: false },

    { id: 04, to: 'Roma', from: 'Barcelona', cost: 150, scale: false },

    { id: 05, to: 'London', from: 'Madrid', cost: 200, scale: false },

    { id: 06, to: 'Madrid', from: 'Barcelona', cost: 90, scale: false },

    { id: 07, to: 'Tokyo', from: 'Madrid', cost: 1500, scale: true },

    { id: 08, to: 'Shangai', from: 'Barcelona', cost: 800, scale: true },

    { id: 09, to: 'Sydney', from: 'Barcelona', cost: 150, scale: true },

    { id: 10, to: 'Tel-Aviv', from: 'Madrid', cost: 150, scale: false } ];

//Wellcome the user
function wellcome() {
    let name = readline.question('\nPor favor, introduce tu nombre: ');

    console.log('\nBienvenido/a a la central de reservas, ' + name + '.\n');
};

//Listing flight options for today
function vistualization(args){
    args.forEach(function(item){
        if(item.scale === true){
            console.log('El vuelo con origen ' + item.from + ' y destino ' + item.to + ' tiene un coste de '
            + item.cost + '€ y realiza escalas.');
        } else {
            console.log('El vuelo con origen ' + item.from + ' y destino ' + item.to + ' tiene un coste de '
            + item.cost + '€ y no realiza escalas.');
        };
    });
};

//Average price calculation
function averagePrice(args){
    let sum = 0;
    args.forEach(function(item){
        sum += item.cost;
    });
    console.log('\nEl precio medio de los vuelos para hoy es de ' + (sum/args.length).toFixed(2) + '€.\n')
};

//Number of non direct flights
function stops(args){
    let sum = 0;
    args.forEach(function(item){
        if(item.scale === true){
            sum++;
        };
    });
    console.log(sum + ' de los ' + args.length + ' vuelos programados para hoy realizan escala.\n');
};

//Last 5 destinations
function destination(args){
    console.log('Los destinos de los últimos cinco vuelos de hoy son:')
    for(let i = args.length -1; i > args.length - 6; i--){
        console.log(args[i].to);
    };
};


wellcome();
vistualization(flights);
averagePrice(flights);
stops(flights);
destination(flights);