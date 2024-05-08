let num = 1;
while (num <= 10) {
  console.log("-------------------------");
  for (let i = 1; i < 11; i++) {
    let resultado = num * i;
    console.log(`${num} * ${i} = ${resultado}`);
  }
  console.log("-----------------------------");
  num++;
}
