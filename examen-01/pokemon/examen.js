const data = require('./data.json');
//1) Busque los tipos de "types" en el arreglo data.json
var arregloRespuestaTypes = [];
arregloRespuestaTypes = data
    .map((pokemon) => {
    return pokemon.types
        .map((types) => {
        return { tipo: types.type.name };
    });
});
console.log(arregloRespuestaTypes);
//2) Busque los tipos de "abilities" en el arreglo data.json
var arregloRespuestaAbilities = [];
arregloRespuestaAbilities = data
    .map((pokemon) => {
    return pokemon.abilities.map((abilities) => {
        return { nombreAbility: abilities.ability.name };
    });
});
console.log(arregloRespuestaAbilities);
//3) Busque los tipos de "move" en el arreglo data.json
var arregloRespuestaMove = [];
arregloRespuestaMove = data
    .map((pokemon) => {
    return pokemon.moves.map((moves) => {
        return { nombreMove: moves.move.name };
    });
});
console.log(arregloRespuestaMove);
// 8) Calcular la sumatoria de las propiedades de "stats".
var respuestaStats = data
    .map((pokemon) => {
    return pokemon.stats.map((stats) => {
        return { base_stat: stats.base_stat,
            nombre: stats.stat.name };
    });
});
console.log(respuestaStats);
//11) Realizar la operacion de crear nuevos pokemons con la libreria inquirer.js
const inquirer = require('inquirer');
var preguntas = [
    {
        type: 'list',
        name: 'abilities',
        message: 'Seleccione la habilidad',
        choices: ['comer', 'dormir'],
    },
    {
        type: 'input',
        name: 'base_experience',
        message: "Cuál es la experiencia base",
        default: 64
    },
    {
        type: 'input',
        name: 'game_indices',
        message: "Cuál es el índice de juego",
        default: 124
    },
    {
        type: 'input',
        name: 'height',
        message: "Cuál es la estatura",
        default: 12
    },
    {
        type: 'list',
        name: 'held_items',
        message: 'Seleccione los items',
        choices: ['manzanas', 'peras'],
    },
    {
        type: 'input',
        name: 'id',
        message: "Ingrese el id",
        default: '1'
    },
    {
        type: 'confirm',
        name: 'is_default',
        message: '¿Es default?',
        default: true
    },
    {
        type: 'input',
        name: 'location_area_encounters',
        message: "Ingrese la localización de encuentros",
        default: 'Quito'
    },
    {
        type: 'list',
        name: 'moves',
        message: 'Seleccione los movimientos',
        choices: ['cut', 'jump'],
    },
    {
        type: 'input',
        name: 'name',
        message: "Ingrese el nombre del pokemon",
        default: 'pikachu'
    },
    {
        type: 'input',
        name: 'name',
        message: "Ingrese el orden",
        default: 233
    },
    {
        type: 'list',
        name: 'types',
        message: 'Seleccione el tipo',
        choices: ['grass', 'water'],
    },
    {
        type: 'input',
        name: 'weight',
        message: "Cuál es el peso",
        default: 64
    }
];
inquirer.prompt(preguntas).then(respuestas => {
    console.log('\nPokemon:');
    console.log(JSON.stringify(respuestas, null, '  '));
});
