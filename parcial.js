//-----------Ejercicio 1----------------

let estudiante = {
    nombre: 'Estefania',
    apellido: 'Bermudez',
    camada: 6,
    esParcial: true
}
console.log('----Solución--Ejercicio 1-');
console.log(estudiante);

//Segunda parte ---Ejercicio 1---------

let laFuturaNota = (numero) => {
    let situacion = ''
    if(numero < 4){
        situacion = 'desaprobado'
    }else if(numero >= 4 && numero < 7){
        situacion = 'debe rendir examen final'
    }else if(numero >= 7){
        situacion = 'promocionado'
    }
    return `El alumno obtuvo una nota igual a ${numero} por lo tanto su condición es: ${situacion}`
}
laFuturaNota()
console.log('----Segunda Parte--Ejercicio 1---');
console.log(laFuturaNota(7));

//---------------Ejercicio 2---------------

let clase = [
    {
        nombre: 'Hana',
        apellido: 'Niño',
        bimestre: 2
    },
    {
        nombre: 'Sara',
        apellido: 'Palacio',
        bimestre: 2
    },
    {
        nombre: 'Martin',
        apellido: 'Paliza',
        bimestre: 2
    }
]
console.log('----Solución--Ejercicio 2----');
console.log('-----Antes------');
console.log(clase);

let siguienteCursada = (arrayClase) => {
    for(let i = 0; i < arrayClase.length; i++){
        arrayClase[i].bimestre += 1
    }
    return arrayClase
}
siguienteCursada(clase)
console.log('----Solución--Ejercicio 2-----');
console.log('-----Después------');
console.log(siguienteCursada(clase));


//-------------Ejercicio 3----------------

const asistenciaMinima = 23;

let asistencia = (cantidadAsistencias) => {
    if (cantidadAsistencias >= asistenciaMinima) {
        return 'Aprobado'
        
    } else {
        return 'Desaprobado'
    }
}
console.log('----Solución--Ejercicio 3----');
console.log(asistencia(25));
