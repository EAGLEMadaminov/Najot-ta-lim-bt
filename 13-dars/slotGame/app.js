let fruits = ["🍌", "🍏", "🍒", "🍇", "🍐"];

let elPlayBtn = document.querySelector(".play-btn");
let elItems = document.querySelectorAll(".item");
let usedItems = [];
let showFruits = () => {
  usedItems = [];
  elItems.forEach((item) => {
    let randomNum = Math.floor(Math.random() * fruits.length);
    item.textContent = fruits[randomNum];
    usedItems.push(fruits[randomNum]);
  });
};
showFruits();

elPlayBtn.addEventListener("click", function () {
  setTimeout(showFruits, 200);
  setTimeout(showFruits, 400);
  setTimeout(showFruits, 600);
  setTimeout(showFruits, 800);
  setTimeout(showFruits, 1000);
  setTimeout(showFruits, 1200);

  setTimeout(() => {
    let yutuq = 0;
    let set = new Set([...usedItems]);
    if (set.size === 1) {
      yutuq = 1_000_000;
    } else if (set.size === 2) {
      yutuq = 500_000;
    } else {
      yutuq = 0;
    }
    alert(`Siz ${yutuq} pul yutdingiz`);
  }, 1400);
});
