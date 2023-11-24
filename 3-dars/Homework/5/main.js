// 5-vazifa
let randomNum = Math.floor(Math.random() * 10000000) + 1;

let base16 = randomNum.toString(16);
base16 = base16.padStart(6, "0");
base16 = base16.split("");
base16.unshift("#");
alert(base16.join(""));
