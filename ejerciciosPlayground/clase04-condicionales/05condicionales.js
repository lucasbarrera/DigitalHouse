const readline = require("readline-sync");

// condicionales micro-desafio 4

let num1 = parseInt(readline.question(`ingrese primer numero: `));
let num2 = parseInt(readline.question(`ingrese segundo numero: `));
let operacion = readline.question(`ingrese alguna de las siguientes operaciones:
 - sumar
 - restar 
 - multiplicar
 - dividir
 `);
switch (operacion) {
  case "sumar":
    console.log(" el resultado es ", num1 + num2);
    break;
  case "restar":
    console.log(" el resultado es ", num1 - num2);
    break;
  case "multiplicar":
    console.log(" el resultado es ", num1 * num2);
    break;
  case "dividir":
    console.log(" el resultado es ", num1 / num2);
    break;
  default:
    console.log(
      "las operaciones aceptadas son: sumar, restar, multiplicar, dividir"
    );
    break;
}
