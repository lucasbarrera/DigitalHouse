function reporteDePasajeros(cantidadEstaciones) {
  let cantidadDePasajeros = 200;
  let reporte = ["En la estación 0 hay 200 pasajeros arriba del tren"];
  let i;
  for (i = 1; i <= cantidadEstaciones; i++) {
    if (i != 5) {
      cantidadDePasajeros += 20;
    } else {
      cantidadDePasajeros += 40;
    }
    reporte.push(
      "En la estacion " +
        i +
        " hay " +
        cantidadDePasajeros +
        " pasajeros arriba del tren"
    );
  }
  return reporte;
}
console.log(reporteDePasajeros(3));
