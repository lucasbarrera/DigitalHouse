const autos = require("./01.js");

let autosImportados = autos;
const concecionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    let autoencontrado = this.autos.find((auto) => auto.patente === patente);
    return autoencontrado ? autoencontrado : null;
  },
  venderAuto: function (patente) {
    let autoFound = this.buscarAuto(patente);
    if (autoFound.vendido == false) {
      autoFound.vendido = true;
      return autoFound;
    }
  },
};

console.table(concecionaria.buscarAuto("APL123"));
