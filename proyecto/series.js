const inquirer = require('inquirer');

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