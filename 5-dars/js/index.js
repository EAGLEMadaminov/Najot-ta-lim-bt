// // // nested
// // // labeled

// // // lyuboy: for (let i = 0; i < 10; i++) {
// // //   boshqa: for (let j = 0; j < 10; j++) {
// // //     if (j === 5) {
// // //       continue lyuboy;
// // //     } else if (j === 8) {
// // //       break;
// // //     }
// // //     console.log(i, j);
// // //   }
// // // }

// // // function declaration
// // function nimadir() {
// //   let a = 1;
// //   console.log(a + 1);
// // }
// // nimadir();

// // // function expressition
// // let adder = function () {
// //   let num1 = 1;
// //   let num2 = 2;
// //   return num1 + num2;
// // };
// // adder();
// // // arrow
// // // let greeting = () => {
// // //   let str1 = "Hammaga";
// // //   let str2 = "Salom";
// // //   console.log(str1 + str2);
// // // };
// // // greeting();
// // // let a = adder();
// // // console.log(a);

// // // function isPositive(n) {
// // //   if (n > 0) {
// // //     return true;
// // //   } else {
// // //     return false;
// // //   }
// // // }

// // // function isNegative(num) {
// // //   if (num < 0) {
// // //     return true;
// // //   } else {
// // //     return false;
// // //   }
// // // }

// // // console.log(isPositive(-1));
// // // console.log(isNegative(0));

// let i = 0;
// function logger() {
//   i++;
//   console.log("Ishga tushdi", i);
// }
// // // logger();
// // let tId = setTimeout(logger, 1000);
// // let iId = setInterval(logger, 1000);
// // clearTimeout(tId);
// // clearInterval(iId);

// // setTimeout(() => {
// //   clearInterval(iId);
// // }, 1000);

// // function adder(num1 = 1, num2 = 2) {
// //   //   num1 ||= 1;
// //   //   num2 ||= 2;
// //   return num1 + num2;
// // }

// let red = "Qizil";
// let yellow = "Sariq";
// let green = "Yashil";

// function redLight() {
//   console.log(red);
// }
// function yellowLight() {
//   console.log(yellow);
// }
// function greenLight() {
//   console.log(green);
// }

// function tl() {
//   redLight();

//   setTimeout(() => {
//     yellowLight();
//     setTimeout(() => {
//       greenLight();
//       setTimeout(yellowLight, 5000);
//     }, 2000);
//   }, 5000);
// }
// tl();
// setInterval(tl, 14_000);

// let arr = ["olma", "anor", "ananas"];
// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   let l = "";
//   for (let j = 0; j < arr[i].length; j++) {
//     if (j % 2 === 0) {
//       l += arr[i][j].toUpperCase();
//     } else {
//       l += arr[i][j];
//     }
//   }
//   newArr.push(l);
// }
// console.log(newArr);

// labelled for
// birinchi: for (let i = 0; i < 10; i++) {
//   ikkinchi: for (let j = 10; j > 1; j--) {
//     if (i === 5 && j===5) {
//       continue birinchi;
//     } else if(j===7){
//       continue ikkinchi
//     }
//     console.log(i, j);
//   }
// }

let i=0
function logger(){
  i++
  console.log("Ishga tushdi", i)
}
let tId = setInterval(logger, 1000);

setTimeout(() => {
  clearInterval(tId);
}, 3000);
