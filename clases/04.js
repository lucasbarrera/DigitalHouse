const date = new Date();
console.log(date);
const today = date.getDay();
console.log(today);
// determinar si es lunes, martes, miercoles, jueves, viernes, sabado, o domingo
let result = "Hoy es ";
if (today == 0) {
  result += "domingo";
} else if (today == 1) {
  result += "lunes";
} else if (today == 2) {
  result += "martes";
} else if (today == 3) {
  result += "miercoles";
} else if (today == 4) {
  result += "jueves";
} else if (today == 5) {
  result += "viernes";
} else if (today == 6) {
  result += "sabado";
} else {
  result += "osvlado";
}

console.log(result);

switch (today) {
  case 0:
    result += " de nuevo domingo";
    break;
  case 1:
    result += " de nuevo lunes";
    break;
  case 2:
    result += " de nuevo martes";
    break;
  case 3:
    result += " de nuevo miercoles";
    break;
  case 4:
    result += " de nuevo jueves";
    break;
  case 5:
    result += " de nuevo viernes";
    break;
  case 6:
    result += " de nuevo sabado";
    break;
  default:
    result += " de nuevo osvaldo";
    break;
}
console.log(result);
