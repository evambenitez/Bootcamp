// Importar API de comentarios para el uso del array de comentarios
// Selecionar solo los 20 primeros

//Constantes
const URL = "https://jsonplaceholder.typicode.com/comments";

//Variables
let posts = [];
let currentPage = 1;


//Selectores
const ul = document.getElementById("ul");


// Función
function fillList(array) {

    ul.innerHTML = "";

    array.slice(0, 20).forEach(element => {
        ul.innerHTML += `<li>${element.name}</li>`;

    });
    
}

fetch(URL)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.statusText);    
        }
        return response.json();    
    })    
    .then(data => {
        fillList(data);

    })
    .catch(error => console.log(error));

//6.1 Post - Paginación del lado del cliente

// Constantes
const POST_URL = "https://jsonplaceholder.typicode.com/posts";
const PAGE_SIZE = 20;

// Selectores
const postsDiv = document.querySelector("#posts");
document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));

// Funciones
function fillDiv() {
    const newPagePost = paginate(posts, PAGE_SIZE, currentPage);
    postsDiv.innerHTML ="";
    newPagePost.forEach(post => postsDiv.innerHTML += `<h3>${post.id} ${post.title}</h3><p>${post.body}</p>`)    
}

function changePage(event) {
    if(event.target.className === "previousPage" && currentPage > 1) {
        currentPage --;
    }else if(event.target.className === "nextPage" && currentPage < posts.length / PAGE_SIZE){
        currentPage ++;
    }
    fillDiv();    
}

function paginate(array, page_size, page_number) {
     //https://stackoverflow.com/questions/42761068/paginate-javascript-array   
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}
      
fetch(POST_URL)
.then(response => response.json())
.then(data => {
    posts = [...data];
    fillDiv();
});

// 6.2 -- Hacer un login de petición POST (login y paginación desde el servidor)

// Constantes
const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

// Selectores
const emailInput = document.querySelectorAll("input")[0];
const passwordInpunt = document.querySelectorAll("input")[1];
const usersList = document.querySelector("#usersList");
document.querySelector("#loginButton").addEventListener("click", login);

function login(event) {
    event.preventDefault();
    
    const userInfo = {
        email: emailInput.value,
        password: passwordInpunt.value
    };

  const config = {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userInfo)
  };

  fetch(LOGIN_URL, config)
  .then(response => response.json())
  .then(data => data.error ? alert(data.error):fetchAllUsers())
                    
}
 
async function fetchAllUsers() {
    // fetch(USERS_URL)
    // .then(response => response.json())
    // .then(data => console.log(data))
    
    let response = await fetch(USERS_URL);
    let data = await response.json();
    
    let users = [];

    for (let page = 1; page <= data.total_pages; page++) {
        response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data);  
        // users = [...users, ...newData.data];
    }
    usersList.innerHTML = "";
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);
}

// Alternativa para recuperar todas las páginas de una API utilizando .then
// con una función recursiva.

/* Comentario 

let users = [];

function fetchAllUsersV2(URL) {
    fetch(URL)
    .then(response => response.json())
    .then(newData => {
        users = users.concat(newData.data);

        if(newData.page < newData.total_pages) {
            fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`);
        } else {
            usersList.innerHTML = "";
            users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`);    
        }
    });
    
}
Comentario */



