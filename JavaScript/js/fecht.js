
const URL = "https://jsonplaceholder.typicode.com/users";

// Creamos una función que nos imprime por consola nombres, ciudades y latitudes del array.

const printNames = array => array.forEach(user => console.log(user.name));
const printCities = array => array.forEach(user => console.log(user.address.city));
const printLats = array => array.forEach(user => console.log(user.address.geo.lat));

fetch(URL).then(r => r.json()).then(data => console.log(data));

fetch(URL)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay algún problema con la respuesta: " + response.statusText);    
        }
        return response.json();    
    })    
    .then(data => {
        printNames(data);
        printCities(data);
        printLats(data);

    })
    //para comprobar errores ponemos .catch tras el último ) del then
    .catch(error => console.log(error));   
    
// Async - await - Alternativa a then
async function requestURL(URL) {
    const response = await fecht(URL);
    const data = await response.json();
    console.log(data);
}
requestURL(URL);

// Petición con método POST en vez de Get
const POST_URL = "https://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "Mi título",
    body: "El texto de mi publicación"
};

const http = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost) 
};

fetch(POST_URL, http)
    .then(response => response.json())
    .then(data => console.log(data))
    

