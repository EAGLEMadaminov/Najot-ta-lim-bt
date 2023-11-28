let tBody = document.querySelector("tbody");
let createBtn = document.querySelector(".create-btn");

axios.defaults.baseURL = "http://localhost:3000";
(async function getData() {
  let res = await axios("/products");
  res.data.forEach((item, index) => {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let name = document.createElement("td");
    let company = document.createElement("td");
    let category = document.createElement("td");
    let price = document.createElement("td");
    let description = document.createElement("td");
    description.classList.add("w-25");
    let actions = document.createElement("td");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
    editBtn.classList.add("btn", "btn-success", "btn-sm");
    deleteBtn.innerHTML = ` <span class="material-icons-outlined fs-5">delete</span>`;
    editBtn.innerHTML = `<span class="material-icons-outlined fs-5 ">edit</span>`;
    actions.append(editBtn, deleteBtn);
    th.setAttribute("scope", "row");
    th.textContent = index + 1;
    name.textContent = item.name;
    company.textContent = item.company;
    category.textContent = item.category;
    price.textContent = item.price;
    description.textContent = item.description;
    tr.append(th, name, company, category, price, description, actions);
    tBody.append(tr);

    deleteBtn.addEventListener("click", () => {
      tr.remove();
      axios.delete(`/products/${item.id}`);
    });
  });
})();

createBtn.addEventListener("click", () => {});
