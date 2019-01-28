/**
 * Seed Function
 * (sails.config.bootstrap)
 *
 * A function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also create a hook.
 *
 * For more information on seeding your app with fake data, check out:
 * https://sailsjs.com/config/bootstrap
 */

module.exports.bootstrap = async function () {

  emitirTemperatura();

};

function emitirTemperatura() {
  setInterval(
    () => {
      const temperatura = new Date().toTimeString();
      console.log(temperatura);
    },
    2000
  )
}
