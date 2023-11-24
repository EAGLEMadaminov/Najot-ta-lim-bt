let elBtn = document.querySelector(".btn");
let elImage = document.querySelector("img");

elBtn.addEventListener("click", () => {
  elImage.classList.toggle("show");
  elImage.classList.toggle("show1");
});
