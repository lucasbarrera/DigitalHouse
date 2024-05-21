let modulo = require("./collectibles.js");

let hotToys = modulo.importar("Hot Toys");

let bandai = modulo.importar("Bandai");

let starWars = modulo.importar("Star Wars");

// console.log(hotToys);
// console.log(bandai);
// console.log(starWars);

let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

// console.log(unifiedCollectibles);

let collectibles = {
  figuras: unifiedCollectibles,
  listFigures: function () {
    this.figuras.forEach((figura) => {});
  },
  figuresByBrand: function (marca) {
    let figuasdelamarca = this.figuras.filter(
      (figura) => figura.marca == marca
    );
    return figuasdelamarca;
  },
};

// console.log(collectibles.listFigures();
console.log(collectibles.figuresByBrand("Hot Toys"));
