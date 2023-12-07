let productSelect = document.querySelector(".product-select");
let form = document.querySelector("form");

axios.defaults.baseURL = "http://localhost:5050/api/v1";
let token = localStorage.getItem("token");

(async function showSelectOption() {
  let { data } = await axios.get("/categories", {
    headers: {
      authorization: `Barear ${token}`,
    },
  });
  console.log(data);
  data.forEach((item) => {
    let option = document.createElement("option");
    option.textContent = item.uz;
    option.setAttribute("value", item._id);
    productSelect.append(option);
  });
})();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let nameUz = form[0].value;
  let nameRu = form[1].value;
  let price = form[2].value;
  let colorUz = form[3].value;
  let colorRu = form[4].value;
  let descriptionUz = form[5].value;
  let descriptionRu = form[6].value;
  let image = form[7].value;
  let category = form[8].value;
  let newProduct = {
    name: {
      uz: nameUz,
      ru: nameRu,
    },
    price,
    color: {
      uz: colorUz,
      ru: colorRu,
    },
    description: {
      uz: descriptionUz,
      ru: descriptionRu,
    },
    image,
    category,
  };
  console.log(newProduct);
  let res = await axios.post("/products", newProduct, {
    headers: {
      authorization: `Barear ${token}`,
    },
  });
  if(res.data){
    window.location.replace("/")
  }
});
