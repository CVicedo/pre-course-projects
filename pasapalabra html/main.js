//Constant with the different questions. Status === 0: ask again Status === 1: don't ask again.
const questionsOne = [

    { letter: "a", answer: "abducir", status: 0, question: "CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien"},
    { letter: "b", answer: "bingo", status: 0, question: "CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso"},
    { letter: "c", answer: "churumbel", status: 0, question: "CON LA C. Niño, crío, bebé"},
    { letter: "d", answer: "diarrea", status: 0, question: "CON LA D. Anormalidad en la función del aparato digestivo caracterizada por frecuentes evacuaciones y su consistencia líquida"},
    { letter: "e", answer: "ectoplasma", status: 0, question: "CON LA E. Gelatinoso y se encuentra debajo de la membrana plasmática. Los cazafantasmas medían su radiación"},
    { letter: "f", answer: "facil", status: 0, question: "CON LA F. Que no requiere gran esfuerzo, capacidad o dificultad"},
    { letter: "g", answer: "galaxia", status: 0, question: "CON LA G. Conjunto enorme de estrellas, polvo interestelar, gases y partículas"},
    { letter: "h", answer: "harakiri", status: 0, question: "CON LA H. Suicidio ritual japonés por desentrañamiento"},
    { letter: "i", answer: "iglesia", status: 0, question: "CON LA I. Templo cristiano"},
    { letter: "j", answer: "jabali", status: 0, question: "CON LA J. Variedad salvaje del cerdo que sale en la película 'El Rey León', de nombre Pumba"},
    { letter: "k", answer: "kamikaze", status: 0, question: "CON LA K. Persona que se juega la vida realizando una acción temeraria"},
    { letter: "l", answer: "licantropo", status: 0, question: "CON LA L. Hombre lobo"},
    { letter: "m", answer: "misantropo", status: 0, question: "CON LA M. Persona que huye del trato con otras personas o siente gran aversión hacia ellas"},
    { letter: "n", answer: "necedad", status: 0, question: "CON LA N. Demostración de poca inteligencia"},
    { letter: "ñ", answer: "señal", status: 0, question: "CONTIENE LA Ñ. Indicio que permite deducir algo de lo que no se tiene un conocimiento directo."},
    { letter: "o", answer: "orco", status: 0, question: "CON LA O. Humanoide fantástico de apariencia terrible y bestial, piel de color verde creada por el escritor Tolkien"},
    { letter: "p", answer: "protoss", status: 0, question: "CON LA P. Raza ancestral tecnológicamente avanzada que se caracteriza por sus grandes poderes psíonicos del videojuego StarCraft"},
    { letter: "q", answer: "queso", status: 0, question: "CON LA Q. Producto obtenido por la maduración de la cuajada de la leche"},
    { letter: "r", answer: "raton", status: 0, question: "CON LA R. Roedor"},
    { letter: "s", answer: "stackoverflow", status: 0, question: "CON LA S. Comunidad salvadora de todo desarrollador informático"},
    { letter: "t", answer: "terminator", status: 0, question: "CON LA T. Película del director James Cameron que consolidó a Arnold Schwarzenegger como actor en 1984"},
    { letter: "u", answer: "unamuno", status: 0, question: "CON LA U. Escritor y filósofo español de la generación del 98 autor del libro 'Niebla' en 1914"},
    { letter: "v", answer: "vikingos", status: 0, question: "CON LA V. Nombre dado a los miembros de los pueblos nórdicos originarios de Escandinavia, famosos por sus incursiones y pillajes en Europa"},
    { letter: "w", answer: "sandwich", status: 0, question: "CONTIENE LA W. Emparedado hecho con dos rebanadas de pan entre las cuales se coloca jamón y queso"},
    { letter: "x", answer: "botox", status: 0, question: "CONTIENE LA X. Toxina bacteriana utilizada en cirujía estética"},
    { letter: "y", answer: "peyote", status: 0, question: "CONTIENE LA Y. Pequeño cáctus conocido por sus alcaloides psicoactivos utilizado de forma ritual y medicinal  por indígenas americanos"},
    { letter: "z", answer: "zen", status: 0, question: "CON LA Z. Escuela de budismo que busca la experiencia de la sabiduría más allá del discurso racional"}, ]

    //Constant with the different questions. Status === 0: ask again Status === 1: don't ask again.
const questionsTwo = [

    { letter: "a", answer: "alambre", status: 0, question: "CON LA A. Hilo de metal"},
    { letter: "b", answer: "bajada", status: 0, question: "CON LA B. Disminución de la intensidad, el valor o la cantidad de algo"},
    { letter: "c", answer: "calco", status: 0, question: "CON LA C. Acción y resultado de calcar, copiar o imitar"},
    { letter: "d", answer: "domesticar", status: 0, question: "CON LA D. Acostumbrar a un animal salvaje a la compañía de las personas"},
    { letter: "e", answer: "embudo", status: 0, question: "CON LA E. Instrumento hueco en forma de cono y rematado en un tubo que sirve para transvasar líquidos"},
    { letter: "f", answer: "filosofia", status: 0, question: "CON LA F. Ciencia que trata de la esencia, propiedades, causas y efectos de las cosas naturales"},
    { letter: "g", answer: "grano", status: 0, question: "CON LA G. Semilla y fruto de los cereales y de otras plantas"},
    { letter: "h", answer: "hermandad", status: 0, question: "CON LA H. Cofradía o congregación de devotos"},
    { letter: "i", answer: "informe", status: 0, question: "CON LA I. Conjunto de datos o instrucciones sobre algo o alguien"},
    { letter: "j", answer: "jocoso", status: 0, question: "CON LA J. Gracioso, chistoso, festivo, divertido"},
    { letter: "k", answer: "parking", status: 0, question: "CONTIENE LA K. Aparcamiento público o privado"},
    { letter: "l", answer: "lameculos", status: 0, question: "CON LA L. Persona aduladora y servil"},
    { letter: "m", answer: "malabarista", status: 0, question: "CON LA M. Persona que hace juegos malabares"},
    { letter: "n", answer: "noticia", status: 0, question: "CON LA N. Divulgación o publicación de un hecho"},
    { letter: "ñ", answer: "añoranza", status: 0, question: "CONTIENE LA Ñ. Nostalgia o sentimiento de pena que produce la ausencia, privación o pérdida de una persona o cosa muy querida"},
    { letter: "o", answer: "orden", status: 0, question: "CON LA O. Colocación de las cosas en el lugar que les corresponde"},
    { letter: "p", answer: "palindromo", status: 0, question: "CON LA P. Palabra o frase que se lee igual de izquierda a derecha que de derecha a izquierda"},
    { letter: "q", answer: "queja", status: 0, question: "CON LA Q. Expresión de dolor, pena o sentimiento"},
    { letter: "r", answer: "remo", status: 0, question: "CON LA R. Pala de madera para impulsar las embarcaciones por el agua"},
    { letter: "s", answer: "seminario", status: 0, question: "CON LA S. Establecimiento para la formación de jóvenes eclesiásticos"},
    { letter: "t", answer: "tractor", status: 0, question: "CON LA T. Vehículo de motor cuyas ruedas se adhieren fuertemente al terreno, y se emplea para el arrastre de maquinaria y en las labores agrícolas"},
    { letter: "u", answer: "ultimo", status: 0, question: "CON LA U. Que dentro de una serie no tiene nada detrás"},
    { letter: "v", answer: "vago", status: 0, question: "CON LA V. Perezoso, holgazán"},
    { letter: "w", answer: "windsurfista", status: 0, question: "CON LA W. Persona que practica el windsurf"},
    { letter: "x", answer: "xenofobia", status: 0, question: "CON LA X. Odio u hostilidad hacia los extranjeros"},
    { letter: "y", answer: "yesca", status: 0, question: "CON LA Y. Materia muy seca y fácilmente inflamable"},
    { letter: "z", answer: "zapato", status: 0, question: "CON LA Z. Calzado que no pasa del tobillo, con la parte inferior de suela y lo demás de piel, tela u otro material"}, ]

    //Constant with the different questions. Status === 0: ask again Status === 1: don't ask again.
const questionsThree = [

    { letter: "a", answer: "arlequin", status: 0, question: "CON LA A. Personaje cómico de la antigua comedia que llevaba mascarilla negra y traje de cuadros o rombos de distintos colores"},
    { letter: "b", answer: "bar", status: 0, question: "CON LA B. Establecimiento donde los clientes consumen bebidas y algún alimento"},
    { letter: "c", answer: "ciclon", status: 0, question: "CON LA C. Viento fuerte producido por el giro del aire alrededor de una zona de bajas presiones"},
    { letter: "d", answer: "demonio", status: 0, question: "CON LA D. Diablo, ángel rebelde"},
    { letter: "e", answer: "emergente", status: 0, question: "CON LA E. Que emerge"},
    { letter: "f", answer: "ferula", status: 0, question: "CON LA F. Tablilla empleada en el tratamiento de fracturas"},
    { letter: "g", answer: "galgo", status: 0, question: "CON LA G. Perro de hocico y rabo largos, muy veloces, que se utilizan para cazar y en carreras"},
    { letter: "h", answer: "helado", status: 0, question: "CON LA H. Muy frío"},
    { letter: "i", answer: "itinerario", status: 0, question: "CON LA I. Descripción de una ruta, camino o recorrido"},
    { letter: "j", answer: "jeronimo", status: 0, question: "CON LA J. De la Orden de san Jerónimo o relativo a esta orden medieval"},
    { letter: "k", answer: "kiwi", status: 0, question: "CON LA K. Ave apterigiforme corredora, incapaz de volar, de unos 70 cm de altura, con las patas cortas y robustas y el pico corvo y largo, originaria de Oceanía"},
    { letter: "l", answer: "letargo", status: 0, question: "CON LA L. Inactividad y estado de reposo absoluto en que algunos animales permanecen durante ciertos periodos de tiempo"},
    { letter: "m", answer: "melancolia", status: 0, question: "CON LA M. Tendencia a la tristeza permanente"},
    { letter: "n", answer: "necesidad", status: 0, question: "CON LA N. Carencia o escasez de lo imprescindible para vivir"},
    { letter: "ñ", answer: "cabaña", status: 0, question: "CONTIENE LA Ñ. Casa rústica de campo hecha con ramas o madera"},
    { letter: "o", answer: "oro", status: 0, question: "CON LA O. Elemento químico metálico de color amarillo, muy dúctil y maleable y uno de los más pesados"},
    { letter: "p", answer: "patoso", status: 0, question: "CON LA P. Torpe"},
    { letter: "q", answer: "queroseno", status: 0, question: "CON LA Q. Una de las fracciones del petróleo natural, que se obtiene por refinación y destilación"},
    { letter: "r", answer: "robo", status: 0, question: "CON LA R. Apropiación indebida de algo ajeno, contra la voluntad de su poseedor, especialmente si se hace con violencia"},
    { letter: "s", answer: "serenata", status: 0, question: "CON LA S. Música que se interpreta en la calle y durante la noche, para festejar a una persona"},
    { letter: "t", answer: "tambor", status: 0, question: "CON LA T. Instrumento musical de percusión consistente en una caja de forma cilíndrica cubierta en sus dos bases con membranas de piel, que se toca con dos palillos"},
    { letter: "u", answer: "ulcera", status: 0, question: "CON LA U. Lesión que destruye tejidos de la piel o de la mucosa de un órgano"},
    { letter: "v", answer: "velocidad", status: 0, question: "CON LA V. Relación entre el espacio recorrido y el tiempo empleado en recorrerlo"},
    { letter: "w", answer: "walkiria", status: 0, question: "CON LA W. Cada una de las divinidades de la mitología escandinava que en los combates designaban los héroes que debían morir"},
    { letter: "x", answer: "xilofono", status: 0, question: "CON LA X. Instrumento de percusión formado por una serie de listones de madera o metal"},
    { letter: "y", answer: "yacimiento", status: 0, question: "CON LA Y. Sitio donde se halla naturalmente una roca, un mineral, un fósil, o restos arqueológicos"},
    { letter: "z", answer: "zoco", status: 0, question: "CON LA Z. En Marruecos y otros paises del norte de África, lugar en que se celebra un mercado"}, ]

    //Question mixer. Mixes the questions in the three arrays
function randomQuestions(arrQuestionsOne, arrQuestionsTwo, arrQuestionsThree) {
    let questionsMix = [];
    for(let i = 0; i < arrQuestionsOne.length; i++){
        let randomNum = Math.floor(Math.random() * (4 - 1)) + 1
        switch(randomNum){
            case 1:
                questionsMix.push(arrQuestionsOne[i])
                break;
            case 2:
                questionsMix.push(arrQuestionsTwo[i])
                break;
            case 3:
                questionsMix.push(arrQuestionsThree[i])
                break;
        }
    }
    return questionsMix
}

//Global variables needed to run the program properly
let questionsPassed = [];
let correctQuestionsCounter = 0;
let questionsAnsweredCounter = 0;
let questions = randomQuestions(questionsOne, questionsTwo, questionsThree);


function askQuestion(arrayQuestions) {
    let answer = document.getElementsByClassName("formOne")[0].value;
    for(let i = 0; i < arrayQuestions.length; i++){
        if(arrayQuestions[i].status === 0){
            document.getElementsByClassName("question")[0].innerHTML = arrayQuestions[i].question;
        }
        console.log(answer);
    }
}

/*for(let i = 0; i < questions.length; i++){
    console.log(questions[i].question)
}
*/
askQuestion(questions);
//console.log(document.getElementsByClassName("question")[0].innerHTML);

