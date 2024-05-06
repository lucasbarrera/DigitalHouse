function sumatoriaBajoImporte(array) {
  let sumatoria = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0 && array[i] <= 1000) {
      sumatoria += array[i];
    }
  }
  return sumatoria;
}
