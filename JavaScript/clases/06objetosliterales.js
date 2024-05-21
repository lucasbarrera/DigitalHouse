const crypto = require("node:crypto");
function Pet(name, bread) {
  this.id = crypto.randomUUID();
  (this.name = name), (this.bread = bread);
}

const pet01 = new Pet("Evaristo", "Siames");
const pet02 = new Pet("Nairobi", "Mestizo");

console.log(pet01);
console.log(pet02);
