let tBody = document.querySelector("tbody");
let createOrderForm = document.querySelector(".create-order-form");
let createOrderBtn = document.querySelector(".crete-order-btn");
let createBtn = document.querySelector(".create-btn");
let editOrderForm = document.querySelector(".edit-order-form");
let editOrderBtn = document.querySelector(".edit-order-btn");

axios.defaults.baseURL = "http://localhost:3000";

let editOrderFunction = (item) => {
  editOrderBtn.addEventListener("click", () => {
    let clientName = editOrderForm[0].value;
    let totalPrice = editOrderForm[1].value
      ? editOrderForm[1].value
      : item.totalPrice;
    let status = editOrderForm[2].value;
    let time = new Date();
    let year = time.getFullYear();
    let month = time.getMonth() + 1;
    let day = time.getDate();
    totalPrice = Number(totalPrice).toFixed(2);
    let editOrder = {
      clientName,
      totalPrice,
      status,
      date: `${year}-${month}-${day}`,
    };
    axios.put(`/orders/${item.id}`, editOrder);
    getData();
  });
};

async function getData() {
  let res = await axios("/orders");
  tBody.innerHTML = "";
  res.data.forEach((item, index) => {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let clientName = document.createElement("td");
    let data = document.createElement("td");
    let totalPrice = document.createElement("td");
    let status = document.createElement("td");
    let actions = document.createElement("td");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#editOrderModal");
    tr.classList.add("text-center");
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
    editBtn.classList.add("btn", "btn-success", "btn-sm");
    deleteBtn.innerHTML = ` <span class="material-icons-outlined fs-5">delete</span>`;
    editBtn.innerHTML = `<span class="material-icons-outlined fs-5 ">edit</span>`;
    actions.append(editBtn, deleteBtn);
    th.setAttribute("scope", "row");
    th.textContent = index + 1;
    clientName.textContent = item.clientName;
    data.textContent = item.date;
    totalPrice.textContent = item.totalPrice;
    status.textContent = item.status;
    tr.append(th, clientName, data, totalPrice, status, actions);
    tBody.append(tr);

    deleteBtn.addEventListener("click", () => {
      tr.remove();
      axios.delete(`/orders/${item.id}`);
    });
    editBtn.addEventListener("click", () => {
      editOrderForm.reset();
      editOrderForm[0].value = item.clientName;
      editOrderForm[2].value = item.status;
      editOrderFunction(item);
    });
  });
}
getData();

createBtn.addEventListener("click", async () => {
  createOrderForm[0].innerHTML = "";
  let res = await axios("/users");
  res.data.forEach((item) => {
    let option = document.createElement("option");
    option.setAttribute("val", item.first_name);
    option.textContent = item.first_name;
    createOrderForm[0].append(option);
  });
});

createOrderBtn.addEventListener("click", () => {
  let clientName = createOrderForm[0].value;
  let price = Number(createOrderForm[1].value).toFixed(2);
  let totalPrice = "$" + price;
  let time = new Date();
  let year = time.getFullYear();
  let month = time.getMonth() + 1;
  let day = time.getDate();
  let newOrder = {
    clientName,
    totalPrice,
    status: "Created",
    date: `${year}-${month}-${day}`,
  };
  axios.post("/orders", newOrder);
  getData();
});
