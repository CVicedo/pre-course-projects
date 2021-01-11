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
            console.log('El vuelo ' + item.id + ' con origen ' + item.from + ' y destino ' + item.to + ' tiene un coste de '
            + item.cost + '€ y realiza escalas.');
        } else {
            console.log('El vuelo ' + item.id + ' con origen ' + item.from + ' y destino ' + item.to + ' tiene un coste de '
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



//Create new fligths up to 15
function create(){
    console.log('Creador de vuelos:\n');
    if(flights.length < 15){
        let newId = flights.length;
        let newTo = readline.question('Destino: ');
        let newFrom = readline.question('Origen: ');
        let newCost = readline.question('Precio: ');
        let newScale = false;
        let question = readline.question('Vuelo con escalas? s/n ');
        if(question === 's'){
            newScale = true;
        };

        flights.push({id: newId, to: newTo, from: newFrom, cost: newCost, scale: newScale});
    } else {
        console.log('Se ha llegado al límite de 15 vuelos para hoy.\n');
    };

};

//Delete existing flights
function eliminate(){
    console.log('Eliminar vuelo. \n')
    let num = readline.question('Indica la ID del vuelo que quieres eliminar: ');
    let exists = false;

    for(let i = 0; i < flights.length; i++){
        if(flights[i].id.toString() === num){
            flights.splice(i, 1);
            exists = true;
        };
    };
    if(exists === false){
        console.log('\nNo existe ningun vuelo con esa ID.');
    };
};

//Searching fligths by price
function priceOrder(args){
    console.log('Buscador de vuelos.\n');
    do{
        let inputPrice = readline.question('Introduce tu presupuesto para el vuelo: ');
        let inputOrder = readline.question('Si buscas precios mayores pulsa "m", para precios menores pulsa "n",' +
                                            ' para precios iguales pulsa "i": ');
        var found = false;
        var validInput = true;

        for(let i = 0; i < args.length; i++) {
                if(inputOrder === 'm'){
                    if(args[i].cost > inputPrice){
                        found = true;
                        if(args[i].scale === true){
                            console.log('El vuelo ' + args[i].id + ' con origen ' + args[i].from + ' y destino ' + args[i].to + ' tiene un coste de '
                            + args[i].cost + '€ y realiza escalas.');
                        } else {
                            console.log('El vuelo ' + args[i].id + ' con origen ' + args[i].from + ' y destino ' + args[i].to + ' tiene un coste de '
                            + args[i].cost + '€ y no realiza escalas.');
                        };
                    }
                } else if (inputOrder === 'n'){
                    if(args[i].cost < inputPrice){
                        found = true;
                        if(args[i].scale === true){
                            console.log('El vuelo ' + args[i].id + ' con origen ' + args[i].from + ' y destino ' + args[i].to + ' tiene un coste de '
                            + args[i].cost + '€ y realiza escalas.');
                        } else {
                            console.log('El vuelo ' + args[i].id + ' con origen ' + args[i].from + ' y destino ' + args[i].to + ' tiene un coste de '
                            + args[i].cost + '€ y no realiza escalas.');
                        };
                    };
                } else if (inputOrder === 'i'){
                    if(args[i].cost.toString() === inputPrice){
                        found = true;
                        if(args[i].scale === true){
                            console.log('El vuelo ' + args[i].id + ' con origen ' + args[i].from + ' y destino ' + args[i].to + ' tiene un coste de '
                            + args[i].cost + '€ y realiza escalas.');
                        } else {
                            console.log('El vuelo ' + args[i].id + ' con origen ' + args[i].from + ' y destino ' + args[i].to + ' tiene un coste de '
                            + args[i].cost + '€ y no realiza escalas.');
                        };
                    };
                } else {
                    validInput = false;
                };
            };
            if(validInput === false){
                console.log('\nDebes introducir una de estas tres opciones: "m", "n" o "i".')
            }
            if(found === false && validInput === true){
                console.log('\nNo se ha encontrado ningun vuelo que cumpla con los criterios de búsqueda.');
            };
    } while (found === false || validInput === false);

    do{
        var idMatch = false;
        var flightPurchase = readline.question('\nIntroduce la ID del vuelo que quieres comprar: ');

        for(let i = 0; i < flights.length; i++){
            if(args[i].id.toString() === flightPurchase){
                idMatch = true;
            };
        };
        
        if (idMatch === true){
            console.log('\nGracias por tu compra, vuelve pronto.');
        } else if (idMatch === false) {
            console.log('\nLa ID del vuelo que has introducido no se corresponde con ningún vuelo disponible.');
        };
    } while (idMatch === false);

};

//Asking the user for the role admin/user
function role(){
    
    do{
        var userId = readline.question('\nSi eres usuario pulsa "u", si eres administrador pulsa "a": ');
        if(userId === 'u'){
            return 'user';
        } else if (userId === 'a'){
            return 'admin';
        } else {
            console.log('\nDebes introducir una opción válida.');
        };

    } while (userId !== 'u' || userId !== 'a');
};


//Program start
wellcome();
vistualization(flights);
averagePrice(flights);
stops(flights);
destination(flights);

//Function execution for both admin and user roles
if (role() === 'admin'){
    do{
        var adminChoice = readline.question('\nSi deseas introducir un vuelo pulsa "i". Si deseas eliminar un vuelo pulsa "e": ');

        if(adminChoice !== 'i' && adminChoice !== 'e'){
            console.log('\nLa opción que has introducido es incorrecta.')
        };
        if(adminChoice === 'i'){
            create();
            vistualization(flights);
            var flow = readline.question('\nPara volver al menú de Administrador pulsa cualquier tecla, para salir pulsa "s": ');
        } else if (adminChoice === 'e'){
            eliminate();
            vistualization(flights);
            var flowSecond = readline.question('\nPara volver al menu de Administrador pulsa cualquier tecla, para salir pulsa "s": ');
        };

    } while (adminChoice !== 'i' && adminChoice !== 'e' || flow !== 's' && flowSecond !== 's');
} else {
    priceOrder(flights);
};


