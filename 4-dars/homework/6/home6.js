// 6 - vazifa;
let number = prompt("Son kiriting");
let sum = 0;

while (number.length > 1) {
  sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  number = String(sum);
}

alert(sum);
