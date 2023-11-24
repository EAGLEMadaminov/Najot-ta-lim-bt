// // 8-vazifa
let word = prompt("So'z kiriting");
let arr = word.split("");
let newWord = arr.reverse().join("");
if (word === newWord) {
  alert("To'g'ri ");
} else {
  alert("Bu so'z teskarisiga bir xil emas");
}
