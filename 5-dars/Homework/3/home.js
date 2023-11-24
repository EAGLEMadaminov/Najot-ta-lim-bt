// 3-vazifa
let chance = 0;
let number = Math.floor(Math.random() * 10);
let userNum = +prompt("Bir xonali son kiriting");
console.log(number);

console.log;
while (chance < 4) {
  chance++;
  if (userNum === number) {
    console.log("To'g'ri topdingiz");
    chance = 6;
  } else {
    userNum = +prompt("Son kiriting");
  }
}
