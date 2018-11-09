//import {map} from "rxjs/operators";

declare var require: any;

const rxjs = require('rxjs');
const map = require('rxjs/operators').map;

const numeros$ = rxjs.of(
    1,
    "Alexander",
    true,
    {nombre: 'Alexander'},
    [1,2,3],
    new Date);

console.log(numeros$);

numeros$
    .pipe(
        map((valorActual)=>{
                return {
                    data: valorActual
                };
            }
        )
    )
    .subscribe(
        (ok)=>{
            console.log('En OK', ok);
        },
        (error)=>{
            console.log('Error', error);
        },
        ()=>{
            console.log('Completado');
        },

    );