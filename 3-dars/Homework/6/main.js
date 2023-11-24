// 6-vazifa
let randomnum = Math.floor(Math.random() * 10 + 1);
let userNum = +prompt("1-10 orasida son kiriting");

if (randomnum === userNum) {
  alert("To'g'ri topdingiz");
} else if (randomnum > userNum) {
  alert("Siz kiritgan son kichik" + " Men o'ylagan son " + randomnum);
} else if (randomnum < userNum) {
  alert("Siz kiritgan son katta" + " Men o'ylagan son " + randomnum);
}
