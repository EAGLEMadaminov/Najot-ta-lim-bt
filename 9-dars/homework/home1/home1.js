// let elH1 = document.querySelector("h1");
// console.log(elH1);
// let year = +prompt("Yilni kiriting");
// let month = +prompt("Oyni kiriting") - 1;
// let day = +prompt("Kunni kiriting");
// let userHours = +prompt("Soatni kiriting");
// let userMin = +prompt("Minutni kiriting");
// let finish = false;
// let elBoxes = document.querySelectorAll(".box");

// let showTime = () => {
//   let userDate = new Date(year, month, day, userHours, userMin, 0);
//   let nowDate = new Date();
//   let between = userDate.getTime() - nowDate.getTime();
//   if (between < 0) {
//     finish = true;
//     return;
//   }
//   const oneDay = 24 * 60 * 60 * 1000;
//   const oneHour = 60 * 60 * 1000;
//   const oneMin = 60 * 1000;

//   let days = String(Math.floor(between / oneDay)).padStart(2, "0");
//   let hours = String(Math.floor((between % oneDay) / oneHour)).padStart(2, "0");
//   let minuts = String(Math.floor((between % oneHour) / oneMin)).padStart(
//     2,
//     "0"
//   );
//   let seconds = String(Math.floor((between % oneMin) / 1000)).padStart(2, "0");

//   const values = [days, hours, minuts, seconds];
//   elBoxes.forEach((item, index) => {
//     item.firstElementChild.textContent = values[index];
//   });
//   elH1.style.display = "none";
// };
// showTime();
// const count = setInterval(showTime, 1000);
// if (finish) {
//   elH1.style.display = "block";
//   clearInterval(count);
// }

let ul = document.querySelector("ul");
let elLi = document.createElement("li");
elLi.textContent = "Kir yuvish";
let elLi2 = document.createElement("li");
elLi2.textContent = "Ovqat pishirish";
let elLi3 = document.createElement("li");
elLi3.textContent = "Dastur tuzish";
let btn = document.createElement("button");
let elIcon = document.createElement("i");
elIcon.textContent = "icon";
btn.append(elIcon);

ul.append(elLi);
ul.append(elLi2);
ul.prepend(elLi3);
elLi.append(btn);

elLi.addEventListener("dblclick", (e) => {
  e.target.remove();
  document.body.classList.replace("bg-light", "red");
});
elLi.classList.add("salom", "alik", "word");

btn.addEventListener("click", (e) => {
  let element = e.target;
  while (element.tagName !== "BUTTON") {
    element = element.parentElement;
  }
  element.parentElement.remove();
});
