const fs = require('fs');
const nombre = '06-ejemplo.txt'
const nuevaPromesa = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                nombreArchivo,
                'utf-8',
                (err, contenidoDelArchivo) => {
                    if (err) {
                        reject(err);
                        console.log('no');
                    } else {
                        resolve(contenidoDelArchivo);
                        console.log('si');
                    }
                }
            )
        }
    )
};

const nuevaPromesaEscrituta = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenidoArchivo);
                    }
                }
            )
        }
    )
};

console.log(nuevaPromesa);

nuevaPromesa(nombre)
    .then(
        (contenido) => {
            console.log(contenido);
            return nuevaPromesaEscrituta('07-ejemplo2.txt',  contenido + 'Adios amigos');
        }
    )
    .then(
        (contenidoArchivoEscrito) => {
            console.log(contenidoArchivoEscrito);
        }
    )
    .catch(
        (err) => {
            console.log('Catch', err);
        }
    )

