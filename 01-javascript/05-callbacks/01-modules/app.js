const version = require('./version');
const numeroProcesadores = require('./numero-procesadores');
const calculadora = require('./calculadora-simple');
const versionNode = require('./version-node/version-node');
const sinUso = require('../../04-operadores');

console.log('version', version);
console.log('version node', versionNode);
console.log(numeroProcesadores);

console.log(calculadora.sumar(1, 2));
console.log(calculadora.restar(5, 3));
console.log(calculadora.multiplicar(4, 2));
console.log(calculadora.dividir(10, 5));