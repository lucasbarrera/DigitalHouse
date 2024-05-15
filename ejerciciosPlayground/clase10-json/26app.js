// micro-desafio 2
const datosbici = require("./25datosBici");

let dhBici = {
  bicicletas: datosbici.leerArchivo(),

  buscarBici: function (id) {
    let biciEncontradas = this.bicicletas.filter((bici) => bici.id == id);
    if (biciEncontradas === 0) {
      return "bicicleta no encontrada";
    } else {
      biciEncontradas;
    }
  },
  venderBici: function (id) {
    let biciFound = this.buscarBici(id);
    if (biciFound) {
      biciFound.vendidas = "si";
      return biciFound;
    } else {
      return "bicicleta no encontrada";
    }
  },
  biciParaVenta: function () {
    let sinVender = this.bicicletas.filter((bici) => bici.vendida == "no");
    return sinVender;
  },
  totalDeVentas: function () {
    return this.bicicletas
      .filter((bici) => bici.vendida === "si")
      .reduce((acum, bici) => acum + bici.precio, 0);
  },
};
