// let elBtn = document.querySelector(".btn");
// let elCheckedInput = document.querySelector("input:checked");

// elBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(elCheckedInput.value);
// });

// let a = 14579;
// let arr = String(a).split("");
// let result = [];
// for (let i = 1; i < Number(arr[arr.length - 1]); i++) {
//   if (arr.includes(`${i}`) === false) {
//     result.push(i);
//   }
// }
// console.log(result);

function Triangle(height) {
  for (let i = 1; i <= height; i++) {
    let row = "";
    for (let j = height - 1; j > 0; j--) {
      row += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}
Triangle(5);
