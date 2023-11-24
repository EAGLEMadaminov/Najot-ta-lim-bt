let arr = [
  { id: 1, name: "Temur", age: 63, title: "Frontend" },
  { id: 2, name: "Bobur", age: 30, title: "Backend" },
  { id: 3, name: "Rashid", age: 26, title: "Flutter" },
  { id: 4, name: "Jamshid", age: 40, title: "Android" },
  { id: 5, name: "Islom", age: 45, title: "IOS" },
  { id: 6, name: "Sohibjon", age: 20, title: "DevOps" },
  { id: 7, name: "Sohibjon", age: 20, title: "DevOps" },
];
// // 1
// let myFunc = (name) => {
//   if (!name) {
//     console.log("Bunday ism yo'q");
//     return;
//   }
//   let result = arr.filter(
//     (item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase()
//   );
//   console.log(result);
// };
// myFunc("Temur");
// // 2

// let onSort = () => {
//   let nuewa = arr.sort((a, b) => a.age - b.age);
//   console.log(nuewa);
// };
// onSort();

let elSearcleOne = document.querySelector(".searcle-1");
let elSearcleTwo = document.querySelector(".searcle-2");
let elSearcleThree = document.querySelector(".searcle-3");
elSocnd = document.querySelector(".second");

let showLight = () => {
  elSearcleThree.classList.remove("color-3");
  elSearcleTwo.classList.remove("color-2");
  elSearcleOne.classList.add("color-1");
};
let showYellow = () => {
  elSearcleThree.classList.remove("color-3");
  elSearcleOne.classList.remove("color-1");
  elSearcleTwo.classList.add("color-2");
};

let showGreen = () => {
  elSearcleOne.classList.remove("color-1");
  elSearcleTwo.classList.remove("color-2");
  elSearcleThree.classList.add("color-3");
};

let show = () => {
  showLight();
  setTimeout(() => {
    showYellow();
  }, 7000);
  setTimeout(() => {
    showGreen();
  }, 10000);
  setTimeout(() => {
    showYellow();
  }, 17000);
};
show();

setInterval(() => {
  show();
}, 20000);
