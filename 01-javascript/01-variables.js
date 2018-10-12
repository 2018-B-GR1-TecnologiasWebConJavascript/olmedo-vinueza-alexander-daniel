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

var alexander = {
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

console.log(alexander.mascotas.nombre);
console.log(alexander);
delete alexander.hijo;
console.log(alexander);
alexander.hija = {
    nombre: '????'
};
console.log(alexander.abuelo);

if(true){
    console.log("Si")
} else {
    console.log("No")
}

if(false){
    console.log("Si")
} else {
    console.log("No")
}

if(1){ // Truthy
    console.log("Si")
} else {
    console.log("No")
}

if(0){ // Falsy
    console.log("Si")
} else {
    console.log("No")
}

if(-1){ // Truthy
    console.log("Si")
} else {
    console.log("No")
}

if("a"){ // Truthy
    console.log("Si")
} else {
    console.log("No")
}

if(null){ // Falsy
    console.log("Si")
} else {
    console.log("No")
}

if({}){ // Truthy
    console.log("Si")
} else {
    console.log("No")
}

if({nombre:"Alexander"}){ // Truthy
    console.log("Si")
} else {
    console.log("No")
}

if(new Date()){ // Truthy
    console.log("Si")
} else {
    console.log("No")
}

if(undefined){ // Falsy
    console.log("Si")
} else {
    console.log("No")
}
e