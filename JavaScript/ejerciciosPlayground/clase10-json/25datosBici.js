const fs = require("fs");

function leerArchivo() {
  let archivo = fs.readFileSync("./24bicicletas.json", "utf8");
  return JSON.parse(archivo);
}

console.log(leerArchivo());
module.exports = {
  leerArchivo,
};
