// -------Uso de JS externo--------
function saludo () {
    alert("Hola desde un script externo");
    console.log ("has hecho click");
}
// document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

// -------Depuración / logging--------
// alert("Mensaje");
console.log("Mensaje");

// --------Variables var(desuso) let y const--------
// var -> function scope
//let / const -> block scope

// function saludar() {
//     let contador;
//     console.log("Inicial: ", contador);

//     for (contador = 0; contador < 3; contador++ ){
//         console.log(contador);
//     }
//     console.log("Final: ", contador);
// }
// saludar();


// limpiar consola
console.clear();

// Inicialización
let day;
day = 5;


let monthName = "Octubre";
let hour, minute, second;

// Lista a imprimir en consola
// let array = [15, 20, 25];
// console.log(array[0], array[1], array[2]);

// Igual a lo de arriba, pero más avanzado
let [var1, var2, var3] = [15, 20, 25];
console.log(var1, var2, var3);

// const -> block scope
const x = 1;
// const y; Error, no existe valor
// x = 2; Error, inválido, el valor es constante

console.clear();

// -------Tipos de datos en JS (Primitivos y Objetos)-------

// Primitivos (string, number, boolean, undefined y null)
let str = String("soy un string");
let str2 = "soy otro string";
// Para saber que tipo de dato es mi str, escribo:
console.log(typeof str, typeof str2, typeof "");

// let str = "string" ES IGUAL A "string"

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof "5");
// let num = "num" ES IGUAL A "num"

let bool = Boolean(true);
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof false);
// let bool = "bool" ES IGUAL A "true o false"

let undef;
console.log(undef, typeof undef);
// let undef = undefined

num = null;
console.log(typeof num, num);
// object, null (útil para limpiar una variable)
// Ejemplo:
let selectedColor = null;
console.log(selectedColor, typeof selectedColor);

console .clear();

// OBJETOS (array, function ------date, error...)
array = Array(1, 2, 3);
let array2 = [1, 2, 3];
console.log(array, array2);
console.log(typeof array, typeof array2);

console.log(typeof new Date("1979-10-10"));
console.log (typeof new Error("Mensaje de error"));

console.clear();

// Tipos de datos - Strings (funciones...) (el -1 nos indica que no existe)
str = "Hola futuro";
console.log(str, str.length);
console.log(str.indexOf("futuro"), str.indexOf("cadena no presente"));
console.log("la ultima ocurrencia de 'u' está en el indice", str.lastIndexOf("u"));
console.log(str.substring(1, 3));

// Concatenación - concat
console.log("Hola mundo".concat(". Adiós mundo."));
console.log("Hola mundo" + ". Adiós mundo.");;

str = str + ". Adiós mundo";
str += ". Adiós mundo.";
console.log(str);

console.log(str.replace("mundo", "futuro"));
console.log(str.replaceAll("mundo", "futuro"));
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase());

console.log(`El dia de mi cumpleaños es el ${day}.`);
console.log("El dia de mi cumpleaños es el", day,".");

// Parsing - Paraseo - Casting - convertir objetos a otros similares.
let number = Number("1000");
console.log(number, typeof number);

number += "1000";  //entiende que es una concatenacion, no una suma. Si le quitamos las comillas, los suma.
console.log(number, typeof number);

console.log("1" + 1, "1"- 1); //Ejemplo lógico curioso de JS

// -----------------------OBJETOS-------------------------

// Hacemos un ejemplo

let person = {
    name: "Eva",
    age: 42,
    blonde: false,
// PRE ES6 Antes
    walk: function (){
        console.log("Hey, estoy andando.");

    }, 

//ES6  Ahora
    jump(){
        console.log("Hey, estoy saltando.");
    },
    
    presentarse() {
        console.log(`Me llamo ${this.name} , tengo ${this.age}, años y ${this.blonde ? `soy rubia` : `soy morena.`}`);
    }
}

person.presentarse();

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años.`);

person.name = "Maria";

console.log(person);
console.log(`Se llama ${person.name} y tiene ${person.age} años y es ${person.blonde}.`);

//Acceso por corchetes / Brackets notation
// Por ejemplo, si no conocemos el dato pondríamos:
let nombredelapropiedadquequiero = "name";
console.log(person[nombredelapropiedadquequiero]);
// y nos da el valor de age, que es 42.

//Ampliación de propiedades en person
person.children = [
    {
        name: "Marta",
        age: 3
    },
    {
        name: "Pedro",
        age: 5
    },
    
];

// imprimir el nombre del 2º hijo:
console.log(person);
console.log(person.children[1].name);

//Imprimir nombre de ambos hijos:
console.log(person);
console.log(person.children[0].name, person.children[1].name);

//Imprimir el nombre del 1º hijo
console.log(person);
console.log(person.children[0].name);

//Funciones de person (no añadimos console.log porque ya lo tienen jump y walk)
person.jump(); //CS6 lo actual.
person.walk();  // lo anterior.


//Podemos imprimir objetos, arrays y strings, sin variables previas, asi:
console.log({name:"Eustaquio", age: 80});

// Entre ({objetos})
// Entre ([Arrays])
// Entre ("String")
// Todos siempre entre paréntesis.

console.log(typeof {}, typeof [], typeof "");

console.clear();

//----This (referenciar al objeto que tenga el this dentro de su contexto)-//Ejemplo:
const person2 = {
    name: "Manuel",
    talk() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}

const person3 = {
    name: "Alejandro",
    jump() {
        console.log(this);
        console.log(`Me llamo ${this.name}`);
    }
}

person2.talk();
person3.jump();


// Cómo Copiar objetos - Operador Spread ...
let obj1 = {property: 5};
let obj2 = obj1;




//Object Constructores - Constructor de Objetos usando funciones

function Car(brand, color, weight, topSpeed) {
    this.brand = brand;
    this.color = color;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.getDescription = function() {
        return `Este ${this.color} ${this.brand} pesa ${this.weight} kilos ` +
        `y puede alcanzar ${this.topSpeed} kms/h.`
        
    };
    
}

const car1 = new Car("mercedes", "red", 2000, 200);
const car2 = new Car("volvo", "white", 2500, 180);
const car3 = new Car("renault", "blue", 1500, 175);

console.log(car1, car2, car3);

console.log(car3.getDescription());




// ----ARRAYS----LISTAS
let selectedColors = ["red", "blue", "yellow"];  //Array de strings
console.log(selectedColors, typeof selectedColors);

// Añadimos un color más al array:
selectedColors[3] = "green";

//Añadimos un elemento al array con push (si no sabemos cuántos arrays habrá)
selectedColors.push("violet", "white");
console.log(selectedColors, selectedColors.length);

//Borrar el último elemento del array
selectedColors.pop();

// con removeItem creo una variable en la que puedo guardar lo que borra pop.
let removeItem = selectedColors.pop();
console.log(selectedColors, selectedColors.length);
console.log(removeItem);


//Añadir elemento al principio del array (con shift(), eliminamos el primero)
selectedColors.unshift("white");
console.log(selectedColors, selectedColors.length);

//Ordernar alfabeticamente el array
selectedColors.sort();
console.log(selectedColors, selectedColors.length);

//Buscar un elemento (-1 si no existe)
console.log("El rojo está en el índice", selectedColors.indexOf("red"));

console.log("El violeta está en el índice", selectedColors.indexOf("red") + 1);

// Slice, devuelve una sección de un array (el 4 no lo cuenta)
console.log(selectedColors.slice(1, 4));

// Splice, borra una sección de un array (elimina del 1 al 4 incluido)
selectedColors.splice();
console.log("los elementos borrados son:", selectedColors.splice(1, 4));

//Prueba ejercicio: Crear un objeto niño que tenga las propiedades nombre, altura, género y amigos.
//los amigos se crearán posteriormente 3 elementos strings.
//Después añadiremos uno extra al inicio.

let boy = {
    name: "lolo",
    heigth: 1.20,
    genero: "masculino",
    
}
console.log("El niño se llama", boy.name , "y mide:", boy.heigth);

boy.friends = ["pepa", "pepe", "pablito."]; 
console.log("Los amigos del niño son:", boy.friends[0],",",  boy.friends[1], "y", boy.friends[2]);

boy.friends.unshift("paquito.");
console.log("El amigo nuevo se llama", boy.friends[0]);

//Fin ejercicio.

// Version Profe del ejercicio

const kid = {
    name: "peter",
    height: 1.74,
    friends: [],
    //Creamos función perderAmigo, en este caso el último con pop.
    perderAmigo() {
        this.friends.pop();
    }

}

console.log(kid);
kid.friends.push("carmen", "sara", "Chris");
console.log(kid);
kid.friends.unshift("Marcus");
console.log(kid);

// Llamamos a la función creada y la imprimimos para ver resultado
kid.perderAmigo();
console.log(kid);

//Fin ejercio version profe

//---Condicionales (si...entonces - if...else)

// console.clear();

// Ejemplos de Condicionales
const randomNumber = 9;
const guessedNumber = "5";

// Primero comprobamos que tipo de dato es
// Comprobar el tipo de dato, en este caso, string
if (typeof guessedNumber === "string") {
    console.log("");
}

// Comprobamos si ambos son del mismo tipo
//Comprueba si randomNumber es del mismo tipo que guessedNumber
if(typeof randomNumber !== typeof guessedNumber) {
     console.log("hey, tienes que introducir datos del mismo tipo");
}

// Comprobamos si ambos son del mismo tipo (otra forma de hacerlo)
// //Comprueba si randomNumber es del mismo tipo que guessedNumber
if (randomNumber == guessedNumber && randomNumber !== guessedNumber) {
     console.log("hey, tienes que introducir datos del mismo tipo");
}


// Ejemplo de comprobación completo
if (randomNumber === guessedNumber) {
     console.log ("Has acertado el número");
} else if (randomNumber > guessedNumber) {
     console.log ("El número secreto es mayor");
} else {
     console.log ("El número secreto es menor");
} 

// Ternary Operator (Operador ternario) - Otra forma de hacer if else para operaciones lógicas
let variable = 12 < 10 ? "el primero es menor" : "el primero es mayor";
console.log(variable);
//ver ejemplo de esto en linea 150

console.clear();

///--- Switch ----
let option = 2;
switch (option) {
    case 1:
        // bloque de código para valor 1
        console.log("option vale 1");
        break;
    case 2:
        // bloque de código para valor 2
        console.log("option vale 2");
        break;
    case 3:
        // bloque de código para valor 3
        console.log("option vale 3");
        break;        
    default:  // de otro modo:
        console.log("otra option");
        break;
}

console.clear();

// ------Funciones Nombradas----
function greet(name, lastName) {
    return `Hola, ${name} ${lastName}, qué tal?`;    
}
console.log(greet("Eva", "Benítez"));


// Hacer función que devuelva el cuadradro de un nº
function cuadrado(num) {
    // let cuadrado = num * num;
    // return cuadrado;
    return num * num;
}
console.log(`El cuadrado del número es:`, cuadrado(3));

// Funciones Anonimas --- Le damos el nombre de la función a la variable.
// const saludar = function() { console.log("Hola"); };
let numbersArray = [51, 25, 33, 14];
console.log(numbersArray);
numbersArray.sort();  //ordena según ascii, no funciona para nº.
console.log(numbersArray);

// Creamos un sort con una función anonima que nos ordene los nº del array

function orderNumbers(a, b) {
    if (a < b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
    
}

//esta función hace igual a lo anterior.
// function orderNumbersV2(a, b) {
//     return a - b;
// }

// numbersArray.sort(orderNumbers);

// Otra opción para misma función, sería:
// Sort necesita siembre a y b.
numbersArray.sort (function (a, b) {return a - b});

console.log(numbersArray);

console.clear();

// Funciones de Flecha (Arrow) => (función anónima especial)
// Paso a paso de función normal a función arrow
let perimetrocuadrado = function (side) {
    return side * 4
};

perimetrocuadrado = function (side) {return side * 4;} //unica linea
perimetrocuadrado = (side) => {return side * 4;} // Sustituimos function por =>
perimetrocuadrado = (side) => side * 4; // Para solo devolver algo, quitamos llaves y return
perimetrocuadrado = side => side * 4; // quito () si solo tiene un parámetro

console.log(perimetrocuadrado(5));

// Transformar func anónima en func flecha.
numbersArray.sort(function (a, b) {return a - b});
numbersArray.sort((a, b) => b - a);

let perimetroV2 = number => number * number;
console.log(perimetroV2(5));

////-------Bucles-------/////

// Bucle For (conocemos inicio y final del bucle)
for (let i=0; i<=10; i++) {
    console.log((`Indice: ${i}`));    
}

//Definir y rellenar un array con el indice i

//Primero lo creamos vacío
const arrayX = [];
//Creamos un bucle y Añadimos elementos con push
for (let i=0; i<=10; i++) {
    arrayX.push(i);
}
console.log(arrayX);

//Bucle While (mientras que...(no conocemos nº de repeticiones))
let contador = 0;
while (contador <= 10) {
    console.log(contador);
    contador++;
};

//Bucle infinito (podemos finalizarlo con break)
while (true) {
    break;
}
console.log("No entra en bucle infinito");

// Bucle ForEach [pertenece a los array, listas, necesita una funcion]
// Primero el elemento (value), luego el índice (index).
console.log(numbersArray);

numbersArray.forEach(function (value, index) {
    console.log((`indice ${index}: ${value}`));    
});

//Mismo bucle forEach con función flecha
numbersArray.forEach((value, index) => console.log(`indice ${index}: ${value}`));

// Copiar un array ya existente a otro nuevo vacío
let otroarrayvacio = [];
numbersArray.forEach(item => otroarrayvacio.push(item));
console.log(otroarrayvacio);

//Bucle For...of (alternativa a foreach, para objetos iterables, arrays, string)
for (let item of "abcdefg") {
    console.log(item);
}

//Continue

for (let i = 0; i < 5; i++) {
    if (i === 3 || i === 2) {
        continue  //salta a la siguiente interacion (no quiero ver el 3 ni el 2)
    }
    console.log("Using continue", i);    
}

//Break (rompe o para el bucle) Podemos determinar qué bucle
// romper indicándole un nombre
let i = 0;
let k;
romperbucle: while (true) {
    console.log("bucle externo", i);
    i++;
    k = 1;
    while (true) {
        console.log("bucle interno", k);
        k++;
        if (i === 5 && k === 5) {
            break romperbucle;
        } else if (k === 5) {
            break;
        }  
    }
}






