const fs = require("fs");

fs.readFile(
  "C:/Users/Lenovo/Desktop/LUCAS/DigitalHouse/ejerciciosPlayground/clase09-objetosymodulos/22mensaje.txt",
  "utf-8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  }
);
