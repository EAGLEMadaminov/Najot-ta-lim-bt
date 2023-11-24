// // 7-vazifa
let sentence = prompt("Ma'lumot kiriting");
let letter = prompt("Belgi kiriting");
let result = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === letter) {
    result++;
  }
}
alert(result + " ta " + letter + " bor");
