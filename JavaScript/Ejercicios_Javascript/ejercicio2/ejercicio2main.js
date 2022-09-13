//Usuarios y cesta de la compra
// Crear un array de usuarios con las siguientes propiedades (nombre, primer apellido, segundo
//apellido, email, edad, ciudad, nº de articulos en carrito de compra). Crear con bucle for...in
// para obtener el nombre y los valores (pares de key y values).
//función que incremente nº de artículos en carrito
//función que vacía el carrito
//Añadimos dos botones fuera de la lista, uno incrementa de uno en uno los artículos del carrito
// y el otro los vacía. 


//Constructor
function User(name, firstLastName, secondLastName, email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount; 
    this.incrementProducts = function () {
        this.productsCount++;  
    };

    this.emptyProducts = function() {
        this.productsCount = 0;   
    };   
};

// Datos
const users = [
    new User("Eva", "Benítez", "Rodríguez", "eva101079@gmail.com", 42, "Málaga", 0),
    new User("Manuel", "Anaya", "Tirado", "manu@gmail.com", 53, "Ronda", 2),
    new User("Peluso", "Willi", "Brandy", "lupe@gmail.com", 7, "Alhaurín el Grande", 5),

];

// Selectores
const select = document.querySelector("#userSelect");
const list = document.querySelector("#userInfo");
const incrementButton = document.querySelector("#incrementButton");
const emptyButton = document.querySelector("#emptyButton");


for (let user of users){
   const newOption = document.createElement("option");
   newOption.textContent = user.name;
   select.appendChild(newOption);
}

// igual a for, pero con forEach

// users.forEach(user => {
//    const newOption = document.createElement("option");
//    newOption.textContent = user.name;
//    select.appendChild(newOption);
// });


//key es igual a propertyName

//Rellenar la lista con la info de un usuario

function fillList(user) {

    list.innerHTML = "";

    for (const propertyName in user) {
        const value = user[propertyName];

        if (typeof value !== "function") {
            const newListItem = document.createElement("li");
            newListItem.textContent = `${propertyName}: ${value}`;
            newListItem.classList.add("list-group-item");
            list.appendChild(newListItem);
        };
     };
    
};

function processProducts(e) {
    const selectedUser = users.find(user => user.name === select.value);
    if (e.target.id === "incrementButton") {
        selectedUser.incrementProducts();
    } else {
        selectedUser.emptyProducts();
    };  
    fillList(selectedUser); 
};

//Añadir listeners
select.addEventListener("change", e => {
    const selectedUser = users.find(user => user.name === select.value);
    fillList(selectedUser);
   
});

fillList(users[0]); //para mostrar por defecto la tabla de datos del primer usuario.

//Incrementar o vaciar artículos del carrito

incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);

