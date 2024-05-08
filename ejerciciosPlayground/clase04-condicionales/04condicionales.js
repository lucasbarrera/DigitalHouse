const readline = require("readline-sync");
// condicionales micro-desafio 3

let palabra = readline.question(`
ingrese alguna de las siguientes palabras:
- perro
- gato
- puerta
- ventana 
- mesa
`);
switch (palabra) {
  case "perro":
    console.log(`La traduccion de ${palabra} es: dog`);
    break;
  case "gato":
    console.log(`La traduccion de ${palabra} es: cat`);
    break;
  case "puerta":
    console.log(`La traduccion de ${palabra} es: door`);
    break;
  case "ventana":
    console.log(`La traduccion de ${palabra} es: windows`);
    break;
  case "mesa":
    console.log(`La traduccion de ${palabra} es: table`);
    break;

  default:
    console.log("la palabra ingresada es incorrecta");
    break;
}
