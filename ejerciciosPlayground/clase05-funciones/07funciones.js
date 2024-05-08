const readline = require("readline-sync");
const alquilerVehiculo = () => {
  let tipo = readline.question(`tipo de vehiculo.
 puede optar por vehiculo "compacto" , "mediano" o "camioneta":
 `);
  let dias = parseInt(readline.question("cuantos dias necesita el vehiculo: "));
  let silla = readline.question(`necesita silla para bebes? responsa si o no `);
  let precio = 0;
  switch (tipo) {
    case "compacto":
      precio = 14000 * dias;
      break;
    case "mediano":
      precio = 17000 * dias;
      break;
    case "camioneta":
      precio = 28000 * dias;
      break;
    default:
      "ingrese el tipo correcto";
  }
  if (silla == "si") {
    return precio + 1200;
  }
  return precio;
};

console.log(alquilerVehiculo());
