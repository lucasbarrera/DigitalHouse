// Crear cuatro variables y asignar a cada una las siguientes cadenas de texto:
// i. Graduados de HTML5: “30 45 25 34 18 23 16 50 72 70”
// ii. Graduados de CSS3: “50 45 71 34 23 45 65 75 63 43 74 70”
// iii. Graduados de JAVASCRIPT: “70 65 58 45 23 57 34 17 72”
// iv. Graduados de NODEJS: “45 56 73 34 65 72 70 32”

let HTML5 = "30 45 25 34 18 23 16 50 72 70";
let CSS3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let JAVASCRIPT = "70 65 58 45 23 57 34 17 72";
let NODEJS = "45 56 73 34 65 72 70 32";

/**A cada una de las variables que contienen las cadenas de texto, habrá que
convertirlas a arrays, separando cada elemento por una coma */

let cadHTML5 = HTML5.split(" ");
let cadCSS3 = CSS3.split(" ");
let cadJAVASCRIPT = JAVASCRIPT.split(" ");
let cadNODEJS = NODEJS.split(" ");

/*
Crear una función que reciba como parámetros los cuatro arrays de los
alumnos graduados y un número comprendido entre el 1 y el 4, donde:
i. 1 = HTML5
ii. 2 = CSS3
iii. 3 = JAVASCRIPT
iv. 4 = NODEJS
La función tendrá la responsabilidad de calcular y devolver el promedio de
graduados del curso indicado. Si el parámetro del curso es un valor diferente
del 1 al 4, deberá retornar un mensaje al usuario indicando cuales son los
valores asignados a cada curso.
 */

function calcular(cadHTML5, cadCSS3, cadJAVASCRIPT, cadNODEJS, opcion) {
  let acumular = 0;
  let promedio = 0;

  if (opcion < 1 || opcion > 4) {
    console.log("Opción no esta en el listado de búsqueda");
  } else {
    switch (opcion) {
      case 1:
        for (let i = 0; i < cadHTML5.length; i++) {
          acumular += parseInt(cadHTML5[i]);
        }
        promedio = acumular / cadHTML5.length;
        break;
      case 2:
        for (let i = 0; i < cadCSS3.length; i++) {
          acumular += parseInt(cadCSS3[i]);
        }
        promedio = acumular / cadCSS3.length;
        break;
      case 3:
        for (let i = 0; i < cadJAVASCRIPT.length; i++) {
          acumular += parseInt(cadJAVASCRIPT[i]);
        }
        promedio = acumular / cadJAVASCRIPT.length;
        break;
      case 4:
        for (let i = 0; i < cadNODEJS.length; i++) {
          acumular += parseInt(cadNODEJS[i]);
        }
        promedio = acumular / cadNODEJS.length;
        break;
    }
  }
  return promedio;
}

console.log(calcular(cadHTML5, cadCSS3, cadJAVASCRIPT, cadNODEJS, 3));
