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
    if (autoFound && !autoFound.vendido) {
      // Verifica si se encontró el auto y si no ha sido vendido
      autoFound.vendido = true;
      return autoFound;
    } else {
      return null;
    }
  },
  autosParaLaVenta: function () {
    let listaNoVendidos = this.autos.filter((auto) => auto.vendido === false);
    return listaNoVendidos;
  },
  autosNuevos: function () {
    let lista = this.autosParaLaVenta();
    let lista0KM = lista.filter((auto) => {
      if (auto.vendido == false && auto.km < 100) {
        return auto;
      }
    });
    return lista0KM;
  },
};
console.log(concecionaria.autosNuevos());
console.log(concecionaria.venderAuto("JJK116"));
console.log(concecionaria.autosNuevos());
