// // 5-vazifa
let number = +prompt("Son kiriting");
let reslut = 0;

for (let i = 1; i < number; i++) {
  if (number % i === 0) {
    reslut += i;
  }
}
console.log(reslut);
if (reslut == number) {
  alert("Siz kiritgan son murakkab");
} else {
  alert("Siz kiritgan son murakkab emas");
}
