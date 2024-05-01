function noParesDeContarImparesHasta(numero) {
  let impar = 0;
  for (let i = 0; i < numero + 1; i++) {
    if (i % 2 != 0) {
      impar++;
    }
  }
  return impar;
}
console.log(noParesDeContarImparesHasta(7));
