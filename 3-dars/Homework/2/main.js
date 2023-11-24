// 2-Vazifa   juft yoki toq
let num2 = +prompt("Son kiriting");

if (num2 == 0) {
  alert("Kiritilgan son 0");
} else if (num2 % 2 == 1) {
  alert("Kiriltilgan son toq", num2);
} else if (num2 % 2 == 0) {
  alert("Kiritilgan son juft", num2);
}
