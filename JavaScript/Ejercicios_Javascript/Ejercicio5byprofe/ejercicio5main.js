class Libro {
    constructor(id, titulo, autor, ventas, precio) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.ventas = ventas;
        this.precio = precio;
    };
};

class Table {
    constructor(element, dataArray) {
        this.element = element;
        this.dataArray = dataArray;
        //Hacemos una copia del array para poder modificarlo sin afectar al original
        this.displayedArray = dataArray;
        this.ascendingOrder = false;
        this.update();
    };

    createRow(object) {
        const cells = Object.values(object);
    
        const newRow = document.createElement("tr");
        for (const cell of cells) {
            const newCell = document.createElement("td");
            newCell.textContent = cell;
            newRow.appendChild(newCell);
        };
    
        this.element.appendChild(newRow);
    };
    
    update () {
        this.element.innerHTML = "";
    
        this.displayedArray.forEach(libro => this.createRow(libro));
    
        const precioTotal = this.displayedArray.reduce((p, c) => + c.precio, 0); // previous (p), current (c)
    
        this.element.nextElementSibling.textContent = `Precio total: ${precioTotal}`;
            
    };
    
    filter (searchText) {
        //Opción1: case sensitive (coincidencia exacta de minúscula y mayúscula)
        this.displayedArray = this.dataArray.filter(item => item.titulo.includes(searchText));
    
        //Opcion2: que no sea case sensitive (deberemos comparar todo en min y en may.)
        this.displayedArray = this.dataArray.filter(item => {
            return item.titulo.toUpperCase().includes(searchText.toUpperCase()); // includes devuelve boolean
        });
    
        //En cualquier caso, actualizaremos la tabla
        this.update();
    };
    
    sortByPrecio() {
        this.displayedArray.sort((a, b) => {
            return this.ascendingOrder ? a.precio - b.precio : b.precio - a.precio;
        });
        this.update();
    };

};

const libros = [
    new Libro(1, "El Trabajo", "Arturo Pérez Reverte", 100000, 15),
    new Libro(2, "El Deber", "Carlos Pérez", 120000, 12),
    new Libro(3, "La Constancia", "Arturo Reverte", 90000, 20),
    new Libro(4, "El Sacrificio", "Isabel Allende", 70000, 25),
    new Libro(5, "La Salud", "Manuel Anaya", 108000, 35),
    new Libro(6, "El Amor", "Manuela Vargas", 200500, 10),
    new Libro(7, "La familia", "Camilo José Cela", 200000, 28),
    new Libro(8, "La Amistad", "Miguel de Cervantes", 12000, 55),
    new Libro(9, "Mi Mascota", "Antonio Machado", 105000, 75),
    new Libro(10, "Willi y Brandy", "Eva M Benítez", 70500, 5),
];

const table = new Table(document.querySelector("tbody"), libros);
document.querySelector("#searchInput").addEventListener("input", e => table.filter(e.target.value));
const precioHeader = document.querySelector("thead th:last-child");

precioHeader.style.cursor = "pointer";
precioHeader.addEventListener("click", () => {
    table.ascendingOrder = !table.ascendingOrder;
    //Usamos los HTML Symbols para alternar una flecha hacia arriba / abajo
    precioHeader.querySelector("span").innerHTML = table.ascendingOrder ? "&uarr;" : "&darr;"
    table.sortByPrecio();
});