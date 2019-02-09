/**
 * Evento.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

    attributes: {
      nombre:{
        type: 'String',
        required: true,
      },
      lugar:{
        type: 'String',
        required: true,
      },
      fecha:{
        type: 'String'
      },
      eventoAuto:{
        collection: 'EventoPorAuto',
        via: 'idEvento'
      },
    },
};

