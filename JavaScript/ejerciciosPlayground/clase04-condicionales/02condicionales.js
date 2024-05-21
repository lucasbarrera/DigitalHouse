const readline = require("readline-sync");
// condicionales micro-desafio 1

let usuario = readline.question(`
ingrese su perfil de usuario pudiendo ser: 
a) administrador
b) asistente
c) invitado
`);
if (usuario.toLowerCase() == "administrador") {
  console.log("Usted tiene todos los privilegios de use del sistema");
} else if (usuario.toLocaleLowerCase() == "asistente") {
  console.log(
    "Usted solo tiene persisos de registrar , modificar y consultar datos"
  );
} else if (usuario.toLowerCase() == "invitado") {
  console.log("Usted solo tiene permiso  de consultar datos ");
} else if (usuario.toLowerCase() == "") {
  console.log("Debe especificar el perfil del usuario");
} else {
  console.log("Debe especificar un perfil valido");
}
