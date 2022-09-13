// Apartado 1
// Crear una tabla que muestre un array de libros guardado en memoria. Requisitos:
// Usar estilos de Bootstrap 4. Se puede utilizar el CSS directamente desde el CDN.



// Apartado 2
// Crear un constructor de objeto Book con los siguientes atributos: ID, título, autor, ventas y precio
function Book(id, titulo, autor, ventas, precio) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.ventas = ventas;
    this.precio = precio;
};


// Apartado 3
// Rellenar un array con 10 libros
let books = [
    new Book(1, "El Trabajo", "Arturo Pérez Reverte", 100000, 15),
    new Book(2, "El Deber", "Carlos Pérez", 120000, 12),
    new Book(3, "La Constancia", "Arturo Reverte", 90000, 20),
    new Book(4, "El Sacrificio", "Isabel Allende", 70000, 25),
    new Book(5, "La Salud", "Manuel Anaya", 108000, 35),
    new Book(6, "El Amor", "Manuela Vargas", 200500, 10),
    new Book(7, "La familia", "Camilo José Cela", 200000, 28),
    new Book(8, "La Amistad", "Miguel de Cervantes", 12000, 55),
    new Book(9, "Mi Mascota", "Antonio Machado", 105000, 75),
    new Book(10, "Willi y Brandy", "Eva M Benítez", 70500, 5),
];
//Esto es del ejercicio 5
let displayedBooks = [...books];

//Apartado 4
// Para cada elemento del array, tendremos que crear una nueva fila en la tabla con 
// las columnas para todas las propiedades del objeto además de un botón que elimine el libro.
// Se aconseja crear una función para actualizar la tabla (o el tbody) desde cero.

// Selectores
const booksTbody = document.getElementById("books-body");
const tituloInput = document.getElementById("tituloInput");
const autorInput = document.getElementById("autorInput");
const ventasInput = document.getElementById("ventasInput");
const precioInput = document.getElementById("precioInput");
const addBookButton = document.getElementById("addBookButton");
const tfoot = document.querySelector("tfoot");

function updateTable() {
    //para vaciar el tbody por completo
    booksTbody.innerHTML = "";

    // Generamos de nuevo todas las filas
    displayedBooks.forEach(book => {
        booksTbody.innerHTML += `
        <tr>
            <td>${book.id}</td>
            <td>${book.titulo}</td>
            <td>${book.autor}</td>
            <td>${book.ventas}</td>
            <td>${book.precio}</td>
            <td>
                <button class="btn btn-danger" id="${book.id}">Eliminar</button> 
            </td>
        </tr>`;       
    });

    const precioTotal = displayedBooks.reduce((precioSuma, book) => precioSuma + book.precio, 0);
    tfoot.textContent = `Precio total ${precioTotal}`;
};

//Apartado 5
// Si pulsamos el botón eliminar, borrará el libro del array y la actualizará.

booksTbody.onclick = e => {
    if(e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id);
        displayedBooks = displayedBooks.filter(book => book.id != e.target.id); // del ejercicio 5
        updateTable();
    };
};

updateTable();

// Apartado 6
// Añadir un pequeño formulario después de la tabla para añadir un nuevo libro al array.
//Esto lo hacemos en el html con un formulario copiado de bootstrap4 que tuneamos.
// Tras hacer submit, además de añadirlo, debe actualizar la tabla y vaciar los inputs.
// En los selectores de más arriba, creamos los inputs.

addBookButton.addEventListener("click", e => {
   e.preventDefault();
   
   const newID = books[books.length-1].id + 1;
   const newBook = new Book(
       newID, 
       tituloInput.value, 
       autorInput.value, 
       ventasInput.value,
       Number(precioInput.value));

    books.push(newBook);
    displayedBooks.push(newBook);
    
   
    updateTable();

    //opción 1 Para dejar los inputs vacios.

    // tituloInput.value = "";
    // autorInput.value = ""; 
    // ventasInput.value = ""; 
    // precioInput.value = "";

    // Opción 2

    addBookButton.parentNode.reset();
}); 

// Ejercicio 5
// Añadir un input de búsqueda. Cada vez que cambie el input, se actualizará la tabla para
// que aparezcan solo los libros cuyos títulos hayamos indicado.

const searchInput = document.querySelector("#searchInput");
searchInput.addEventListener("input", e => {
    // Versión 1, tiene en cuenta mayúsculas (case sensitive)
    displayedBooks = books.filter(book => book.titulo.includes(e.target.value));

    //Para filtrar por otro campo, incluiríamos en la condición lo siguiente
    //  || book.autor.includes(e.target.value)

     // Versión 2, no tiene en cuenta mayúsculas
     displayedBooks = books.filter(book => {
        return book.titulo.toUpperCase().includes(e.target.value.toUpperCase());
    });

    updateTable();
});

//Añadiremos un botón para ordenar la tabla por precio de forma creciente/decreciente (toogle).
const precioHeader = document.querySelector("#precioHeader");
let ascendingOrder = true;

precioHeader.style.cursor = "pointer";
precioHeader.addEventListener("click", e => {
    ascendingOrder = !ascendingOrder;

    document.querySelector("span").innerHTML = ascendingOrder ? "&uarr;" : "&darr;";

    displayedBooks.sort((book1, book2) => {
       return ascendingOrder
        ? book1.precio - book2.precio
        : book2.precio - book1.precio;
    });

    updateTable();
});

//Añadiremos una última fila en tfoot, separada del resto, que nos sume los precios de los 
// libros que están presentes en la tabla en ese momento. (Hecho más arriba, dentro de la función).



