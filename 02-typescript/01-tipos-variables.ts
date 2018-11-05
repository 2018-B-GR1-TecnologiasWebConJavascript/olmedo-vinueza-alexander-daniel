let edad: number | string = 13;
edad = 25;
edad = 'Nombre';

let variableLoca: any;
variableLoca = false;

let nombre = 'Alexander';
// duck typing ->

let casado = false;
casado = true;
casado = null;
casado = undefined;

let alex: { // Interface
    nombre: string;
    apellido?: string;
} = { // JSON
    nombre: 'Alexander',
    apellido: 'Olmedo'
};

let fechaNacimiento: Date = new Date();

/*
let promesa: Promise<number> = () => {
    return new Promise(
        (resolve, reject)=>{
            resolve(1);
        }
    );
}*/


console.log(alex);

const numeros: number[] = [1, 2, 3, 4];

function saludar(
    nombre: string,  // REQUERIDOS
    apellido?: string,  // OPCIONALES
    ...otrosNombres: string[]): any {  //REQUERIDOS
    return '';
}

let respuestaSaludar = <number> saludar('Alexander', 'Olmedo', '', '', '', '');

respuestaSaludar = 1;
// respuestaSaludar = '';

const saludo = (nombre: string): number => {
    return 1;
};

console.log();

class Usuario{
    protected edad: string;
    nombre;
    constructor(){

    }
    saludar(nombre:string):string{
        return nombre;
    }
}

const alexInstancia = new Usuario();

interface UsuarioInterface {
    nombre: string;
    apellido?:string;
}

class UsuarioDummy {
    nombre: string;
    apellido?:string;
}

const alexander: UsuarioDummy = {
    nombre: 'Alexander',
    apellido: 'Olmedo',
};





