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

  },

  eliminar: async (req, res) => {
    const parametros = req.allParams();
    var usuarioEliminado = await Usuario.destroy({
      id: parametros.idUsuario,
    }).fetch();
    const error = usuarioEliminado.length === 0;
    console.log(usuarioEliminado);

    if(!error){
      return res.ok(usuarioEliminado);
    }else{
      return res.badRequest({mensaje:'Error al eliminar'});
    }
  },

  eliminarRol: async (req, res) => {
    const parametros = req.allParams();
    var usuarioEliminado = await RolesPorUsuario.destroy({
      rol:parametros.idUsuario,
      usuario: parametros.idRol
    }).fetch();
    const error = usuarioEliminado.length === 0;
    console.log(usuarioEliminado);

    if(!error){
      return res.ok(usuarioEliminado);
    }else{
      return res.badRequest({mensaje:'Error al eliminar'});
    }
  }
};

