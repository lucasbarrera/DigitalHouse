const express = require("express");
const { appendFile } = require("fs");
const path = require("path");

app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.listen(3000, () => {
  console.log("servidor corriendo en el puerto 3000");
});
