let burgers = JSON.parse(localStorage.getItem("burger"));
let elShowElements = document.querySelector(".show-elements");

burgers.forEach((item) => {
  let elementsDiv = document.createElement("div");
  let date = document.createElement("span");
  date.style.fontSize = "18px";
  date.textContent = `${item.date.day}.${item.date.month} date: ${item.date.date}`;
  let elOrderedList = document.createElement("ol");
  let elBread = document.createElement("li");
  elBread.textContent = "Bread";
  elOrderedList.prepend(elBread);
  item.burger.forEach((one) => {
    let elProduct = document.createElement("li");
    elProduct.textContent = one.item;
    elOrderedList.append(elProduct);
  });
  let elH2 = document.createElement("h2");
  elH2.textContent = `Total ${item.total}`;

  elementsDiv.append(date);
  elementsDiv.append(elOrderedList);
  elementsDiv.append(elH2);
  elShowElements.append(elementsDiv);
});

// jjhjhjh
