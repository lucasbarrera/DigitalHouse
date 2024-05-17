const fs = require("fs");
function distingirMarca(marca) {
  let objeto = {};
  switch (marca) {
    case "Star Wars":
      let StarWars = fs.readFileSync("./datos/figuras3");
      objeto = JSON.parse(StarWars);
      break;
    case "Hot Toys":
      let HotToys = fs.readFileSync("./datos/figuras1");
      objeto = JSON.parse(HotToys);
      break;
    case "Bandai":
      let Bandai = fs.readFileSync("./datos/figuras2");
      objeto = JSON.parse(Bandai);
      break;
    default:
      break;
  }
  return objeto;
}

console.log(distingirMarca("Bandai"));

module.exports = {
  distingirMarca,
};
// entegar tarea de playground para el dia jueves 23
