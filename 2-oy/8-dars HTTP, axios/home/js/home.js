let showItems = document.querySelectorAll(".list-group-item");
let userCount = document.querySelector(".user-count");
let productCount = document.querySelector(".product-count");
let ordersCount = document.querySelector(".order-count");
let elShowUserDiv = document.querySelector(".show-to-user");
let counts = [];

let itemsDiv = document.createElement("div");
itemsDiv.classList.add("w-100", "d-flex", "justify-content-around");

let showDashboard = (item, index) => {
  let itemDiv = document.createElement("div");
  itemDiv.classList = "w-25 h-50 bg-success rounded text-center text-white";
  let itemText = document.createElement("p");
  itemText.classList = "mt-4 fs-4";
  itemText.innerText = item.textContent;
  let itemCount = document.createElement("p");
  itemCount.textContent = counts[index];
  itemDiv.append(itemText, itemCount);
  itemsDiv.append(itemDiv);
  elShowUserDiv.append(itemsDiv);
};

let usersList = document.createElement("ul");
usersList.classList.add("list-group", "ml-10");

let showUSers = async () => {
  let { data: users } = await axios("http://localhost:3000/users");
  users.forEach((item) => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let completeBtn = document.createElement("button");
    let name = document.createElement("p");
    let lastN = document.createElement("p");
    let age = document.createElement("p");
    let p2 = document.createElement("p");
    p2.textContent = item.id;
    name.classList.add("fs-4");
    p2.classList.add("fs-4");

    name.innerText = item.fName;
    lastN.innerText = item.lastName;
    age.innerText = item.age;
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "my-3",
      "gap-3"
    );
    btn.classList.add("btn", "btn-danger");
    btn.innerText = "Delete";

    completeBtn.classList.add("btn", "btn-warning", "ms-auto");
    completeBtn.textContent = "Edit";
    li.append(p2, name, lastN, age, completeBtn, btn);
    usersList.append(li);
    elShowUserDiv.append(usersList);
    btn.addEventListener("click", () => {
      li.remove();
      axios.delete(`http://localhost:3000/users/${item.id}`);
    });
  });
  let createBtn = document.createElement("button");
  createBtn.textContent = "Create new ";
  createBtn.classList.add("btn", "btn-primary");
  elShowUserDiv.append(createBtn);
};

let showProducts = async () => {
  let { data: products } = await axios("http://localhost:3000/products");
  products.forEach((item) => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let completeBtn = document.createElement("button");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    p2.textContent = item.id;
    p.classList.add("fs-4");
    p2.classList.add("fs-4");

    p.innerText = `${item.name} ${item.description} price: ${item.price}`;
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "my-3",
      "gap-3"
    );
    btn.classList.add("btn", "btn-danger");
    btn.innerText = "Delete";

    completeBtn.classList.add("btn", "btn-warning", "ms-auto");
    completeBtn.textContent = "Edit";
    li.append(p2, p, completeBtn, btn);
    usersList.append(li);
    elShowUserDiv.append(usersList);
    btn.addEventListener("click", () => {
      li.remove();
      axios.delete(`http://localhost:3000/products/${item.id}`);
    });
  });
  let createBtn = document.createElement("button");
  createBtn.textContent = "Create new ";
  createBtn.classList.add("btn", "btn-primary");
  elShowUserDiv.append(createBtn);
};

let showOrders = async () => {
  let { data: orders } = await axios("http://localhost:3000/orders");
  orders.forEach((item) => {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let completeBtn = document.createElement("button");
    let p = document.createElement("p");
    let p2 = document.createElement("p");
    let statusBtn = document.createElement("button");
    statusBtn.classList.add("btn", "btn-info", "ms-auto");

    statusBtn.textContent = item.status.text;
    p2.textContent = item.id;
    p.classList.add("fs-4");
    p2.classList.add("fs-4");

    p.innerText = `${item.clientName} ${item.date} price: ${item.totalPrise}`;
    li.classList.add(
      "list-group-item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "my-3",
      "gap-3"
    );
    btn.classList.add("btn", "btn-danger");
    btn.innerText = "Delete";

    completeBtn.classList.add("btn", "btn-warning");
    completeBtn.textContent = "Edit";
    li.append(p2, p, statusBtn, completeBtn, btn);
    usersList.append(li);
    elShowUserDiv.append(usersList);
    btn.addEventListener("click", () => {
      li.remove();
      axios.delete(`http://localhost:3000/orders/${item.id}`);
    });
  });
  let createBtn = document.createElement("button");
  createBtn.textContent = "Create new ";
  createBtn.classList.add("btn", "btn-primary");
  elShowUserDiv.append(createBtn);

  createBtn.addEventListener("click", () => {
    console.log("ok");
    createBtn.setAttribute("data-bs-toggle", "modal");
    createBtn.setAttribute("data-bs-target", "#orderModal");
    createBtn.setAttribute("type", "button");
  });
};
let Show;
let userCount1 = 0;

(async function showCounts() {
  let users = axios("http://localhost:3000/users");
  let products = axios("http://localhost:3000/products");
  let orders = axios("http://localhost:3000/orders");
  let data = await Promise.all([users, products, orders]);
  userCount1 = data[0].data.length;
})();
console.log(userCount1);

showItems.forEach((item, index) => {
  console.log(item.textContent);
  if (item.textContent != "Dashboard") {
    showDashboard(item, index);
  }
  item.addEventListener("click", async () => {
    showItems.forEach((one) => {
      one.classList.remove("active");
    });
    item.classList.add("active");
    elShowUserDiv.innerHTML = "";

    if (item.textContent === "Users") {
      elShowUserDiv.innerHTML = "";
      usersList.innerHTML = "";
      showUSers();
    }

    if (item.textContent === "Products") {
      elShowUserDiv.innerHTML = "";
      usersList.innerHTML = "";
      showProducts();
    }

    if (item.textContent === "Orders") {
      elShowUserDiv.innerHTML = "";
      usersList.innerHTML = "";
      showOrders();
    }
  });
});
