/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {

  login: async (req, res) => {
    const parametros = req.allParams();

    var usuarioLogeado = await Usuario.find({
      correo: parametros.correo,
      password: parametros.password,
    });

    const error = usuarioLogeado.length === 0;

    console.log(usuarioLogeado);

    if(!error){
      return res.ok(usuarioLogeado[0]);
    }else{
      return res.badRequest({mensaje:'Correo o contraseña inválidos'});
    }

  }

};

