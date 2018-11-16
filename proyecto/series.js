const inquirer = require('inquirer');
const fs = require('fs');
const rxjs = require('rxjs');
const nombreArchivo = 'series.json';

const menuPrincipal = {
    name: 'opcionSeleccionada',
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
        name: 'Nombre Comic',
        type: 'input',
        message: 'Ingresar el nombre del comic'
    }
];

inicializarBase()
    .then(value => console.log(value))
    .catch(reason => console.log(reason));


inquirer.prompt(menuPrincipal)
    .then(respuesta => {
        switch (respuesta.opcionSeleccionada) {
            case 'Agregar Serie':
                inquirer.prompt(menuPreguntaSerie).then(serie => {
                    agregarSerie(serie, nombreArchivo)
                        .then(value => console.log(value))
                        .catch(reason => console.log(reason));
                });
                break;
            case 'Listar Series':
                listarSeries()
                    .then(value => console.log(value))
                    .catch(reason => console.log(reason));
                break;
            case 'Editar Serie':
                inquirer.prompt(menuBuscarSerie).then(answers => {
                    console.log('\nOpcion 3:');
                });
                break;
            case 'Eliminar Serie':
                inquirer.prompt(menuBuscarSerie).then(answers => {
                    console.log('\nOpcion 4:');
                });
                break;
        }
    });

function inicializarBase() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(nombreArchivo, 'utf-8',
                (err, contenido) => {
                    if (err) {
                        fs.writeFile(nombreArchivo,
                            '{"series":[]}',
                            (err) => {
                                if (err) {
                                    reject({mensaje: 'Error'});
                                }
                                resolve({mensaje: 'Base ok'});
                            });
                    } else {
                        resolve({mensaje: 'Base ok'});
                    }
                });
        }
    );
}

const agregarSerie = (serie, nombreArchivo) => {
    return new Promise(((resolve, reject) => {
            fs.readFile(nombreArchivo, 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        bdd.series.push(serie);
                        fs.writeFile(
                            nombreArchivo,
                            JSON.stringify(bdd),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Serie Creada'});
                                }
                            }
                        );
                    }
                }
            )
        })
    )
};

const listarSeries = () => {
    return new Promise(((resolve, reject) => {
            fs.readFile(nombreArchivo, 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const bdd = JSON.parse(contenido);
                        resolve(bdd.series);
                    }
                }
            )
        })
    )
};