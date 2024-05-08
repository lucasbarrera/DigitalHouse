function mas10Numeros(numero) {
  for (let i = 1; i < 11; i++) {
    console.log(numero + i);
  }
}

mas10Numeros(2);

function salto3en3() {
  for (let i = 1; i < 57; i += 3) {
    console.log(i);
  }
}
salto3en3();

function sumatoria0a100() {
  let res = 0;
  for (let i = 0; i <= 100; i++) {
    res += i;
  }
  return res;
}

console.log(sumatoria0a100());

let cadena = "practicando el uso de los ciclos o bucles";
function cambiarAMayusculas(texto) {
  for (let i = 0; i < texto.length; i++) {
    console.log(texto[i].toUpperCase());
  }
}
cambiarAMayusculas(cadena);

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 12, 13, 14, 15, 16];
function pares(array) {
  let numpares = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      numpares.push(array[i]);
    }
  }
  return numpares;
}

console.log(pares(numeros));
let meses = [300, 0, -250, -100, 0, 400, 600, 1200, 5000, 0, 1000, 1000];

function sumatoriaBajoImporte(array) {
  let sumatoria = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] <= 1000) {
      sumatoria += array[i];
    }
  }
  return sumatoria;
}
console.log(sumatoriaBajoImporte(meses));
