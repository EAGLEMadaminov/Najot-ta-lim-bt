// // let elImage = document.querySelector(".image");

// // console.log(elImage.getAttribute("alt"));

// // let i = 0;
// // elImage.setAttribute("src", images[i]);

// // setInterval(() => {
// //   if (++i === images.length) {
// //     i = 0;
// //   }
// //   elImage.setAttribute("src", images[i]);
// // }, 1000);

// let elBtn = document.querySelector(".btn");
// elBtn.addEventListener("contextmenu", () => {
//   alert("Salom");
// });

// let elDiv = document.querySelector("div");

// // elDiv.addEventListener("mouseenter", () => {
// //   console.log("Mishka kirdi");
// // });

// // elDiv.addEventListener("mouseleave", () => {
// //   console.log("Mishka chiqdi");
// // });

// // elDiv.addEventListener("mouseover", () => {
// //   console.log("over");
// // });

// // elDiv.addEventListener("mouseout", () => {
// //   console.log("out");
// // });

// let elResult = document.querySelector(".result");
// let elAddBtn = document.querySelector(".add");
// // let elMinBtn = document.querySelector(".min");
// let elResetBtn = document.querySelector(".reset");
// let n = 0;
// elAddBtn.addEventListener("click", () => {
//   n++;
//   elResult.textContent = n;
// });
// // elMinBtn.addEventListener("click", () => {
// //   n--;
// //   elResult.textContent = n;
// // });
// elResetBtn.addEventListener("click", () => {
//   elResult.textContent = 0;
//   n = 0;
// });
let lastX;
let lastY;
const difference = 50;
document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  if (lastY && lastX)
    if (Math.abs(lastX - x) < difference || Math.abs(lastY - y) < difference)
      rerurn;

  let div = document.createElement("div");
  let color = "#" + Math.random().toString(16).slice(2, 8);
  div.classList.add("effect");
  div.style.backgroundColor = color;
  div.style.top = y + "px";
  div.style.left = x + "px";
  document.body.append(div);
  lastX = x;
  lastY = y;
});
