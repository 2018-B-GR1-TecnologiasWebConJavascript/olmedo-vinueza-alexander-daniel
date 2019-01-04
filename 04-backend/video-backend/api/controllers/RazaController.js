/**
 * RazaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

// http://localhost:1337/Raza/holaMundo
// http://localhost:1337/Usuario/registrar

// expressjs

module.exports = {

  holaMundo: (peticion , respuesta) =>{
    return respuesta.ok('OK');
  },

  buscarPorNombre: async function (request, response) {
    // Tener acceso a todos los modelos
    var nombreCac = await Raza.find({
      nombre: { 'startsWith':'Cac'}
    });
    return response.ok(nombreCac)

  },

};

// ESTANDAR RESTFULL

// MODELO: Raza

// Find
// http://localhost:1337/Raza
// METODO HTTP: GET

// Create
// http://localhost:1337/Raza
// METODO HTTP: POST
// Parametros -> Body(Formulario)

// Update
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/1
// METODO HTTP: PUT
// Parametros

// Delete
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/1
// METODO HTTP: DELETE

// Find One by ID
// http://localhost:1337/Raza/id
// http://localhost:1337/Raza/10
// METODO HTTP: GET


// Query Params
// AL FINAL
// ? Empieza
// & Separa
// http://localhost:1337/Raza?nombre=Alexander&apellido=Olmedo
// TODOS LOS METODOS HTTP

// Route Params
// Dinamicos
// http://localhost:1337/Raza/1/casa/2/cuarto/13
// TODOS LOS METODOS HTTP

// Form Params (Body Params)
// TODOS LOS METODOS HTTP EXCEPTO GET
// JS
// <form></form>
// <input type="text" name="nombre" value="Alexander">
// <input type="text" name="apellido" value="Olmedo">
// </form>

// STATUS CODE (Códigos de estado)
// 1XX -> Información
// 2XX -> Éxito
// 3XX -> Redirección
// 4XX -> Error del CLIENTE
// 5XX -> Error del SERVIDOR
