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

console.log(encontrarNumero(arreglo, 8));
