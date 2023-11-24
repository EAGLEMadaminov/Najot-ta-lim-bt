// 7-vazifa
let dollar = +prompt("Dollar kursini kiriting");
let yevro = +prompt("Yevro kursini kiriting");
let ticket = 300 * dollar;
let living = 500 * dollar;
let picnic = 300 * yevro;
let allReired = ticket + living + picnic;
let name = prompt("Ismingizni kiriting");
let userMoney = +prompt("Qancha pulingiz bor");
if (userMoney >= allReired) {
  alert(name + " siz yevropaga bora olasiz");
} else if (userMoney < allReired) {
  let min = allReired - userMoney;
  alert(
    "Umumiy xarajat " + allReired+
    " "+ name + 
    " siz yana " + min + " miqdorida  pul ishlashingiz kerak"
  );
}
