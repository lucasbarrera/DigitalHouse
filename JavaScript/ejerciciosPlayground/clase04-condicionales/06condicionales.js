const readline = require("readline-sync");
//condicionales dessafio extra

let altura = parseInt(readline.question("ingrese la altura actual del avion "));
let velocidad = parseInt(
  readline.question("ingrese la velocidad actual del avion ")
);

if (velocidad >= 266 && velocidad <= 278 && altura < 301 && altura > 150) {
  console.log("el avion puede aterrizar");
} else {
  console.log("el avion no puede aterrizar");
}
