let operaciones = [123, -234, 456, -342, 765];

function calcular(array) {
  let saldoActual = 0;
  let saldoDeposito = 0;
  let saldoRetiro = 0;
  for (let i = 0; i < array.length; i++) {
    saldoActual += array[i];
    if (array[i] > 0) {
      saldoDeposito += array[i];
    } else {
      saldoRetiro += array[i];
    }
  }
  return [saldoActual, saldoDeposito, saldoRetiro];
}

calcular(operaciones);

function mostrarSaldo(nombre, apellido, array, fn) {
  let saldos = fn(array);
  console.log(`estimado ${nombre} ${apellido}
  el monto total de los depositos es de : ${saldos[1]}
    el monto total de los retiros es de  ${saldos[2]};
  por lo tanto, su saldo actual en la cuenta es de ${saldos[0]}`);
}

mostrarSaldo("lucas", "barrera", operaciones, calcular);
