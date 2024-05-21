const readline = require("readline-sync");
/* 
let userName = readline.question("ingrese su nombre: ");
console.log("Hola ", userName); */

// Ejercicio 1

let cliente = {
  nombre: "Lucas",
  apellido: "Barrera",
  edad: 31,
  numTelefono: 3804333333,
  socio: true,
  numSilla: 345,
  precio: 345.23,
};
console.log(cliente);
console.log(` 
${typeof cliente.edad} 
${typeof cliente.nombre}
${typeof cliente.apellido}
${typeof cliente.numSilla}
${typeof cliente.numTelefono}
${typeof cliente.socio}
${typeof cliente.precio}
`);

//Ejercicio 2
let nombre = "David";
let apellido = "Garcia";
let sueldoActual = 400000;
let porcentajeAumento = 50;
let calculoAumento = (sueldoActual * porcentajeAumento) / 100;
let nuevoSueldo = calculoAumento + sueldoActual;
console.log(
  "En base a su sueldo actual de " +
    sueldoActual +
    " Ha recibido un aumento del " +
    porcentajeAumento +
    "% " +
    "y su nuevo sueldo es: " +
    nuevoSueldo
);

/* let porcentajeAumento = 25
let porcentajeAumento2 = 15
let nombre = readline.question('ingrese su nombre: ')
let apellido = readline.question('ingrese su apellido: ')
let sueldoActual=parseInt(readline.question('ingrese su sueldo actual: '))
if (sueldoActual < 35000) {
  let calculoAumento = (sueldoActual * porcentajeAumento) / 100;
  let nuevoSueldo = sueldoActual + calculoAumento;
  console.log(`hola ${nombre} ${apellido}`);
  console.log(`en base a tu sueldo actual `);
  console.log(`${sueldoActual}`);
  console.log(`haz recibido un aumento del 25%`);
  console.log(`tu nuevo sueldo sera de $ ${nuevoSueldo}`);
} else {
  let calculoAumento = (sueldoActual * porcentajeAumento2) / 100;
  let nuevoSueldo = sueldoActual + calculoAumento;
  console.log(`hola ${nombre} ${apellido}. en base a tu sueldo actual ${sueldoActual}. haz recibido un aumento del 15% tu nuevo sueldo sera de $ ${nuevoSueldo}`);
} */
