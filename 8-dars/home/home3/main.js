let elItems = document.querySelectorAll(".item");
let elWayInput = document.querySelector(".way-input");
let elShowREsultBtn = document.querySelector(".show");
let elShowText = document.querySelector(".show-text");
let elChoose = document.querySelector(".choose");
let n = 0;
elItems.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    n = item.id;
    elChoose.value = item.id;
  });
});

elShowREsultBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (n == 0) {
    alert("Nimada borishni tanlang");
    return;
  }

  elShowText.textContent =
    Math.floor(+elWayInput.value / +n) + " soatda yetib borasiz";
});
elChoose.addEventListener("click", (e) => {
  n = e.target.value;
});
