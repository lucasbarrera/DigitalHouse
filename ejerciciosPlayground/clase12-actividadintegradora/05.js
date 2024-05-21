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
    return devolver ? devolver : null;
  },
  venderAuto: function (patente) {
    let autoFound = this.buscarAuto(patente);
    if (autoFound && !autoFound.vendido) {
      // Verifica si se encontró el auto y si no ha sido vendido
      autoFound.vendido = true;
      return autoFound;
    } else {
      return null;
    }
  },
};
console.log(concesionaria.venderAuto("APL123"));
console.log(concesionaria.venderAuto("JJK116"));
