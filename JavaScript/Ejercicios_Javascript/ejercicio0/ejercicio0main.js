// Paso 1 - Define e inicializa un array con 5 elementos string en una sola línea
const stringArray = ["Eva", "Manuel", "Willi", "Peluso", "Lupe"];
console.log(stringArray);
console.log("Fin Paso 1");

//Paso 2 - Define un array inicialmente vacio. 
let numberArray = [];
console.log(`La longitud del array es, ${numberArray.length}`);
console.log(numberArray);
// Añade 3 elementos tipo number
numberArray.push(7,15,23);
console.log(`La longitud del array es, ${numberArray.length}`);
console.log(numberArray);
//Elimina el primero
numberArray.shift();
console.log(`La longitud del array es, ${numberArray.length}`);
console.log(numberArray);
// Añade dos nuevos al inicio
numberArray.unshift(3, 10);
console.log(`La longitud del array es, ${numberArray.length}`);
console.log(numberArray);
//En cada paso, imprime la longitud y el array entero por consola utilizando un string template del tipo: `Longitud: ${}`
console.log("Fin Paso 2");

// Paso 3 - Escribe un función nombrada que devuelva true si el argumento es de tipo boolean
// y false en caso contrario
function isBoolean(value) {
    return typeof value === "boolean";
}
console.log(isBoolean(true));
console.log(isBoolean(2));
console.log(isBoolean("true"));
console.log("Fin Paso 3");

// Paso 4 - Escribe una función q devuelva la longitud de un string recibido por argumento.
const lengthString = string => string.length;
console.log(lengthString("Hola mundo"));
console.log(lengthString("Soy Eva"));
console.log("Fin Paso 4");

// Paso 5 - Crea una función de flecha q reciba una cantidad de minutos y lo devuelva convertido a segundos
const mintoSeg = mins => mins*60;
console.log(mintoSeg (2));
console.log("Fin Paso 5");

// Paso 6 - Crea una función q reciba un nº y devuelva el siguiente nº par. Si ya es par, lo devuelve directamente
function numPar(num) {
    if (num % 2 == 0) {
        return num;
    } else {
        return num + 1;
    }    
}
console.log(numPar(2));
console.log(numPar(5));
console.log("Fin Paso 6");

// Paso 7 - Crea una función q reciba una edad y devuelva la cantidad de dias q esa persona ha vivido.
// Puedes obviar los años bisiestos.

function diasVividos(años) {
    return años * 365;
}
console.log(`Has vivido ${diasVividos(42)} dias.`);
console.log("Fin Paso 7");

// Paso 8 - Crea una función q reciba un array y devuelva su último elemento.
// Prueba tu función con varios arrays de diferentes longitudes.
const lastElementOf = array => array[array.length - 1];
console.log(lastElementOf([1, 3, 5]), lastElementOf(["Eva", "Manuel", "Willi", "Peluso", "Lupe"]));
console.log("Fin Paso 8");

// Paso 9 - Crear función q calcula nº de patas de cada animal y devuelve cantidad de patas totales
// Pollos: patas , Vacas: 4 patas y Cerdos: 4 patas. Patas totales¿?
function contador (cantidadPollos, cantidadVacas, cantidadCerdos) {
    let = patasPollos = 2*cantidadPollos;
    let = patasVacas = 4*cantidadVacas;
    let = patasCerdos = 4*cantidadCerdos;
    return patasPollos + patasVacas + patasCerdos;
    
}
console.log(contador(5,2,8));

// Paso 9 con función flecha
const contarpatas = (pollos, vacas, cerdos) => pollos * 2 + vacas * 4 + cerdos *4;
console.log(`${contarpatas(5, 2, 8)} patas totales`);
console.log("Fin Paso 9");

// Paso 10 - Crea una función q determine si dos datos recibidos por argumentos son del mismo tipo.
 function equalDat(a, b) {
    if (typeof a === typeof b) {
         return `Los datos son del mismo tipo`
    } else {
         return `Son datos diferentes`
    }    
};
console.log(equalDat(4,5));
console.log(equalDat(4,"paco"));

// Paso 10 con Operador ternario
function equalDat(a, b) {
    return (typeof a === typeof b) 
    ? "Los datos son del mismo tipo" : "Son datos diferentes";            
};

console.log(equalDat(4,5));
console.log(equalDat(4,"paco"));
console.log("Fin Paso 10");

// Paso 11 - Crea una función q reciba un string con una frase y devuelva un array
// donde cada elemento será una palabra de la frase original.
// Investigar método existente de los strings para este fin.
const fraseString = "Eva está aprendiendo a programar en JS";
const convertirenArray = function (x) {
    return x.split(" ");
}

console.log(convertirenArray(fraseString));
console.log("Fin Paso 11");

// Paso 12 - Inicializa dos objetos, address1 y address2 con las propiedades
// calle, nº, planta, nº de puerta, municipio, cp y provincia.
let address1 = {
    calle: "Franz Kafka",
    numero: 11,
    bloque: 2,
    piso: 7,
    letra: "B",
    codigo_postal: 29010,
    localidad: "Málaga",
    provincia: "Málaga"
}

let address2 = {
    calle: "Carlos Cano",
    numero: 9,
    bloque: "local",
    piso: 0,
    letra: "Oficina",
    codigo_postal: 29010,
    localidad: "Málaga",
    provincia: "Málaga"
}
console.log(address1);
console.log(address2);
console.log("Fin Paso 12");

// Paso 13 - Crea una funcion q se llame parseDomain() que reciba por argumento un string
// y devuelva un objeto con dos propiedades: domain y tld. (pymescomercial) (.com)
const parseDomain = function (domainTld) {
    const array = domainTld.split(".");
    const object = {
        Domain: array[0],
        TLD: array[1]
    }
    return object;
}
console.log(parseDomain("pymescomercial.com"));
console.log(parseDomain("manipulador-de-alimentos.es"));

// Paso 13 con función flecha
const parseDomain2 = str => { 
    return {
        domain: str.split(".")[0], 
        tld: str.split(".")[1]
    }
};
console.log(parseDomain2("pymescomercial.com"));
console.log(parseDomain2("manipulador-de-alimentos.es"));

console.log("Fin Paso 13");

// Paso 14 - Crea una funcion q devuelva true si dos números tienen el mismo valor y el mismo
// tipo de dato. Debes usar el operador lógico "&&".
// Prueba tu función con: strictEquality("5", 5); //false y strictEquality(5, 5); //true.
const strictEquality = function (a, b) {
    if (a == b && typeof a == typeof b) {
        return true;
    } else {
        return false;
    }
}
console.log(strictEquality (5, "5"));
console.log(strictEquality (5, 5));

// Paso 14 con función flecha
const strictEquality2 = (a, b) => (a == b) && (typeof a == typeof b);
console.log(strictEquality2 (5, "5"));
console.log(strictEquality2 (5, 5));
console.log("Fin Paso 14");

// Paso 15 - Crear una función q reciba dos strings y devuelva true si tienen 
// la misma longitud y false en caso contrario. (Hecho con función flecha)
const mismaLongitud = (str1, str2) => str1.length === str2.length;
console.log(mismaLongitud("Eva", "Manuel"));
console.log(mismaLongitud("Pelu", "Lupe"));
console.log("Fin Paso 15");

// Paso 16 - Crea una función q reciba un string y determine si está vacío (sin utilizar length)
const estaVacio = function (str) {
    return str === "" || str === undefined;
    // o return str ? false : true;
}
console.log(estaVacio(""));
console.log(estaVacio("no está vacío"));
console.log(estaVacio());

// Paso 16 - con funcion ternaria
const estaVacio2 = str => str ? `El string tiene contenido` : `El string está vacío`;
console.log(estaVacio2(""));
console.log(estaVacio2("soy un string con contenido"));
console.log(estaVacio2());

console.log("Fin Paso 16");

// Paso 17 - Imprimir elemento a elemento el array de paso 1 (stringArray) de 4 formas diferentes:
//const stringArray = ["Eva", "Manuel", "Willi", "Peluso", "Lupe"];

// while
let stringArray2 = ["Eva", "Manuel", "Willi", "Peluso", "Lupe"];
let c = 0;
while (c < stringArray2.length) {
    console.log(`Indice ${c}: ${stringArray2[c]}`);
    c++;
};

// for
let stringArray3 = ["Eva", "Manuel", "Willi", "Peluso", "Lupe"];
for (let c = 0; c < stringArray3.length; c++) {
    console.log(`Indice ${c}: ${stringArray3[c]}`);
};

// for of
let stringArray4 = ["Eva", "Manuel", "Willi", "Peluso", "Lupe"];
for (let item of stringArray4) {
    console.log(item);
};

//forEach
let stringArray5 = ["Eva", "Manuel", "Willi", "Peluso", "Lupe"];
stringArray5.forEach((item, index) => console.log(`indice ${index} : ${item}`));

console.log("Fin Paso 17");

// Paso 18 - Crea un función q reciba un string y un nº x y devuelva el string original repetido x veces.
function repetirString(a, b) {
    console.log(a.repeat(b));
    
}
repetirString("No haré memes del profesor.", 5);

// Paso 18 con bucle for
const repeatString = (string, n) => {
    let repeatString = " ";
    for (let i = 0; i < n; i++) {
        repeatString += string;
    }
    return repeatString;
}
console.log(repeatString("Haré muchas memes del profesor.", 3));
console.log("Fin Paso 18");

// Paso 19 - Crea una función q recibe un objeto con dos campos, votos positivos y 
// votos negativos y q devuelva la cuenta final
const getVoteCount = function (obj) {
    return obj.upVotes + obj.downVotes;    
}

const votes = {upVotes: 35, downVotes: 15};
console.log((getVoteCount(votes)));
console.log(getVoteCount({upVotes: 35, downVotes: 15})); // esto daría mismo resultado.
console.log("Fin Paso 19");

// Paso 20 -  Crea una función qu recibe un array de tipos de datos mezclados y q devuelve otro 
// array con el tipo de cada uno de los elementos.

function typeOfArray(array) {
    const arrayTypes = [];

    array.forEach(element => {
        arrayTypes.push(typeof element);

    });
     return arrayTypes;   
    
}
const testArray = ["Estoy estudiando JS", 7.5, {}, 0, undefined, [], "codespace"];
console.log(typeOfArray(testArray));
console.log("Fin Paso 20");

// Paso 21 - Función q dado un array de números con formato string devuelva un array con los 
// número ya parseados.
function getParsedNumbers(array) {
    const parsedArray = [];

    array.forEach(element => {
        parsedArray.push(Number(element));

    });

    return parsedArray;       
}

console.log(getParsedNumbers(["1.5", "10", "0"]));
console.log("Fin Paso 21");

// Paso 22 - Crear una función de flecha q devuelva "Positivo" si el nº q recibe por argumento
// es mayor o igual q cero y "Negativo" en caso contrario. Usar operador ternario (? :) .

const isPositive = num => num >= 0 ? "Positive" : "Negative";
console.log(isPositive(-5));
console.log(isPositive(5));
console.log(isPositive(0));
console.log("Fin Paso 22");

// Paso 23 - Crea una función q dado un array cualquiera y un índice, borre el elemento guardado en 
// dicho índice.

const removeItem = (array, index) => array.splice(index, 1);
console.log("Fin Paso 23");


// Paso 24 - Usando la función del apartado 23, crea otra función q dado un array de números
// y un número a filtrar, devuelva un array borrando todas las apariciones de dicho número.

const filterItem = (array, numberToFilter) => {

    array.forEach((element, index) => {

        if (element === numberToFilter) {
            removeItem(array, index);
        }
    });
}    

const arrayFiltered = [1, 5, 6, 7, 5];  
filterItem(arrayFiltered, 5);
console.log(arrayFiltered);
console.log("Fin Paso 24");

// Paso 25 - Crea dos funciones q recibirán un objeto. La primera devolverá un array con los nombres
// de todas su propiedades. La segunda devolverá un array con los valores de dichas propiedades.
// Investigar los métodos keys y values del prototipo de objet.
function propertyArray(object) {
    return Object.keys(object); 
    
}

let myfamily = {
    papa: "Manuel",
    mama: "Eva",
    hijo1: "Willi",
    hijo2: "Bizcochito"
}
console.log(propertyArray(myfamily));

const typeArray = value => Object.values(value);
console.log(typeArray(myfamily));   
console.log("Fin Paso 25");    

// Paso 26 - Crea una función que invierta un string.
function stringReverse(string) {
    reversedString = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }
    return reversedString;
}
console.log(stringReverse(".nóicamargorp ed sedrat sal ne éfac led érasuba oN"));

// Paso 26 - OTra forma de hacer lo mismo.

function stringInvertido(string) {
    return string.split('').reverse().join('');
        
}
console.log(stringInvertido('.nóicamargorp ed sedrat sal ne éfac led érasuba oN'));
console.log("Fin Paso 26");


// Paso 27 - Crea una función q compare strings sin tener en cuenta mayuscula y minuscula

let compareStrings = (a, b) => a.toLowerCase() === b.toLowerCase();
console.log(compareStrings("HoLa", "hOlA"));
console.log("Fin Paso 27");

// Paso 28 - Crea una función q convierta en mayuscula solo la primera letra de cada palabra
// de un string dado. El apartado 11 será de ayuda. Investigar cómo unir un array de strings en 
// un único string.
function capitalize(str) {
    let words = str.split(" ");

    for (i = 0 ; i < words.length; i++) {
        
        let letters = words[i].split("");

        letters[0] = letters[0].toUpperCase();

        words[i] = letters.join("");
    }

    return words.join(" ");
    
}
console.log(capitalize("el veloz murciélago hindú comía feliz cardillo y kiwi"));
console.log("Fin Paso 28");

// Paso 29 - Crea una función en una única línea q reciba un valor lógico y devuelva el opuesto.

const negate = (logical) => (!logical);
console.log(negate(true));
console.log(negate(false));
console.log("Fin Paso 29");