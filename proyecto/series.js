const rxjs = require('rxjs');
const inquirer = require('inquirer');
const fs = require('fs');
const mergeMap = require('rxjs/operators').mergeMap;
const map = require('rxjs/operators').map;
const nombreArchivo = 'series.json';
const preguntaMenu = {
    name: 'opcionMenu',
    type: 'list',
    message: 'SERIES DE TV\nEscoja una opción:',
    choices: [
        'Agregar Serie',
        'Listar Series',
        'Editar Serie',
        'Eliminar Serie',
    ],
    default: 0
};
const menuPreguntaSerie = [
    {
        name: 'idSerie',
        type: 'input',
        message: 'Ingrese el id de la Serie'
    },
    {
        name: 'nombreSerie',
        type: 'input',
        message: 'Ingrese el nombre de la Serie'
    },
    {
        type: 'input',
        name: 'fechaEmision',
        message: 'Ingrese el año de la serie'
    },
    {
        type: 'input',
        name: 'genero',
        message: 'Ingrese el genero de la serie'
    }
];
const menuBuscarSerie = [
    {
        name: 'idSerieBuscada',
        type: 'input',
        message: 'Ingresar el id de la serie'
    }
];
function main() {
    console.log('Empezo');
    inicializarBase()
        .pipe(preguntarOpcionesMenu(), preguntarDatos(), ejecutarAccion(), actualizarBDD())
        .subscribe((respuesta) => {
        //console.log(respuesta);
    }, (error) => {
        console.log(error);
    }, () => {
        console.log('complete');
        main();
    });
}
function inicializarBase() {
    const bddLeida$ = rxjs.from(leerBDD());
    return bddLeida$
        .pipe(mergeMap(// Respuesta anterior Observable
    (respuestaBDD) => {
        if (respuestaBDD.bdd) {
            return rxjs
                .of(respuestaBDD);
        }
        else {
            // crear la base
            return rxjs
                .from(crearBDD());
        }
    }));
}
function leerBDD() {
    return new Promise((resolve) => {
        fs.readFile(nombreArchivo, 'utf-8', (error, contenidoArchivo) => {
            if (error) {
                resolve({
                    mensaje: 'No existe la Base de Datos',
                    bdd: null
                });
            }
            else {
                resolve({
                    mensaje: 'Base de datos leida',
                    bdd: JSON.parse(contenidoArchivo)
                });
            }
        });
    });
}
function crearBDD() {
    const contenido = '{"series":[]}';
    return new Promise((resolve, reject) => {
        fs.writeFile(nombreArchivo, contenido, (error) => {
            if (error) {
                reject({
                    mensaje: 'Error creando bdd',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD creada',
                    bdd: JSON.parse(contenido)
                });
            }
        });
    });
}
function guardarBDD(bdd) {
    return new Promise((resolve, reject) => {
        fs.writeFile(nombreArchivo, JSON.stringify(bdd), (err) => {
            if (err) {
                reject({
                    mensaje: 'Error guardando la BDD',
                    error: 500
                });
            }
            else {
                resolve({
                    mensaje: 'BDD guardada',
                    bdd
                });
            }
        });
    });
}
function preguntarOpcionesMenu() {
    return mergeMap((respuesta) => {
        return rxjs
            .from(inquirer.prompt(preguntaMenu))
            .pipe(map((opcionMenu) => {
            respuesta.opcionMenu = opcionMenu;
            return respuesta;
        }));
    });
}
function preguntarDatos() {
    return mergeMap((respuesta) => {
        switch (respuesta.opcionMenu.opcionMenu) {
            case 'Agregar Serie':
                return rxjs
                    .from(inquirer.prompt(menuPreguntaSerie))
                    .pipe(map((serie) => {
                    respuesta.serie = serie;
                    return respuesta;
                }));
            case 'Listar Series':
                return rxjs
                    .of(respuesta)
                    .pipe(map((respuesta) => {
                    respuesta.bdd.series.forEach((serie) => {
                        console.log("ID: " + serie.idSerie + "\tSerie: " + serie.nombreSerie + "\tEstreno: " + serie.fechaEmision + "\tGenero: " + serie.genero);
                    });
                    return respuesta;
                }));
            case 'Editar Serie':
                return rxjs
                    .from(inquirer.prompt(menuPreguntaSerie))
                    .pipe(map((serie) => {
                    respuesta.bdd.series = respuesta.bdd.series.map((serieActual) => {
                        if (serieActual.idSerie === serie.idSerie) {
                            return serie;
                        }
                        else {
                            return serieActual;
                        }
                    });
                    return respuesta;
                }));
            case 'Eliminar Serie':
                return rxjs
                    .from(inquirer.prompt(menuBuscarSerie))
                    .pipe(map((serieBuscar) => {
                    respuesta.bdd.series = respuesta.bdd.series.filter((serie) => {
                        return serie.idSerie !== serieBuscar.idSerieBuscada;
                    });
                    return respuesta;
                }));
        }
    });
}
function ejecutarAccion() {
    return map((respuesta) => {
        if (respuesta.serie) {
            respuesta.bdd.series.push(respuesta.serie);
        }
        return respuesta;
    });
}
function actualizarBDD() {
    return mergeMap((respuesta) => {
        return rxjs.from(guardarBDD(respuesta.bdd));
    });
}
main();
