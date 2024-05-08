const readline = require("readline-sync");

// primera funcion callback
/**
 *
 * @param {string} tipoHamburguesa
 * @param {boolean} jamon
 * @param {boolean} queso
 * @param {boolean} ketchup
 * @param {boolean} mayonesa
 * @param {boolean} mostaza
 * @param {boolean} tomate
 * @param {boolean} lechuga
 * @param {boolean} cebolla
 * @returns {number}
 */
function calcularTotal(
  tipoHamburguesa,
  jamon,
  queso,
  ketchup,
  mayonesa,
  mostaza,
  tomate,
  lechuga,
  cebolla
) {
  let hamburguesa;
  let total = 0;
  let extras;
  switch (tipoHamburguesa) {
    case "vaca":
      hamburguesa = 1800;
      break;
    case "pollo":
      hamburguesa = 1500;
      break;
    case "vegetariana":
      hamburguesa = 1200;
      break;
    default:
      break;
  }
  if (jamon) extras += 30;
  if (queso) extras += 25;
  if (ketchup) extras += 5;
  if (mayonesa) extras += 5;
  if (mostaza) extras += 5;
  if (tomate) extras += 15;
  if (lechuga) extras += 10;
  if (cebolla) extras += 10;
  return total + extras;
}

// segunda funcion
function darTiket(
  nombre,
  apellido,
  jamon,
  queso,
  ketchup,
  mayonesa,
  mostaza,
  tomate,
  lechuga,
  cebolla,
  fn
) {
  let total;
  console.log(
    "estimado",
    nombre,
    apellido,
    "el monto total a pagar es de ",
    total
  );
}

darTiket(
  "pepote",
  "pepin",
  "vaca",
  true,
  false,
  true,
  false,
  true,
  false,
  true,
  false,
  calcularTotal
);
