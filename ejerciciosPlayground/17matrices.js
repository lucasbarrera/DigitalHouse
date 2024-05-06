let arreglo = [1, 2, 3, 4, 5, 6];
function encontrarNumero(array, numero) {
  let respuesta = "";
  if (array.includes(numero)) {
    respuesta = `el numero ${numero} si existe en el array`;
  } else {
    respuesta = `el valor solicitado no existe`;
  }
  return respuesta;
}
0;
console.log(encontrarNumero(arreglo, 8));
console.log(encontrarNumero(arreglo, 4));

let numeros = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
function sumatoria(array) {
  let sumpar = 0;
  let sumimpar = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
      sumpar += array[i];
    } else {
      sumimpar += array[i];
    }
  }
  return [sumpar, sumimpar];
}

console.log(sumatoria(numeros));
