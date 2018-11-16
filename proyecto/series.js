const inquirer = require('inquirer');

const nommbreArchivo='series.json';
const fs = require('fs');

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

const agregarSerie = (serie, nombreArchivo) => {
    return new Promise(((resolve, reject) => {
            fs.readFile(nombreArchivo,'utf-8',
                (err) => {
                    if (err){
                        reject(err);
                    } else{
                        resolve({
                            mensaje: "Ingresado correctamente",
                            serie: serie
                        })
                    }
                }
            )
        })
    )
};

inquirer.prompt(menuPrincipal)
    .then(respuesta => {
    switch (respuesta.opcionSeleccionada) {
        case 'Agregar Serie':
            inquirer.prompt(menuPreguntaSerie).then(answers => {
                console.log('\nOpcion 1:');
            });
            break;
        case 'Listar Series':
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
            fs.readFile('series.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        fs.writeFile('bdd.json',
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
