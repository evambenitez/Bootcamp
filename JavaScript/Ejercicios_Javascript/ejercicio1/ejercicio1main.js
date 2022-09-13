// Apartado 1
// Creamos un div vacío en html. Con JS añadimos dos elementos párrafos con texto dentro.

const div1 = document.getElementById("div1");

let parrafo1 = document.createElement("p");
let parrafo2 = document.createElement("p2");
parrafo1.textContent = "Soy el texto del parrafo1";
parrafo2.textContent = "Soy el texto del parrafo2";
div1.append(parrafo1, parrafo2);

//Apartado 2 
// Creamos un botón en html, al darle click, cambiamos color de fondo al html
const button = document.querySelector("button");
button.addEventListener("click", function () {
    document.body.style.backgroundColor = "orange"; 
    document.body.classList.toggle("bg-orange");   
});

//Mismo resultado con función flecha
// button.addEventListener("click", () => document.body.style.backgroundColor = "orange");
   
// Apartado 3 
//Creamos en el html una lista con 3 urls (texto) de imágenes y una etiqueta img después
//Al hacer click en cada url, se visualizará en la etiqueta img la imagen a la que corresponda la url.

// const listItems = document.getElementsByTagName("li");
// const image = document.querySelector("img");

// const changeImage = (e) => image.src = e.target.textContent;

// listItems[0].addEventListener("click", changeImage);
// listItems[1].addEventListener("click", changeImage);
// listItems[2].addEventListener("click", changeImage);

// Apartado 3 - Otra opción más corta para hacer lo mismo
const list = document.querySelector("ul");
const image = document.querySelector("img");

const changeImage = e => image.src = e.target.textContent;

list.addEventListener("click", changeImage);

// Apartado 4
// Añadir un input tipo texto y un botón. Al pulsar el botón debe escribirse el texto del input
// en un párrafo.
const parrafo_ap4 = document.getElementById("parraforellenable");
const input_ap4 = document.querySelector("input");
const button_ap4 = document.querySelectorAll("button")[1];

button_ap4.addEventListener("click", () => {
    parrafo_ap4.textContent = input_ap4.value;

    // Y ponemos ese input vacio tras el click
    input_ap4.value = "";

});
//4.2 - Añadir un nuevo input pero esta vez cambiará el texto con cada pulsación de tecla del usuario.
const parrafo_ap4_2 = document.getElementById("parraforellenable2");
const input_ap4_2 = document.querySelectorAll("input")[1];

input_ap4_2.addEventListener("input", () => parrafo_ap4_2.textContent = input_ap4_2.value);

// Apartado 5
// De forma similar al anterior, pero para un texarea y validará si lo introducido es mayor 
// de 15 caracteres.
const textArea = document.querySelector("#textareavalidado");
textArea.addEventListener("input", e => {
    // if (e.target.value.length > 15) {
    //     e.target.style.color = "green";
    // } else {
    //     e.target.style.color = "blue";
    // }

    // Igual, pero con operador ternario
    e.target.style.color = e.target.value.length > 15 ? "green" : "blue";
});

// Apartado 6
//Anadir un input tipo texto con leyenda:"Escribir un nº par" (hecho en html). 
const eventInput = document.querySelector("#input_par");
    
//Añadir un boton que al pulsarlo nos validará si el nº es par o no.
// Si no lo es, cambiar los bordes del input a rojo.
eventInput.nextElementSibling.addEventListener("click", () => {
    if (eventInput.value % 2 !==0) {
        eventInput.style.border = "2px solid red";
    } else {
        eventInput.style.border = "";
    }
});

// Apartado 7
//Partiendo de una lista ul(creada en html), crear en JS, 10 li con un texto indicando el nº del elemento ("elemento X")
//Usa un bucle for.
const ul = document.getElementById("listToFill");

for (let i = 1; i <= 10; i++) {
    const newLi = document.createElement("li");
    newLi.textContent = `Elemento ${i}`;
    ul.appendChild(newLi);
};

//Apartado 8
//Crear un enlace y un botón (en html). Si pulso el enlace se me abre la URL en la misma página.
const newTagButton = document.getElementById("newTag");
const link = document.querySelector("a");

//Si pulso primero el botón y luego el enlace, se abrirá en una pestaña nueva.
newTagButton.addEventListener("click", () => link.target = " blank");

// Apartado 9
// Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo,
// verde y azul. Al seleccionar un color del select, cambiar el color del párrafo.
const ap9_Parrafo = document.querySelector("#colorParrafo");
document.querySelector("#colorsSelect").addEventListener("change", e => {
    ap9_Parrafo.style.color = e.target.value;

});

// Apartado 10
//Incluir un botón que al pulsarlo genere un nº aleatorio y mantenga en una lista actualizada 
// el nº de elementos q se han generado, los q son pares y los q son impares.
const currentRandom = document.getElementById("currentRandom");
const totalNumbers = document.getElementById("totalNumbers");
const oddNumbers = document.getElementById("oddNumbers");
const evenNumbers = document.getElementById("evenNumbers");

document.getElementById("randomButton").onclick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    currentRandom.textContent = randomNumber;

    totalNumbers.textContent++;

    randomNumber % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++;

};

//Apartado 11
// Construir una lista q tenga numeros. Añadir un input donde poder añadir números y un botón.
// Al pulsar el botón, si el nº ya existe, mostrará mensaje de error, si no existe, lo añadirá
// al principio.

const ulApt11 = document.getElementById("ulApt11");
const inputApt11 = document.getElementById("inputApt11");
const buttonApt11 = document.getElementById("buttonApt11");

let numbersList = [1, 15, 20, 55, 73];

function fillList() {
    ulApt11.innerHTML = "";
    for (let index = 0; index < numbersList.length; index++) {
        newLi = document.createElement(`li`);
        newLi.textContent = `${numbersList[index]}`;
        ulApt11.appendChild(newLi);

    }
    
}

function addToList() {
    let numberToJoin = Number(inputApt11.value);
    if (numbersList.indexOf(numberToJoin) === -1) {
        numbersList.push(numberToJoin);
        fillList();
    }else {
        window.alert(`Oppps! El número ya existe`);
    }
    
}

buttonApt11.addEventListener("click", addToList);


//Apartado 12
// Crearemos una clase .btn en CSS que le de ciertos stilos a un botón. Al hacer click en él
// haremos toggle o alternaremos esa clase, es decir, si está presente la quitaremos y si no
// está, la añadiremos.

document.querySelector("#toogle").onclick = (e) => e.target.classList.toggle("btn");

// Ejercicio 12 continuación...
// Refacctorizar el código para hacerlo con un único forEach
const buttons = document.getElementsByClassName("btn-orange"); // Devuelve HTMLCollection

// Ejemplo sin refactorizar (sin forEach)

// buttons[0].addEventListener("click", () => {
//     buttons[0].style.backgroundColor = "orange";
// });

// buttons[1].addEventListener("click", () => {
//     buttons[1].style.backgroundColor = "orange";
// });

// buttons[2].addEventListener("click", () => {
//     buttons[2].style.backgroundColor = "orange";
// });

// Ahora, refactorizamos con forEach

//Ejemplo 1

Array.from(buttons).forEach(button => {

     button.addEventListener("click", function (e) {
             e.target.style.backgroundColor = "orange";
    });
});

// Ejemplo 2
//Hay que cambiar el const buttons por let buttons y comentar lo anterior
buttons = document.querySelectorAll(".btn-orange"); //devuelve NodeList q tiene disponible forEach
buttons.forEach(button => {

    button.addEventListener("click", function (e){
        e.target.style.backgroundColor = "orange";
    });
});



