let selectProduct = document.querySelector(".select-product");
let showCardDiv = document.querySelector(".show-modal");
let form = document.querySelector("form");

axios.defaults.baseURL = "http://localhost:5050/api/v1";
let token = localStorage.getItem("token");

async function showProducts() {
  let { data } = await axios.get("/products");
  console.log(data);
  data.forEach((item) => {
    let option = document.createElement("option");
    option.textContent = item?.name?.uz;
    option.setAttribute("value", item?._id);
    selectProduct.append(option);
  });
}
showProducts();

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  showCardDiv.classList.add("hidden");
  let product = form[0].value;
  let quantity = form[1].value;
  let card = {
    product,
    quantity,
  };
  console.log(card);
  let { data } = await axios.post("/clients/cart", [card], {
    headers: {
      authorization: `Barear ${token}`,
    },
  });
  console.log(data);
});
