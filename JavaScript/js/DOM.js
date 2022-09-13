//------DOM-----
//----Basics
console.log(document);
console.log(document.domain);
console.log(document.URL);
document.title += "_DOM";

// Selectors - Selectores

//Por etiqueta
const familia = document.getElementsByTagName("div");
console.log(familia);
//Por ID
const abuelo = document.getElementById("abuelo");
console.log(abuelo);
// Por Clase
const padre = document.getElementsByClassName("padre");
console.log(padre);

const hijo = document.getElementsByClassName("hijo");
console.log(hijo);

console.log(hijo[3]);

// Universal - Puedo seleccionar lo que quiera (es inmediato).
// let element = document.querySelector("div#abuelo>.padre>div.hijo#hijo4");

let element = document.querySelector(".abuelo div");
console.log(element);

//Cambiar color de fondo a padre1
// padre1.style.backgroundColor = "blue";

//Cambiar color de fondo mediante función de flecha
const cambiarColorfondo = (element, color) => element.style.backgroundColor = color;
cambiarColorfondo(hijo[0], "gray");
cambiarColorfondo(padre1, "green");
cambiarColorfondo(padre2, "pink");
cambiarColorfondo(padre2.children[1], "red");
//desde cualquier hijo, cambio color fondo al abuelo.
cambiarColorfondo(hijo[0].parentNode.parentNode, "white");

//Propiedades del DOM
// innerHTML accede a todo el interior del elemento que seleccionamos.
hijo[0].innerHTML ="Hijo 1 v2"; //modificamos al hijo 1

// textContent ignora la etiqueta y modifica solo el texto.
hijo[0].textContent = "Hijo1";

// con classList podemos anadir nuevas clases al elemento.
padre1.classList.add ("bg-violet");

// con classList.toggle alternamos clase (si no la tiene la añade y si la tiene, la quita)
padre1.classList.toggle("bg-dark");

// Modificar atributos , Modificar ID, name, class. Si existe lo modifica, si no, lo crea.
padre1.setAttribute("name", "nombre-del-padre1");

// Crear un elemento 
let nuevoDiv = document.createElement("div");
nuevoDiv.id = "nuevo-Div";
nuevoDiv.classList.add("hijo");
nuevoDiv.textContent = "nuevoDiv-hijo3";

padre1.appendChild(nuevoDiv);

//Clonar elemento -
let otroDiv = nuevoDiv;

otroDiv = nuevoDiv.cloneNode(true);
padre2.appendChild(otroDiv);
otroDiv.textContent = "otroDiv-hijo3";

//Eliminar elemento
// document.removeChild(elemento);
nuevoDiv.remove(); //Eliminamos nuevoDiv

let otroDiv2 = nuevoDiv.cloneNode();
padre2.before(otroDiv2);
otroDiv2.textContent = "nuevoDiv-before";
padre2.before(nuevoDiv.cloneNode());

let otroDiv3 = nuevoDiv.cloneNode();
padre2.after(otroDiv2);
otroDiv3.textContent = "nuevoDiv-after";
padre2.after(nuevoDiv.cloneNode());



//Ejercicio: Crear función q devuelve un elemento nuevo y que recibe etiqueta e id
function createNode(label, id) {
    let newNode = document.createElement(label);
    newNode.id = id;
    
    return newNode;
}

let newDiv = createNode("div", "identificador1");
let link = createNode("a", "mainLink");

link.textContent = "texto del Enlace";
link.setAttribute("href", "https://google.com");

abuelo.appendChild(link);

// Eventos - Events

const colorButton = document.getElementsByTagName("button")[0];
colorButton.addEventListener("click", function (event) {
document.body.classList.toggle("bg-violet");

// vemos por consola coordenadas del ratón.
console.log(`X: ${event.clientX} | Y: ${event.clientY}`);  
});

// Creamos un input en html y creamos la función de cambiar color de fondo entrando y saliendo del input
const emailInput = document.getElementById("emailInput");
emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);

function inputListener(e) {
    console.log("Tipo de evento", e.type);

    if (e.type === "focus") {
        emailInput.classList.add("bg-red");

    }else if (e.type === "blur") {
        emailInput.classList.remove("bg-red");
    }
    
}

// Cambiamos el titulo h1 Eventos por lo que escribamos dentro del input.
const cambiarTitulo = e => {
    document.querySelectorAll("h1")[1].textContent = emailInput.value; //value es importante!!!
}

emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", cambiarTitulo);

// Vemos por consola cuando entramos y salimos del div container con el ratón
const container = document.getElementById("container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);

//Cambiamos h1 Coordenadas del ratón por las coordenas del ratón

function coordenadas(e) {
    document.querySelectorAll("h1")[2].textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
}
document.body.addEventListener("mousemove", coordenadas);

// Funciones - Aspectos Avanzados

// Array.prototype.map

let arr1 = [1,2,3];
let arr2 = arr1.map(item => item * 2);
console.log(`Resultado con map:`, arr1);
console.log(`Resultado con map:`, arr2);

//convierto impares a pares utilizando ternari y map.

arr2 = arr1.map(num => num % 2 === 0 ? num : num + 1);
console.log(`Resultado con map:`, arr1, arr2);

// A partir de un array con años de nacimiento, calcular edades

const birthyears = [1953, 1968, 1974, 1971, 1979, 1999];
const ages = birthyears.map(year => 2022 - year);
console.log(ages);

// Array.prototype.filter - Necesita verdadero o falso.

//Tenemos un array de precios y queremos guardar en otro array los mayores de 50€

precios = [150, 50, 49, 51, 15, 237];
mayoresDe50 = precios.filter (item => item > 50);
console.log(mayoresDe50);

// Creamos un array de coches, cada uno con marca, año y matrícula

const cars = [
    {
        brand: "Volswagen", 
        year: 2000,
        plateNumber:"MLG3232"
    },
    {
        brand: "Peugeot", 
        year: 1998,
        plateNumber:"MLG5698"
    },
    {
        brand: "Renault", 
        year: 1953,
        plateNumber:"MLG1968"
    },
];

//Imprimimos los coches mayores al año 2008
console.log(cars.filter(car => car.year > 2008));

// imprimimos un array con las marcas de cada coche.
console.log(cars.map(car => car.brand));

// Array.prototype.sort (solo para arrays numéricos) Necesita positivo, negativo o cero.

const arr1 = [10, 7, 13, 20];

arr1.sort ((num1, num2) => num1 - num2);
console.log(arr1);

//Imprimimos array de coches por orden de fechas
console.log(cars); // vemos estado inicial
cars.sort((car1, car2) => car1.year - car2.year);
console.log(cars);  // estado final


// Array.prototype.reduce (acumular datos de un array)(podemos sumarle algo si queremos)

const arr1 = [10, 7, 13, 20];
let suma = arr1.reduce((suma, item) => suma + item, 50);  // el 50 es opcional, por defecto es 0.
console.log(suma);





