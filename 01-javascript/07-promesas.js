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

// Ejercicio 06

const appendFilePromise = (nombreArchivo, contenido) => new Promise((resolve, reject) => {
    fs.readFile(nombreArchivo, 'utf-8', (error, contenidoLeidoDelArchivo) => {
        if (error) {
            fs.writeFile(nombreArchivo, contenido, (err) => {
                if (err) {
                    reject('Error de escritura...');
                } else {
                    //devolver contenido
                    resolve(contenido)
                }
            })
        } else {
            fs.writeFile(nombreArchivo, contenidoLeidoDelArchivo + contenido, (err) => {
                if (err) {
                    reject('Error de escritura...');
                } else {
                    //devolver contenido
                    resolve(contenidoLeidoDelArchivo + contenido);
                }
            })
        }
    });
});


appendFilePromise('06-ejemplo.txt', 'Hola amigos')
    .then(value => console.log(value))
    .catch(reason => console.log(reason));
