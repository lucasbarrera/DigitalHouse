const fs = require("fs");

fs.readFile("./22mensaje.txt", "utf-8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
