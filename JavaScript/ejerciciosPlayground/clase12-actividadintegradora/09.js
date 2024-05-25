const autos = require("./01.js");

let autosImportados = autos;
let cliente = {
  nombre: "Juan",
  capacidadDePagoEnCuotas: 20000,
  capacidadDePagoTotal: 100000,
};
const concesionaria = {
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
  listaDeVentas: function () {
    let precioAutos = this.autos
      .filter((auto) => auto.vendido === true)
      .map((auto) => auto.precio);
    return precioAutos;
  },
  totalDeVentas: function () {
    let precios = this.listaDeVentas();
    if (precios.length != 0) {
      let total = precios.reduce((acc, precio) => acc + precio, 0);
      return total;
    }
  },
  puedeComprar: function (persona, auto) {
    let autoFound = this.buscarAuto(auto);
    if (
      persona.capacidadDePagoTotal >= autoFound.precio &&
      persona.capacidadDePagoEnCuotas >= autoFound.precio / autoFound.cuotas
    ) {
      return true;
    } else {
      return "no puede compar el auto";
    }
  },
};

console.log(concesionaria.puedeComprar(cliente, "APL123"));
console.log(concesionaria.puedeComprar(cliente, "JJK116"));
