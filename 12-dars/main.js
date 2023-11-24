// let getSum = (n) => {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i * (n - i + 1 );
//   }
//   return sum;
// };
// let result = getSum(4);
// console.log(result);

// const getSumDigitNumbers = (n) =>
//   n
//     .toString()
//     .split("")
//     .reduce((acc, el) => acc + +el, 0);

// const getSumDigits = (arr) => arr.map((el) => getSumDigitNumbers(el));
// const result = getSumDigits([12322, 2323, 2323, 564543]);
// console.log(result);

// let arr = [1221, 23, 23232, 5767];

// let getDigitNumber = arr.map((item) => item.toString().length);

// console.log(getDigitNumber);

// const students = [
//   { name: "Abdulaziz", percent: 96, grade: 5 },
//   { name: "Diyorbek", percent: 84, grade: 4 },
//   { name: "Nodirbek", percent: 93, grade: 5 },
//   { name: "Behro’z", percent: 65, grade: 3 },
//   { name: "Jurabek", percent: 90, grade: 5 },
//   { name: "Umrzoq", percent: 75, grade: 4 },
// ];

// let n = 4;
// let getAvarage = (students, n) => {
//   let avarge = 0;
//   let result = 0;
//   for (let i of students) {
//     if (i.grade === n) {
//       avarge++;
//       result += i.percent;
//     }
//   }
//   return (result = result / avarge);
// };

// const natija = getAvarage(students, n);
//

first: for (let i = 0; i < 10; i++) {
  second: for (let j = 0; j < 10; j++) {
    if (j === 5) continue first;
    if (i === 5) continue second;
    console.log(i, j);
  }
}
