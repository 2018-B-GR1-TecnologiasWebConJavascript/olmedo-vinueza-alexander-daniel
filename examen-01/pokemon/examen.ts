const data = require('./data.json');

//1) Busque los tipos de "types" en el arreglo data.json

var arregloRespuestaTypes = [];

arregloRespuestaTypes = data
    .map((pokemon)=>{
        return pokemon.types.map((types)=>{
            return types.type
        });
    });

console.log(arregloRespuestaTypes);

//2) Busque los tipos de "abilities" en el arreglo data.json

var arregloRespuestaAbilities = [];

arregloRespuestaAbilities = data
    .map((pokemon)=>{
        return pokemon.abilities.map((abilities)=>{
            return abilities.ability
        });
    });

console.log(arregloRespuestaAbilities);


