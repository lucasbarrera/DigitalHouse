function asientosDisponibles(array, asiento) {
  let mensaje = "";
  if (array.includes(asiento)) {
    mensaje = `Felicitaciones, el asiento número ${asiento} está disponible`;
  } else {
    mensaje = `Lo sentimos, el asiento número ${asiento} está ocupado, pero aún quedan ${array.length} asientos disponibles`;
  }
  return mensaje;
}
console.log(asientosDisponibles([15, 28, 44, 45, 70], 50));
console.log(asientosDisponibles([15, 28, 44, 45, 70], 15));
