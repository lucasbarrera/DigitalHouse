const cursosValores = [
  ["html5", 4000],
  ["css3", 5000],
  ["javascript", 10000],
  ["react", 7000],
  ["nodejs", 15000],
];

const carrito = ["NODEJS", "CSS3", "HTML5"];
/**
 * @param {array multidimencional} listaCursos
 * @param {array} cursosComprados
 * @returns {number}
 */
function calculaTotal(listaCursos, cursosComprados) {
  let total = 0;
  for (let i = 0; i < cursosComprados.length; i++) {
    for (let j = 0; j < listaCursos.length; j++) {
      if (listaCursos[j][0].toUpperCase() === cursosComprados[i]) {
        total += listaCursos[j][1];
      }
    }
  }
  return total;
}

function mostrarTotal(nombre, apellido, listaCursos, cursosComprados, fn) {
  let stringCursosComprados = "";
  for (let i = 0; i < cursosComprados.length; i++) {
    stringCursosComprados += `
        ${i + 1}.- ${cursosComprados[i]}
        `;
  }
  let total = fn(listaCursos, cursosComprados);
  return `Estimado ${nombre} ${apellido}, en función de los cursos seleccionados:
    ${stringCursosComprados}
    El monto total a pagar es de: $${total}.
    Bienvenido a la gran aventura Digital House.`;
}

console.log(
  mostrarTotal("Lucas", "Barrera", cursosValores, carrito, calculaTotal)
);
