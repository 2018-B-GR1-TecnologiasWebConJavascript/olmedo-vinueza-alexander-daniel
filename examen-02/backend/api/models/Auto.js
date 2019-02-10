/**
 * Auto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    chasis:{
      type: 'number',
      columnType: 'int',
      defaultsTo: 0
    },
    nombreMarca:{
      type: 'String',
      required: true
    },
    colorUno:{
      type: 'String',
      required: true
    },
    colorDos:{
      type: 'String',
      required: true
    },
    nombreModelo:{
      type: 'String',
      required: true
    },
    anio: {
      type: 'number',
      columnType: 'int',
      required: true
    },
    idConductor:{
      model: 'Conductor'
    },
    eventoAuto:{
      collection: 'EventoPorAuto',
      via: 'idAuto'
    },

  },

};

