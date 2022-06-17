// -------Uso de JS externo--------
function saludo () {
    alert("Hola desde un script externo");
    console.log ("has hecho click");
}
document.getElementsByTagName("a").item(2).addEventListener("click", saludo);

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
    }  
}

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
console.log({name:"Eustaquio", age: 60});

// Entre ({objetos})
// Entre ([Arrays])
// Entre ("String")
// Todos siempre entre paréntesis.


//----This (referenciar al objeto que tenga el this dentro)------
//Ejemplo:

const person2 = {
    name: "Manuel",
    age: 53,
    talk() {
        console.log(this);
    }
}



