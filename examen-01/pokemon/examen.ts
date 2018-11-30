const data = require('./data.json');

//1) Busque los tipos de "types" en el arreglo data.json

var arregloRespuestaTypes = [];

arregloRespuestaTypes = data
    .map((pokemon)=>{
        return pokemon.types
            .map((types)=>{
            return {tipo: types.type.name}
        });
    });

console.log(arregloRespuestaTypes);

//2) Busque los tipos de "abilities" en el arreglo data.json

var arregloRespuestaAbilities = [];

arregloRespuestaAbilities = data
    .map((pokemon)=>{
        return pokemon.abilities.map((abilities)=>{
            return {nombreAbility: abilities.ability.name}
        });
    });

console.log(arregloRespuestaAbilities);

//3) Busque los tipos de "move" en el arreglo data.json

var arregloRespuestaMove = [];

arregloRespuestaMove = data
    .map((pokemon)=>{
        return pokemon.moves.map((moves)=>{
            return {nombreMove: moves.move.name}
        });
    });

console.log(arregloRespuestaMove);

