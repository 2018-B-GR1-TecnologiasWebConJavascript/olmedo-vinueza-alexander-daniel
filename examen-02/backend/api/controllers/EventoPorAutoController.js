/**
 * EventoPorAutoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  autos: async (req, res) => {
    const parametros = req.allParams();
    var eventoAutos = await EventoPorAuto.find(
      { idEvento: parametros.id }
    ).populate('idAuto');
    console.log(eventoAutos);
    if(eventoAutos){
      return res.ok(eventoAutos);
    }else{
      return res.badRequest({mensaje:'Usuario Invalido'});
    }
  }

};

