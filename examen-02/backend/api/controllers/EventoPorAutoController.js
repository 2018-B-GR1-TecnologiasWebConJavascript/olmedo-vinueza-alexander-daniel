/**
 * EventoPorAutoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  autos: async (req, res) => {
    const parametros = req.allParams();
    console.log(parametros.id);
    var eventoAutos = await EventoPorAuto.find(
      { idEvento: parametros.id }
    ).populate('idAuto');
    if(eventoAutos){
      return res.ok(eventoAutos);
    }else{
      return res.badRequest({mensaje:'Usuario Invalido'});
    }
  }

};

