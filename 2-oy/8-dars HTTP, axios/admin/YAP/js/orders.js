let tBody = document.querySelector("tbody");

axios.defaults.baseURL = "http://localhost:3000";
(async function getData() {
  let res = await axios("/orders");
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
  });
})();
