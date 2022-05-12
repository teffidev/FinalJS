/*(*)Deberas mostrar por consola antes y despues de la función o método que uses.*/

/*Ejercicio 1:
1. Revisa el siguiente archivo, identifica sus componentes, 
vamos a estar usándolos a lo largo de este ejercicio.  

---- a. ¿Qué tipo de dato contiene la variable ‘alumnos’?
R= El tipo de dato que contiene la variable es un Array con objetos 
literales, y dentro de los objetos literales encontramos datos de 
strings y datos numericos.

--- b. ¿Qué propiedades tiene la estructura definida en 
el archivo final.js?
R= Las propiedades que tiene la estructura definida "alumnos" son; 
ID’s, nombres, apellidos, legajos y notas.


2. Crear una función que ordene la estructura definida en el archivo 
"final.js" según la propiedad legajo de forma ascendente. (*)*/

const alumnos = [
    {
        id: 0,
        nombre: "Leandro",
        apellido: "Borrelli",
        legajo: 20210308,
        notas: [],
    },
    {
        id: 1,
        nombre: "Esteban",
        apellido: "Piazza",
        legajo: 20210211,
        notas: [],
    },
    {
        id: 2,
        nombre: "Martin",
        apellido: "Cejas",
        legajo: 20210218,
        notas: [],
    },
    {
        id: 3,
        nombre: "Karina",
        apellido: "Borgna",
        legajo: 20210516,
        notas: [],
    },
    {
        id: 5,
        nombre: "Javier",
        apellido: "Riera",
        legajo: 20220125,
        notas: [],
    },
];

let ordenarLegajoAsc = (array) => {
    let aux;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j].legajo > array[j + 1].legajo) {
                aux = array[j]
                array[j] = array[j + 1]
                array[j + 1] = aux
            }
        }        
    }
};
console.log('---Respuesta de ejericio 1 - punto 2:----');
console.log('-------Estructura definida antes de ordenarla por legajo:-------');
console.log(alumnos);
ordenarLegajoAsc(alumnos)
console.log('-------Estructura ordenada por legajo:-------');
console.log(alumnos);


/*Ejercicio 2:
Dado el objeto*/

/*---- a. Crear un método que retorne el promedio de notas.(*)*/

let alumno = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10,9,8,7,9]
};
console.log('---Respuesta ejercicio 2 - punto a:----');
console.log('---Dado el Objeto "alumno":---');
console.log(alumno);

/* ----Se crea una Variable para guardar la función 
del metodo que voy a crear:---*/

let calcularPromedio = function(){
    let calculo = 0
    for(let i = 0; i < this.notas.length; i++){
        calculo += this.notas[i]
    }
    return calculo / this.notas.length
};


// ----- Se crea metodo dentro del objeto=
alumno.promedioNotas = calcularPromedio

console.log('----Se crea un metodo dentro del objeto llamado promedioNotas y se le da el valor de la variable con la función realizada:-----');
console.log(alumno);

// ---- Se imprime por consola el resultado del promedio
console.log('---Se muestra el promedio con la función creada dentro de la variable calcularPromedio:---');
console.log(`--- El promedio de ${alumno.nombre} ${alumno.apellido} es: ${alumno.promedioNotas()}---`);
console.log('-------------------');


/*---- b. Crear una función que ordene las notas del alumno 
de forma descendente. (*)*/

let alumno1 = {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [10,9,8,7,9]
};
console.log('---Respuesta ejercicio 2 - punto b:----');
console.log('---Dado el Objeto "alumno1":---');
console.log(alumno1);

let ordenarNotasDesc = (array) => {
    let aux;
    for(let i = 0; i < array.notas.length; i++){
        for(let j = 0; j < array.notas.length - 1; j++){
            if(array.notas[j] < array.notas[j + 1]){
                aux = array.notas[j]
                array.notas[j] = array.notas[j + 1]
                array.notas[j + 1] = aux
            }
        }
    }
};
console.log('-----Se ordenan las notas de forma descendente del alumno1:-----');
ordenarNotasDesc(alumno1)
console.log(alumno1);


/*Ejercicio 3:

/*---- a. Crea una matriz de 3x3, cuadrada, con números enteros 
positivos en cada una de sus posiciones.*/

let matriz = [
    [20, 24, 13],
    [14, 21, 43],
    [47, 17, 38]
];
console.log('----Respuesta ejercicio 3 - punto a:----');
console.log('-------Matriz de 3 x 3:---------');
console.table(matriz);


/*---- b. Crear una función que retorne la suma de todos
los números dentro de la matriz que sean múltiplos de 3.*/

let sumaDeTres = (array) => {
    let resMultiplosTres = 0
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            if(array[i][j] % 3 === 0){            
                resMultiplosTres += array[i][j]
            } 
        }
    }
    return resMultiplosTres
};
console.log('----Respuesta ejercicio 3 - punto b:----');
console.log('---Suma de los numeros dentro de la matriz que son multiplos de 3:---');
sumaDeTres(matriz)
console.log(sumaDeTres(matriz));


/*---- c. Crear una función que retorne un valor booleano 
dependiendo si la suma de todos los valores de la matriz es par.*/

let sumaPares = (array) => {
    let suma = 0
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].length; j++){
            suma += array[i][j]
        }
    }
    return suma % 2 === 0 ? true : false
    
};
console.log('----Respuesta ejercicio 3 - punto c:----');
console.log('---¿La suma de todos los valores de la matriz es Par?:---');
sumaPares(matriz)
console.log(sumaPares(matriz));


/*---- d. Crear una función que retorne la suma de las 
diagonales de la matriz.*/

let sumaDiagonales = (array) => {
    let sumaDiagoPpal = 0;
    let sumaDiagoSecun = 0;
    for (let i = 0; i < array.length; i++) {
        sumaDiagoPpal += array[i][i];
        sumaDiagoSecun += array[i][array.length - (1 + i)];
    }
    return `La suma de las diagonales de la matriz es: ${sumaDiagoPpal + sumaDiagoSecun}`;
};
console.log('----Respuesta ejercicio 3 - punto d:----');
console.log('--Sumando las Diagonales de una matriz dada:--');
sumaDiagonales(matriz)
console.log(sumaDiagonales(matriz));