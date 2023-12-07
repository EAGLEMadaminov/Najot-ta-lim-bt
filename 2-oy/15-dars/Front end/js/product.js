let categorySelect = document.querySelector(".update-product-select");
let form = document.querySelector("form");
let showBtnAll = document.querySelectorAll(".show-btn");
let tbody = document.querySelector("tbody");
let showModalDiv = document.querySelector(".show-modal");

showBtnAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("hidden");
  });
});

axios.defaults.baseURL = "http://localhost:5050/api/v1";
let token = localStorage.getItem("token");

let showModalFunc = async (item) => {
  console.log(item);
  showModalDiv.classList.remove("hidden");
  form[0].value = item.name.uz;
  form[1].value = item.name.ru;
  form[2].value = item.price;
  form[3].value = item.color.uz;
  form[4].value = item.color.ru;
  form[5].value = item.description.uz;
  form[6].value = item.description.ru;
  form[7].value = item.image;
  let res = await axios.get("/categories", {
    headers: {
      authorization: `Barear ${token}`,
    },
  });
  console.log();
  res.data.forEach((item) => {
    let option = document.createElement("option");
    option.textContent = item.uz;
    option.setAttribute("value", item._id);
    categorySelect.append(option);
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let newNameUz = form[0].value;
    let newNameRu = form[1].value;
    let price = form[2].value;
    let colorUz = form[3].value;
    let colorRu = form[4].value;
    let descriptionUz = form[5].value;
    let descriptionRu = form[6].value;
    let image = form[7].value;
    let category = form[8].value;

    let updateProduct = {
      name: {
        uz: newNameUz,
        ru: newNameRu,
      },
      color: {
        uz: colorUz,
        ru: colorRu,
      },
      price,
      description: {
        uz: descriptionUz,
        ru: descriptionRu,
      },
      image,
      category,
    };

    let { data } = await axios.put(`/products/${item._id}`, updateProduct, {
      headers: {
        authorization: `Barear ${token}`,
      },
    });
    if (data) {
      tbody.innerHTML = "";
      getAllUSers();
      showModalDiv.classList.add("hidden");
    }
  });
};

async function getAllUSers() {
  let res = await axios.get("/products", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  res.data.forEach((item) => {
    let nameUz = document.createElement("td");
    let nameRu = document.createElement("td");
    let color = document.createElement("td");
    let price = document.createElement("td");
    let description = document.createElement("td");
    let imageTd = document.createElement("td");
    let image = document.createElement("img");
    image.setAttribute("src", item.image);
    image.className = "object-fit w-[100px] h-[100px]";
    imageTd.append(image);
    let update = document.createElement("td");
    let updateBtn = document.createElement("button");
    update.append(updateBtn);
    updateBtn.textContent = "update";
    let all = [nameUz, nameRu, color, price, description, imageTd, update];
    all.forEach((item) => {
      item.className = "border p-2";
    });
    updateBtn.className = "btn btn-primary";
    let tr = document.createElement("tr");
    nameUz.textContent = item.name.uz;
    nameRu.textContent = item.name.ru;
    color.textContent = item.color.uz;
    price.textContent = item.price;
    description.textContent = item.description.uz;
    tr.append(nameUz, nameRu, color, price, description, imageTd, update);
    tbody.append(tr);
    updateBtn.addEventListener("click", () => showModalFunc(item));
  });
}
getAllUSers();
