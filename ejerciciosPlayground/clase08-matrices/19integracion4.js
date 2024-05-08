function laClaveSecreta(array) {
  let array1 = array.reverse();
  let array2 = array1.filter((i) => i != "*");
  let array3 = array2.join("");
  return array3;
}
console.log(
  laClaveSecreta([
    "s",
    "*",
    "e",
    "n",
    "u",
    "l",
    " ",
    "s",
    "*",
    "e",
    " ",
    "a",
    "í",
    "*",
    "d",
    " ",
    "l",
    "*",
    "E",
    "*",
  ])
);
