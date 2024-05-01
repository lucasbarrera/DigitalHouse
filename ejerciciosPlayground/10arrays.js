let electrodomesticos = [
  "heladera",
  "lavarropas",
  "secarropas",
  "microondas",
  "cocina",
  "cafetera",
];

console.log(electrodomesticos[2], electrodomesticos[5], electrodomesticos[3]);

let primero = electrodomesticos.shift();
console.log(electrodomesticos);

electrodomesticos.push(primero);
console.log(electrodomesticos);

electrodomesticos.push("secador de pelo", "plancha");
console.log(electrodomesticos);

console.log("cantidad de elementos: ", electrodomesticos.length);

if (electrodomesticos.includes("cocina")) {
  console.log("producto encontrado");
} else {
  console.log("el producto buscado no existe");
}

let producto = electrodomesticos.indexOf("cocina");
if (producto != -1) {
  console.log("producto encontrado");
} else {
  console.log("el producto buscado no existe");
}

let frase = electrodomesticos.join(" ");
console.log(frase);

console.log(frase.length);

frase.replace("heladera", "frezer");

function reemplazoFastFast(texto, palabra1, palabra2) {
  return console.log(texto.replace(palabra1, palabra2));
}
reemplazoFastFast("esta es una mala idea", "mala", "buena");
