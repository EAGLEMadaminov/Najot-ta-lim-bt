// // 4- vazifa
let number = +prompt("Butun son kiriting");
let result = true;
for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    result = false;
  } else {
    result = true;
  }
}
if (result) {
  alert("Siz kiritgan son tub ");
} else {
  alert("Siz kiritgan son tub emas");
}
