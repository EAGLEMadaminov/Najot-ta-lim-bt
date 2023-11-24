let elInput = document.querySelector(".product-input");
let elAddBtn = document.querySelector(".product-btn");
let elList = document.querySelector("ul");
let list = [];
let n = 0;

function addToList() {}
elAddBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (!elInput.value) {
    return;
  }
  let value = elInput.value.toLowerCase().trim();
  if (list.includes(value)) {
    alert("Bu narsa bor");
    return;
  }
  list.push(value);
  ++n;
  let elLi = document.createElement("li");
  let elNum = document.createElement("p");
  let elProduct = document.createElement("b");
  let elRemoveBtn = document.createElement("button");
  let elEditBtn = document.createElement("button");
  elRemoveBtn.textContent = "❎";
  elRemoveBtn.classList.add("remove-btn");
  elEditBtn.classList.add("edit-btn");
  elEditBtn.textContent = "✍";
  elProduct.textContent = value;
  localStorage.setItem("product", JSON.stringify(value));
  elNum.textContent = n;
  elRemoveBtn.addEventListener("click", (e) => {
    console.log(e.target.parentElement.remove());
  });
  elEditBtn.addEventListener("click", () => {
    elProduct.setAttribute("contenteditable", "true");
    elProduct.focus();
  });
  elProduct.addEventListener("blur", () => {
    elProduct.setAttribute("contenteditable", "false");
  });
  elLi.appendChild(elNum);
  elLi.appendChild(elProduct);
  const attr = document.createAttribute("id");
  attr.value = n;
  elLi.setAttributeNode(attr);
  elLi.appendChild(elEditBtn);
  elLi.appendChild(elRemoveBtn);
  elList.appendChild(elLi);
  elInput.value = "";
  elInput.focus();
  console.log(list);
});

elList.addEventListener("click", (e) => {
  if (e.target.className === "remove-btn") {
    elList.removeChild(li);
  }

  if (e.target.className == "edit-btn") {
    console.log(elList.removeChild);
  }
});
