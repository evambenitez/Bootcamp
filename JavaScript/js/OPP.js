console.clear();

// Antes de ES6
function Coche(marca, modelo, año) {
    this.marca = marca,
    this.modelo = modelo,
    this.año = año;
    this.getAge = function () {
        let age = new Date().getFullYear() - this.año;
        console.log(`Este ${this.marca} ${this.modelo} tiene ${age} años`);
    }
}
let miCoche = new Coche("Ford", "Mustang", 1990);
let miCoche2 = new Coche("Audi", "Q7", 2015);

miCoche.getAge();

console.log(miCoche, miCoche2);

Coche.getHp = function () { //No actualiza las instancias
    
}

miCoche.getHp = function () { // Solo modifica la instancia miCoche
    console.log("Este coche tiene 300 cv");
    
}

Coche.prototype.getHp = function () {
    console.log(`Este coche tiene 400 cv`);
    
}

miCoche.getHp();
miCoche2.getHp();

function SUV(marca, modelo, año, alto, ancho) {
    Coche.call(this, marca, modelo, año);
    this.alto = alto;
    this.ancho = ancho;
    
}
let mySUV = new SUV("Mercedes", "E7", 2021, 2200, 2000);
mySUV.getAge();

console.clear();

// ---------------------------------------------------------
// Después de ES6, En la actualidad

class Libro {
    constructor(titulo, autor, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
    }

    getSummary() {
        console.log(`${this.titulo} fue escrito por ${this.autor} en ${this.año}`);
    }

    getType() {
        console.log(`Yo soy un libro normal.`);

    }
}

const libro1 = new Libro("Metamorfhosis", "Franz Kafka", 1915);
console.log(libro1);
libro1.getType();
libro1.getSummary();

// Subclases - Herencia
class Revista extends Libro{

    constructor(titulo, autor, año, mes){
        super(titulo, autor, año);
        this.mes = mes;

    }

    getType() {
        super.getType();
        console.log("Soy una revista");
    }
}

// Creamos una nueva revista (instanciamos)
const revista1 = new Revista("Super Pop", "Algún loco", 2015);
revista1.getSummary();

revista1.getType();
libro1.getType();

// Otro ejemplo de polimorfismo
class Animal {
    constructor (tipo, nombre, sonido) {
        this.tipo = tipo;
        this.nombre = nombre;
        this.sonido = sonido;
    }
    tipoSonido() {
        console.log(`Este ${this.tipo} llamado ${this.nombre} dice ${this.sonido}`);
    }

    static compararAnimales(animal1, animal2) {
        return animal1.tipo === animal2.tipo;
    }
}

class Felino extends Animal {
    constructor(tipo, nombre) {
        super(tipo, nombre, "miau")
    }
    arañaMuebles(){

    }
}

class Gato extends Felino {
    constructor(nombre) {
        super("gato", nombre);
    }

}

class Pantera extends Felino {
    constructor(nombre) {
        super("pantera", nombre);
    }

}

class Perro extends Animal {
    constructor(nombre) {
        super("perro", nombre, "guau");
    }
    
}

const peluso = new Gato("Peluso");
const willi = new Perro("Willi");
const brandy = new Perro("Brandy");

console.clear();

peluso.tipoSonido();
willi.tipoSonido();
brandy.tipoSonido();

console.log(Animal.compararAnimales(willi,brandy));;


