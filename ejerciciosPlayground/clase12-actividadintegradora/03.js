const autos = require("./01");

let autosImportados = autos;
const consecionaria = {
  autos: autosImportados,
  buscarAuto: function (patente) {
    let autoencontrado = this.autos.filter((auto) => auto.patente === patente);
    return autoencontrado ? autoencontrado : null;
  },
};

console.table(consecionaria.buscarAuto("JJK116"));

let autosImportados = require("./autos");
//console.log(autosImportados);
const concesionaria = {
  /* completar */
  autos: autosImportados,
  buscarAuto: function (patente) {
    let devolver;
    for (let i = 0; i < this.autos.length; i++) {
      if (this.autos[i].patente === patente) {
        devolver = this.autos[i];
      }
    }

    return devolver ? devolver : null;
  },
};

// console.log(concesionaria.buscarAuto("APL123"));
// console.log(concesionaria.buscarAuto("JJK116"));
// console.log(concesionaria.buscarAuto("JA123"));
