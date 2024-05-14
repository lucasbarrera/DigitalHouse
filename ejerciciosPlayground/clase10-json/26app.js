// micro-desafio 2
const datosbici = require("./25datosBici");

let dhBici = datosbici.leerArchivo();
console.log(dhBici);

let funcionesdhBici = {
  buscarBici(id) {
    let biciEncontrada = dhBici.find((i) => dhBici.id == id);
    return biciEncontrada;
  },
  venderBici(id) {
    if (this.buscarBici(id)) {
      if (dhBici.vendida != "no") {
        dhBici.vendida = "si";
        console.log(biciEncontrada);
      }
    } else {
      console.log("Bici no encontrada");
    }
  },
};
