// Operadores

const arreglo = ['A', 'b', 'C'];

const respuesta = arreglo.forEach(
    (valorActualDeLaIteracion, indice, arreglo) => {
        console.log('Valor: ', valorActualDeLaIteracion);
        console.log('Indice: ', indice);
        console.log('Arreglo: ', arreglo);
    }
);

console.log(respuesta);

arreglo.forEach(v => console.log(v));

// map -> Muta el arreglo -> Cambiar -> Reasignar Nuevo Arreglo

const respuestaMap = arreglo
    .map(valorActual => valorActual.toUpperCase());

console.log(respuestaMap);
console.log(arreglo);

if (0 == '') {
    console.log('Es verdad')
} else {
    console.log('No es verdad');
}

if (0 === '') {
    console.log('Es verdad')
} else {
    console.log('No es verdad');
}

const arregloNumeros = [9, 1, 5, 4, 3, 7, 8, 2, 6, 10];

// filter

const respuestaFilter = arregloNumeros
    .filter(n => n > 5)
    .map(n => n + 1)
    .filter(n => n > 7)
    .forEach(n => console.log(n));

console.log(respuestaFilter);

// findIndex

const respuestaFindIndex = arregloNumeros
    .findIndex(v => v === 7);

console.log(arregloNumeros.indexOf(7));
console.log(respuestaFindIndex);


// find

const respuestaFind = arregloNumeros
    .find(v => v === 7);

console.log(respuestaFind);


// some

const respuestaSome = arregloNumeros
    .some(n => n % 7 === 0);

console.log(respuestaSome);


// every

const respuestaEvery = arregloNumeros
    .every(n => n < 5);

console.log(respuestaEvery);


// reduce

const respuestaReduce = arregloNumeros
    .reduce(
        (valorActualDeLaOperacion, valorActualDelArreglo)=>{
            return valorActualDeLaOperacion + valorActualDelArreglo
        },
        0
    );

console.log(respuestaReduce);

const respuestaReduce2 = arregloNumeros
    .reduce((acumulado,valorActual)=>acumulado-valorActual, 100);

console.log(respuestaReduce2);

const respuestaReduce3 = arregloNumeros
    .reduce((acumulado,valorActual)=>{
        if (valorActual>7){
            return acumulado+valorActual
        } else {
            return acumulado
        }
    }, 0);

console.log(respuestaReduce3);










