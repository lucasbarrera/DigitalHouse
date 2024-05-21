const readline = require("readline-sync");

function cambioAMayusculas(palabra) {
  return palabra.toUpperCase();
}
console.log(cambioAMayusculas("computadora"));

function tipoDeDato(dato) {
  return typeof dato;
}
console.log(tipoDeDato(false));

function edadPerro(edad) {
  return edad * 7;
}
console.log(edadPerro(4));

function precioHora(salario, cantidadDias, horasDiarias) {
  return salario / cantidadDias / horasDiarias;
}
console.log(precioHora(500000, 24, 8));
