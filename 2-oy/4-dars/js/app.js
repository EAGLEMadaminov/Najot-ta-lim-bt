// let str = "dfs";
// var a = 1;

// {
//   var a = 2;
// }
// function b() {}

// const c = () => {
//   var a = 3;
//   console.log(a);
// };
// c();

// if (true) {
//   var a = 4;
//   let str = "dsfd";
// }
// console.log(a, str);

// Closure

// let a = 1;
// if (true) {
//   let a = 2;
//   console.log(a);
//   if (true) {
//     let b = 3;
//     console.log(a, b);
//     if (true) {
//       let c = 4;
//     }

//     if (true) {
//       console.log(c);
//     }
//   }
// }

// function balance() {
//   let b = 100;

//   return {
//     topUp: (amount) => {
//       b += amount;
//       console.log(b);
//     },
//     withDraw: (amount) => {
//       b -= amount;
//       console.log(b);
//     },
//   };
// }

// let JasurbekBalance = balance();
// let JavohirBalance = balance();

// JasurbekBalance.topUp(1000);
// JavohirBalance.topUp(4000);

// JasurbekBalance.withDraw(300);
// JavohirBalance.withDraw(500);

// Hoisting

// console.log(a);
// var a = 1;

// a();
// // b();
// c();

// function a() {
//   console.log(123); /// 123
// }
// var b = function () {
//   console.log(345); /// b is not function
// };
// Birinchi js var bilan elon qilingan o'zgaruvchilarni tepega
// olib chiqadi va uni undefinedga tenglaydi. Keyin unga funcsiyani o'zlashtiradi shunda
// undefined() bo'ladi bu funcsiya emas

// const c = () => {
//   console.log(456);  // ReferenceError: Cannot access 'c' before initialization
// };
// var c = () => {
//   console.log(456); // Typeerror c is not function
// };

// console.log(Boolean([]));
// console.log(Number("true"));

// console.log([] + []);
// console.log(Boolean(""));

// console.log(window.navigator.clipboard.writeText("Hello world"));
// window.navigator.clipboard.writeText(`hhtps://google.com`);
// console.log(window);

// setTimeout(() => {
// //   window.close();
// //   window.open("https://google.com");
//   window.location.replace("https:google.com");
// }, 3000);

// sum(5)(-4);

// function sum(a) {
//   return (b) => {
//     console.log(a + b);
//   };
// }

// console.log(window.navigator.clipboard.writeText("hello world"));

// console.log(+false);
// a();

// // b();

// c();

// function a() {
//   console.log("123");
// }
// // var b = () => {
// //   console.log(345);
// // };

// const c = () => {
//   console.log(543);
// };
// let a = f(); // 1
// const b = 2;
// function f() {
//   return b;
// }

// console.log(a);
// let phrase = "Hello";

// function say(name) {
//   alert(`${phrase} ${name}`);
// }
// say("john");

// let count = 0;
// function a() {
//   console.log(++count);
//   a();
// }
// a();
