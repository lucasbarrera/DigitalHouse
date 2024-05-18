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
      return devolver ? devolver : null;
    }
  },

  venderAuto: function (patente) {
    let autoEncontrado = this.buscarAuto(patente);
    if (autoEncontrado) {
      autoEncontrado.vendido = true;
      return autoEncontrado;
    }
  },
  autosParaLaVenta: function () {
    let listaNoVendidos = this.autos.filter((auto) => auto.vendido == false);
    return listaNoVendidos;
  },
};

console.log(concesionaria.autosParaLaVenta());
