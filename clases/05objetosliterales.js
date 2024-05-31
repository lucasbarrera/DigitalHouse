const vehicle01 = {
  make: "Ford",
  model: "Ranger",
  year: 2024,
  color: "Gris grafito",
  inStock: true,
  extras: ["deflectores de ventanillas", "lona marina de caja"],
  printInfo() {
    console.log(`informacion del vehiculo 
    -------------------------------------
    Fabricante: ${this.make}
    Modelo:     ${this.model}
    Año:        ${this.year}
    Color:      ${this.color}
    En stock:   ${this.inStock ? "Si" : "No"}
    Extras:     ${this.extras.join("\n\t\t")}
    -------------------------------------
    `);
  },
};

function Vehicle(make, model, year, color, inStock, extras) {}

const vehicle02 = new Vehicle("Fiat", "Toro", 2024, "Blanco", false, [
  "matafuegos",
  "malacate",
]);

vehicle01.printInfo();
