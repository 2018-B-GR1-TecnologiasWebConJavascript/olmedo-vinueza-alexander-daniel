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
        name: 'nombreSerieBuscada',
        type: 'input',
        message: 'Ingresar el nombre de la serie'
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
                listarSeries(nombreArchivo)
                    .then(value => console.log(value))
                    .catch(reason => console.log(reason));
                break;
            case 'Editar Serie':
                inquirer.prompt(menuBuscarSerie).then(answers => {
                    console.log('\nOpcion 3:');
                });
                break;
            case 'Eliminar Serie':
                inquirer.prompt(menuBuscarSerie).then(respuesta => {
                    eliminarSerie(respuesta.nombreSerieBuscada, nombreArchivo)
                        .then(value => console.log(value))
                        .catch(reason => console.log(reason));
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
                        const base = JSON.parse(contenido);
                        base.series.push(serie);
                        fs.writeFile(
                            nombreArchivo,
                            JSON.stringify(base),
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

const listarSeries = (nombreArchivo) => {
    return new Promise(((resolve, reject) => {
            fs.readFile(nombreArchivo, 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        const base = JSON.parse(contenido);
                        resolve(bdd.series);
                    }
                }
            )
        })
    )
};

const eliminarSerie = (nombreSerieBuscada, nombreArchivo) => {
    return new Promise(((resolve, reject) => {
            fs.readFile(nombreArchivo, 'utf-8',
                (err, contenido) => {
                    if (err) {
                        reject({mensaje: 'Error leyendo'});
                    } else {
                        var base = JSON.parse(contenido);
                        base.series = base.series.filter(function(serie) {
                            return serie.nombreSerie.toLowerCase() !== nombreSerieBuscada.toLowerCase();
                        });

                        fs.writeFile(
                            nombreArchivo,
                            JSON.stringify(base),
                            (err) => {
                                if (err) {
                                    reject(err);
                                } else {
                                    resolve({mensaje: 'Serie Eliminada'});
                                }
                            }
                        );
                    }
                }
            )
        })
    )
};
