// condicionales micro-desafio 2
const readline = require("readline-sync");
let pagoMes = parseInt(readline.question("ingrese el ultimo pago mensual: "));
let consumoKWH = parseInt(readline.question("ingrese consumo en KWH: "));

consumoKWH > 300 ? (pagoMes = pagoMes + pagoMes * 0.2) : pagoMes;

console.log(` Debido a que su hogat tuvo un consumo de ${consumoKWH}KWH,
 en base al ajuste tarifario (hogares con consumo mayor a 300KWH por mes tendran un aumento del 20%), 
cumplimos con informarle que se ha ajustado el total a pagar,
 que sera de $${pagoMes})`);
