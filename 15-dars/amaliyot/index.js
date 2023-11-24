// let elTheme = document.querySelector(".theme");
// let elSize = document.querySelector(".size");
// let elSaveBtn = document.querySelector(".save-btn");
// let elClearBtn = document.querySelector(".clear-btn");

// let mode, fontSize;
// elTheme.addEventListener("change", (e) => {
//   mode = e.target.value;
// });

// elSaveBtn.addEventListener("click", () => {
//   localStorage.setItem("theme", elTheme.value);
//   document.body.classList.add(localStorage.getItem("theme"));
//   localStorage.setItem("size", elSize.value);
//   document.body.classList.add(localStorage.getItem("size"));
// });

// let theme = localStorage.getItem("theme");
// let size = localStorage.getItem("size");
// elTheme.value = theme ? theme : "light";
// elSize.value = size ? size : "small";
// document.body.classList.add(theme);
// document.body.classList.add(size);

// elClearBtn.addEventListener("click", () => {
//   localStorage.clear();
//   elTheme.value = "light";
//   elSize.value = "small";
// });

// const b = {};
// b = {};

// let cars = ["Tesla", "Spark", "Lasetti", "Tesla", "Spark"];

// let uniqueCars = new Set(cars);
// console.log([...uniqueCars]);

// let person = new Map([
//   [{}, 3],
//   [() => {}, 234],
// ]);
// console.log(person);

// let a = ["apple", "banan", "cherry"];
// let b = ["potato", "onion", "carrot"];
// let c = ["melon", "water melon", "pumpkin"];

// let list = [...a, ...b, ...c];
// console.log(list);

// let person1 = {
//   fName: "Eshmat",
//   age: 32,
// };
// let person2 = {
//   ...person1,
//   age: 34,
//   ...b
// };
// console.log(person2)

function a({ nimadir, ...rest }) {
  console.log(rest);
}
a({ nimadir: "lyuboy", boshqa: "moshina", yana: "boshqa" });

function getUser() {
  return {
    status: 200,
    message: "ok",
    data: {
      fName: "Eshmat",
      age: 32,
      id: 34534,
    },
  };
}
let { data: user } = getUser();
console.log(user.id);
