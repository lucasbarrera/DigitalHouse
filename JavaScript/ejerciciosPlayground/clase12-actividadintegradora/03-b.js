const autos = require("./01.js");

let autosImportados = autos;
const concecionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    let autoencontrado = this.autos.find((auto) => auto.patente === patente);
    return autoencontrado ? autoencontrado : null;
  },
};

console.log(concecionaria.buscarAuto("APL123"));
console.log(concecionaria.buscarAuto("JJK116"));
console.log(concecionaria.buscarAuto("JA123"));
