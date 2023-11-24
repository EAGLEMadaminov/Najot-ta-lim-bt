// 1-vazifa  lbs
let userNum = document.querySelector(".userNum");
const elBtn = document.querySelector(".btn");
const elShow = document.querySelector(".show");

elBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(userNum.value);
  if (userNum.value) {
    changeToKg(+userNum.value);
  }
  userNum.value = "";
  userNum.focus();
});
function changeToKg(num) {
  elShow.textContent = num / 0.453592;
}
// changeToKg(500);
