// console.log(Math.E);
// console.log(Math.PI);
// console.log(Math.LN10);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
// console.log(Math.abs(-10));
// console.log(Math.max(20, 30, -10, 64));
// console.log(Math.min(20, 30, -10, 64));
// console.log(Math.pow(2, 4));
// console.log(Math.sqrt(121));

// random numbers
// Math.floor(Math.random()*(max-min+1)+min)

// Math.floor(-3.14)  //-4
// parseInt(-3.14); // -3
// Math.ceil(-3.14); // -3
// Math.round(3.14)   // eng yaqin butun sonni olib beradi.

let randomN = Math.floor(Math.random() * 10);

if (randomN == 0) {
  console.log("Juft ham emas, toq ham emas", randomN);
} else if (randomN % 2 == 1) {
  console.log("toq son", randomN);
} else if (randomN % 2 == 0) {
  console.log("Juft son", randomN);
}

let random = 5;
switch (random) {
  case 0: {
    console.log("nol chiqdi");
    break;
  }
  case 1:
  case 2:
  case 3: {
    console.log("yomon");
    break;
  }
  default: {
    console.log("boshqa son");
  }
}
