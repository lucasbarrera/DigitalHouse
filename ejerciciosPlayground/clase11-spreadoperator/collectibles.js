const fs = require("fs");
function importar(marca) {
  let objeto = {};
  switch (marca) {
    case "Hot Toys":
      objeto = fs.readFileSync("./datos/figuras1.json", "utf-8");
      return JSON.parse(objeto);
    case "Bandai":
      objeto = fs.readFileSync("./datos/figuras2.json", "utf-8");
      return JSON.parse(objeto);
    case "Star Wars":
      objeto = fs.readFileSync("./datos/figuras3.json", "utf-8");
      return JSON.parse(objeto);
    default:
      break;
  }
}

module.exports = {
  importar,
};
// entegar tarea de playground para el dia jueves 23
