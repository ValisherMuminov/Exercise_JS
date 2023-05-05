
// let num = prompt("Son kiriting:");
// if (num % 2 == 0) {
//     console.log(num, "Juft son");
// } else {
//    console.log(num, "toq son");
// }
//===========================================================================
let number_x = 30
number_x % 2 == 0 ? console.log("Juft son") : console.log("Toq son");
//===========================================================================
let number = 20;
 if (number % 2 == 0) {
    console.log(number, "Juft son");
} else {
   console.log(number, "Toq son");
}
//===========================================================================
// Ball topish sistemasi
let ball = 55;
if (100 > 86) {
    console.log("A");
} else if (85 > 61) {
    console.log("B");
} else if (60 > 50) {
    console.log("C");
} else ("failed");
//===========================================================================

let fruit = "olma"
fruit === 'olma' && console.log(10000);
fruit !== 'olma' && console.log('Bunday meva yoq');

let fruit1 = "anor";
fruit1 === "anor" && console.log(20000);
fruit1 !== "anor" && console.log("Bunday meva yoq");

let fruit2 = "nok";
fruit2 === "nok" && console.log(12000);
fruit2 !== "nok" && console.log("Bunday meva yoq");

let fruit3 = "gilos";
fruit3 === "olma" && console.log(10000);
fruit3 !== "olma" && console.log("Bunday meva yoq");
//===========================================================================

function fruits(name) {
    if (name == "olma") {
        return 10000;
    } else if (name == "nok") {
        return 12000;
    } else if (name == "anor") {
        return 20000;
    } else return "bunde meva yoq";
}
const response = fruits("gilos");
console.log(response);
//===========================================================================

let fruit_a = "nok";
switch (fruit_a) {
    case "nok":
        console.log('Nokning narxi:', 10000);
        break;
    case "anor":
        console.log('Anorning narxi:', 12000);
        break;
    case "olma":
        console.log('Olmaning narxi:', 20000);
        break;
    default:
        console.log("Bunday meva yoq");
}

//===========================================================================

let x = 15;
x % 3 == 0 && console.log("3 ga bolinadi");
let y = 15;
y % 5 == 0 && console.log("5 ga bolinadi");
let z = 15;
z % 3 && 5 == 0 && console.log("3 va 5  ga bolinadi");
//===========================================================================

function myFunction(a) {
  if (a % 3 && 5 === 0) {
    console.log("3ga bolinadi");
  }
  let result2 = a / 3 && 5;
  return result2;
}
let result2 = myFunction(25);
console.log(result2);