let a = Number(prompt("Yoshingizni kiriting!"));
let b = Number(prompt("Nechchiga kirishni xoxlaysiz"));
let c = 2023 - a;
let first = "Siz " + c + " yilsiz.";
let d;

if (b > a) {
  d = b - a;
  console.log(first + " Siz " + d + " yildan keyin " + b + " ga to'lasiz");
} else {
  console.log("Yoshingiz katta");
}
