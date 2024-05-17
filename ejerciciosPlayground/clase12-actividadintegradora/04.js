let autosImportados = require("./01");
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
  },

  venderAuto: function (patente) {
    let auto = this.buscarAuto(patente);
    if (auto) {
      auto.vendido = true;
    }
    return auto;
  },
};

console.log(concesionaria.venderAuto("APL123"));
