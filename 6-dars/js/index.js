// function a() {} // regular function
// let b = function () {}; // function expression
// let c = () => {}; // arrow function

// recursive function
// function recursive(n) {
//   if (n === 0 || n === 1) {
//     return 1;
//   } else {
//     return n * recursive(n - 1);
//   }
// }

// let numbers = [0, [1, [2, [3, [4, [5]]]]]];
// function arrAdder(arr) {
//   console.log(arr[0]);
//   if (Array.isArray(arr[1])) {
//     return arrAdder(arr[1]);
//   } else {
//     return arr[1];
//   }
// }
// arrAdder(numbers);

// function game() {
//   console.log("Ishga tushdi");
//   // ...
//   console.log("To'xtadi");
//   let ask = confirm("Yana o'ynaysizmi");
//   if (ask) {
//     game();
//   }
// }
// game();

// HOF => High Order Function
// Funcsiyani paramets sifatida oluvchi funcsiyalar high order funcsiyalar hisoblanadi.
// function a(b) {
//   b();
// }
// a(function () {});

// function c() {
//   return function () {};
// }

// function adder(str1) {
//   return function (str2) {
//     console.log(str1 + str2);
//   };
// }

// let salomlash = adder("Salom ");
// salomlash("Eshmat");
// salomlash("Toshmat");

// CB => CALL BACK function
// setTimeout(() => {

// }, 1000);
// settimeout ichidagi arrow function  call back function deyiladi

// function balance(name) {
//   let hisob = 1000_000;
//   return function (amount) {
//     hisob += amount;
//     console.log(name + " da " + hisob + " som bor");
//   };
// }

// let eshmatH = balance("Eshmat");
// let toshmatH = balance("Toshmat");
// eshmatH(400000);
// toshmatH(50000);

// IIFE => Imediatly invoked function expression
// (function (number) {
//   console.log(number);
//   return function (str) {
//     alert(str);
//   };
// })(123)("AAAAAAAAAAAA");

let fruits = ["apple", "banana", "orange", "mango", "melon"];
// let cars = [
//   "Matiz",
//   "Spark",
//   "Cobalt",
//   "Gentra",
//   "Tracker",
//   "Malibu",
//   "Tohoye",
// ];

// function eachOf(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// let lyuboy = (item, index, arr) => {
//   console.log(index + 1 + " " + item + " " + arr[index + 1]);
// };
// fruits.forEach(lyuboy);

let users = [
  { id: 1, fName: "Eshmat", age: 31 },
  { id: 2, fName: "Toshmat", age: 32 },
  { id: 3, fName: "Tesha", age: 45 },
  { id: 4, fName: "Bolta", age: 51 },
];
numbers = [1, 2, 7, 3, 45, 6, 8];
let newUsers = users.sort((a, b) => a.age - b.age);
console.log(newUsers);

// let names = [];

// users.forEach((user) => {
//   names.push(user.fName);
// });
// console.log(names);

// let ages = [];

// users.forEach((item, index, arr) => {
//   ages.push(item.age);
//   console.log(item, index, arr);
// });
// console.log(ages);

// let btns = document.querySelectorAll(".btn");

// btns.forEach((item) => {
//   item.addEventListener("mouseover", function () {
//     console.log("Salom");
//   });
// });
// let elDiv = document.querySelector("div");
// elDiv.innerHTML = "<h1>Test</h1>";
// elDiv.innerText = "<h2>Test2 </h2>";
