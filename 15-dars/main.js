// let elDecBtn = document.querySelector(".dec");
// let elText = document.querySelector(".zero");
// let elIncreBtn = document.querySelector(".increment");

// elDecBtn.addEventListener("click", () => {
//   elText.innerHTML++;
//   localStorage.setItem("newValue", elText.innerHTML);
// });

// elIncreBtn.addEventListener("click", () => {
//   elText.innerHTML--;
//   localStorage.setItem("newValue", elText.textContent);
// });

// let greeting = document.querySelector(".greeting");

// function saveName() {
//   let fName = input.value;
//   localStorage.setItem("fName", fName);
//   greeting.innerHTML =
//     "<h1>Salom " +
//     fName +
//     "!<h1> <button class='btn'  onclick='changeName()'>O'zgartirtish</button>";
// }

// function changeName() {
//   localStorage.removeItem("fName");
//   greeting.innerHTML =
//     "input id=fName-input' class='form-control' placeholder='Iltimos ismingizni kiriting'/>";
// }

// let btn = document.querySelector("button");
// let input = document.querySelector("input");
// let ul = document.querySelector("ul");

// let cars = JSON.parse(localStorage.cars || "[]");
// function appendLi(text) {
//   let li = document.createElement("li");
//   li.classList.add("list-group-item");
//   li.textContent = textContent;
//   ul.append(li);
//   li.addEventListener("dblclick", () => {
//     let index = cars.indexOf(text);
//     cars.splice(index, 1);
//     localStorage.setItem("cars", JSON.stringify(cars));
//     li.remove();
//   });
// }
// let a ={

// }
let elSelect = document.querySelector("select");
elSelect.addEventListener("click", (e) => {
  localStorage.setItem("lang", e.target.value);
  console.log(e.target.value);
});
let lang = localStorage.getItem("lang") || "uz";
elSelect.value = lang;

let elBtn = document.querySelector(".btn");

elBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  console.log(document.body.className);
  if (localStorage.getItem("mode") === "dark") {
    localStorage.setItem("mode", "light");
  } else {
    localStorage.setItem("mode", "dark");
  }
});
document.body.className = localStorage.getItem("mode");
