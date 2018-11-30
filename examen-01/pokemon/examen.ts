const data = require('./data.json');

var arregloRespuestaTypes = [];


//1) Busque los tipos de "types" en el arreglo data.json

const distinct = (value,index,self) => {
    return self.indexOf(value) === index;
};

arregloRespuestaTypes = data
    .map((pokemon)=>{
        return pokemon.types.map((types)=>{
            return types.type
        });
    }).filter(distinct);

console.log(arregloRespuestaTypes);
