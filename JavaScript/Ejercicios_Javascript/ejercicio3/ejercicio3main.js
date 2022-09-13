// Apartado 1
// Generar un array de 100 objetos que tengan las siguientes propiedades:
// cargo: construido con un string plantilla (${})cuyos valores sean Empleado1, Empleado2, etc
// Rendimiento: un nº aleatorio con 2 decimales entre 0 y 1
// Salario: un nº aleatorio entre 1250 y 4000 "Creamos funcion opcional para hacer esto"

function randomBetweenRange(start, end) {
    return Math.floor(Math.random() * (end - start) + start);    
}

let empleados = [];
for (let i = 1; i <= 100; i++) {
    empleados.push({
        cargo: `Empleado ${i}`,
        rendimiento: Number(Math.random().toFixed(2)),
        salario: randomBetweenRange(1250, 4000)
    });
    
};
console.log("1. Generación del array", empleados);

// Apartado 2
// Ordenar el array por rendimiento e imprimirlo. Usar función anónima como callback.

empleados.sort(function(empleado1, empleado2) {
   return empleado1.rendimiento - empleado2.rendimiento    
});
console.log("2. Ordenar por rendimiento:", empleados);

//Apartado 3
// Ordenar el array por salario e imprimirlo. Usar función de flecha

empleados.sort((empleado1, empleado2) => empleado1.salario - empleado2.salario);    
 console.log("3. Ordenar por salario:", empleados);

//Apartado 4
// Ordenar el array por el nº de empleado de forma decreciente. El nº de empleado sólo
// estará dentro del string Cargo. Usar función nombrada como callback

function sortNumeroEmpleados(empleado1, empleado2) {
    return empleado2.cargo.split(" ")[1] - empleado1.cargo.split(" ")[1];
    
}
empleados.sort(sortNumeroEmpleados);
console.log("4. Ordenar por número de empleados decreciente", empleados);

// Apartado 5
// Usando filter: Imprimir el cargo y el salario de los q cobren más de 2500€

empleados
.filter(empleados => empleados.salario > 2500)
.forEach(empleados => console.log("5. Cobran más de 2500:" ,empleados.cargo, empleados.salario));

//Apartado 6
// Usando map: subir el sueldo un 25% a los q cobren menos de 1500€.

empleados = empleados.map(empleado => {
    if (empleado.salario < 1500) {
       empleado.salario = empleado.salario * 1.25   
    }
    return empleado;
});

console.log("6. Subida del 25% del sueldo:", empleados);

// Apartado 7
// Usando reduce: obtener el coste total de todos los sueldos para la empresa
// teniendo en cuenta que a la empresa le cuesta tener un empleados su sueldo 
// más un 15% por impuestos.

const costeTotal = empleados.reduce((salarioAcumulado, empleado) => salarioAcumulado + empleado.salario * 1.15, 0);
     
console.log("7. Coste total para la empresa:", costeTotal);

// Apartado 8
// Usar los metodos reduce, map, filter y sort q determinemos oportunos e 
// imprimir en cada apartado:

// 8.1 Despedir a los q tengan un rendimiento menor a 0.3

empleados = empleados.filter(empleado => empleado.rendimiento >= 0.3);
console.log("8.1 Despedidos rendimiento < 0.3", empleados);

// 8.2 Calcular el sueldo medio de la empresa

const salarioMedio = empleados.reduce((salarioAcumulado, empleado) => salarioAcumulado + empleado.salario, 0) / empleados.length;
console.log("8.2 El sueldo medio de la empresa es:", salarioMedio);

// 8.3 Subir el sueldo de los q tengan un rendimiento superior a 0.7 con map
empleados = empleados.map(empleado => {
    if (empleado.rendimiento > 0.7) {
       empleado.salario = empleado.salario * 1.25;   
    }
    return empleado;
});
console.log("8.3. Subida del sueldo a los q rinden más del 0.7:", empleados);

// 8.3 Subir el sueldo de los q tengan un rendimiento superior a 0.7 con forEach

empleados.forEach(empleado => {
    if (empleado.rendimiento > 0.7) {
        empleado.salario = empleado.salario * 1.25;
        console.log("Subido el sueldo de", empleado.cargo);
    }
})
console.log("8.3. Subida del sueldo a los q rinden más del 0.7:", empleados);