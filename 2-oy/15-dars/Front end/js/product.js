let categorySelect = document.querySelector(".category-select");
let form = document.querySelector("form");

axios.defaults.baseURL = "http://localhost:5050/api/v1";
let token = localStorage.getItem("token");

(async function getAllUSers() {
  let res = await axios.get("/categories", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  console.log(res.data);

  res.data.forEach((item) => {
    let option = document.createElement("option");
    option.textContent = item.uz;
    option.setAttribute("value", item.id);
    categorySelect.append(option);
  });
})();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let nameUz = form[0].value;
  let nameRu = form[1].value;
  let price = form[2].value;
  let color = form[3].value;
  let description = form[4].value;
  let image = form[5].value;
  let categoryName = form[6].value;
  let newProduct = {
    name: {
      uz: nameUz,
      ru: nameRu,
    },
    price,
    color,
    description,
    image,
    category: categoryName,
  };
  let res = await axios.post("/products", newProduct, {
    headers: {
      authorization: `Barear ${token}`,
    },
  });
  console.log("res.data");
});
