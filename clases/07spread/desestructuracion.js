let comprasgenerales = ["leche", "pan", "queso"];
let comprasSecundarias = ["tornillos", "sierra", "martillo"];

let comprasPorCategoria = {
  ...comprasgenerales,
  ...comprasSecundarias,
  montoTotal: 150000,
  supermercado: "Coto",
};
console.log(comprasPorCategoria);

function miFuncion(param, param2, ...rest) {
  console.log(rest);
}

miFuncion(2, 4, [], "hola", 4, true, false, "jorge", { a: 1 });
