let carasDeDado = [
  "Toma 1",
  "Toma 2",
  "Pon 1",
  "Pon 2",
  "Todos ponen",
  "Toma Todo",
];
function juegoDeTrompito(array, numero) {
  let numAletorio = Math.random(5);
  let mensaje = "";
  switch (numAletorio) {
    case 0:
      mensaje = array[0];
      break;
    case 1:
      mensaje = array[1];
      break;
    case 2:
      mensaje = array[2];
      break;
    case 3:
      mensaje = array[3];
      break;
    case 4:
      mensaje = array[4];
      break;
    case 5:
      mensaje = array[5];
      break;

    default:
      break;
  }
  return mensaje;
}
console.log(juegoDeTrompito(carasDeDado, 4));
