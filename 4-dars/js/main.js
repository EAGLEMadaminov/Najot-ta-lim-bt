// loop in js
// 1 for, for ...in, for ..of
// 2 while, do while
const fruits = [
  "apple",
  "banana",
  "orange",
  "strawberry",
  "watermelon",
  "pineapple",
  "mango",
  "kiwi",
  "grape",
  "pear",
  "cherry",
  "blueberry",
  "lemon",
  "peach",
  "plum",
  "raspberry",
  "avocado",
];

// 1 -for
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

let str = "Lorem ipsum dolor set";

// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(str[i]); // teskari tartibda chiqarib beradi.
// }

// 2 for in
// for (let i in fruits) {
//   console.log(fruits[i]);
// }
// for (let i in str) {
//   console.log(str[i]);
// }

// // for in in object
// let person = {
//   FName: "Eshamt",
//   LName: "Toshmat",
//   email: "we@d",
// };

// for (let key in person) {
//   console.log(key, person[key]);
// }

// // // for of loop
// console.time("for of");
// for (let fruit of fruits) {
//   console.log(fruit); //  bu yerda fruit fruits ni elementi indexsi emas.
// }
// console.timeEnd("for of");

// console.time("for");
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// console.timeEnd("for");

// for of va for in kichik data lar uchun tezroq ishlaydi lekin katta
// ko'proq data lar uchun for ni tezroq ishlaydi.

// while
// let password = "1234";
// let input = prompt("Parolni kiriting");

// let found = false;
// let chances = 6;

// while false  qiymat bo'lgungcah davom etadi

// while (!found) {
//   if (password === input) {
//     found = true;
//   } else {
//     input = prompt("Topolmadingiz qaytadan parolkiriting");
//   }
// }

// while (password !== input) {
//   input = prompt("Topolmadingiz qaytadan parolkiriting");
// }

// do {
//   console.log(123);
// } while (false);

// let password = "1234";
// do {
//   input = prompt("Parolni qayta kiriting");
// } while (password !== input);

// let number = +prompt("Son kiriting");
// let randomnum = Math.floor(Math.random() * 10);
// let choose = true;
// while (choose) {
//   if (randomnum === number) {
//     choose = false;
//     console.log("Topdingiz");
//     console.log(randomnum);
//   } else {
//     number = +prompt("Qayta son kiriting");
//   }
// }
