let tBody = document.querySelector("tbody");
let createForm = document.querySelector(".creare-product-modal");
let createProductBtn = document.querySelector(".create-product-btn");
let editForm = document.querySelector(".edit-product-form");
let editProductSaveBtn = document.querySelector(".edit-product-btn");

axios.defaults.baseURL = "http://localhost:3000";

const editProductFunction = (item) => {
  let editData = getFormData(editForm);
  editProductSaveBtn.addEventListener("click", async () => {
    console.log(editData);
    await axios.put(`/products/${item.id}`, editData);
    tBody.innerHTML = "";
    getData();
  });
};

async function getData() {
  let res = await axios("/products");
  res.data.forEach((item, index) => {
    let tr = document.createElement("tr");
    tr.innerHTML = "";
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
    editBtn.setAttribute("data-bs-toggle", "modal");
    editBtn.setAttribute("data-bs-target", "#editModal");

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
    editBtn.addEventListener("click", () => {
      editForm[0].value = item.name;
      editForm[1].value = item.company;
      editForm[2].value = item.category;
      editForm[3].value = item.price;
      editForm[4].value = item.image;
      editForm[5].value = item.description;
      editProductFunction(item);
    });
  });
}

getData();

let getFormData = (form) => {
  let name = form[0].value;
  let company = form[1].value;
  let category = form[2].value;
  let price = Number(form[3].value).toFixed(2);
  let image = form[4].value;
  let description = createForm[5].value;
  let newProduct = {
    name,
    company,
    category,
    price,
    image,
    description,
  };
  return newProduct;
};
createProductBtn.addEventListener("click", async () => {
  let newProduct = getFormData(createForm);
  axios.post("/products", newProduct);
  tBody.innerHTML = "";
  getData();
});
