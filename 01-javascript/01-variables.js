// NO TIPADO
var edad = 10;
var edadString = "10";
var sueldo = 1.234;
var casado = false;
var hijos = null;
var dato = undefined
var fechaNacimiento = new Date()

console.log("edad", typeof edad); // number
console.log("edadString", typeof edadString); // string
console.log("sueldo", typeof sueldo); // number
console.log("casado", typeof casado); // boolean
console.log("hijos", typeof hijos); // object
console.log("dato valor", dato); // undefined
console.log("dato tipo", typeof dato); // undefined
console.log("fechaNacimiento", typeof fechaNacimiento); // object

var adrian = {
    "nombre":"Alexander",
    'segundoNombre': 'Daniel',
    apellidoPaterno: `Olmedo`,
    apellidoMaterno: 'Vinueza',
    edad: 23,
    casado: false,
    hijo: null,
    mascotas: {
        nombre: "Luli"
    }
}; //object
