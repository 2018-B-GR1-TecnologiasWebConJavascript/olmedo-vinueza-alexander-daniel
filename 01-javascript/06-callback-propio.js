const fs = require('fs');

let contenidoFinal = 'Inicial';

function appendFile(nombreArchivo, contenido, callback) {
    // 1) Leer archivo
    // 2.1) Si existe, le añado el contenido al contenido del archivo
    // 2.2 Si no existe, le creo al archivo con el contenido

    //** Devuelvan el contenido completo del archivo
    fs.readFile(
        nombreArchivo,
        'utf-8',
        (error, contenidoLeidoDelArchivo) => {
            if (error) {
                // escribimos el archivo
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err) => {
                        if (err) {
                            callback(undefined, err)
                        } else {
                            // Devolver el contenido
                            callback(contenido)
                        }
                    }
                );
            } else {
                // añadimos el contenido del archivo leido al contenido a escribir en el archivo
                fs.writeFile(
                    nombreArchivo,
                    contenidoLeidoDelArchivo + contenido,
                    (err) => {
                        if (err) {
                            callback(undefined, err)
                        } else {
                            // Devolver el contenido
                            callback(contenidoLeidoDelArchivo + contenido)
                        }
                    }
                );
            }
        }
    );
}

appendFile(
    '06-ejemplo.txt',
    '\nHola Amigos',
    (contenido, err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(contenido)
        }
    });

console.log(contenidoFinal)