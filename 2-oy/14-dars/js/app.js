let Token = localStorage.getItem("token");
let allProductsDiv = document.querySelector(".all-products");
let logoutBtn = document.querySelector(".logout-btn");

axios.defaults.baseURL = "http://fakestoreapi.com";
if (!Token) {
  window.location.replace("/login.html");
}

let showChoosenProduct = async (item) => {
  let { data } = await axios.get(`/products/${item.id}`);
  allProductsDiv.innerHTML = "";
  showAllProducts(data);
  logoutBtn.textContent = "Carts";
};

let showAllProducts = (item) => {
  let productDiv = document.createElement("div");
  productDiv.classList.add(
    "border",
    "w-25",
    "rounded",
    "m-2",
    "text-center",
    "p-2"
  );
  let category = document.createElement("h2");
  let img = document.createElement("img");
  img.classList.add("w-25");
  let description = document.createElement("p");
  let sizesDiv = document.createElement("div");
  let price = document.createElement("span");
  let rating = document.createElement("span");
  let count = document.createElement("span");
  let button = document.createElement("button");
  button.classList.add("rounded", "btn", "btn-primary");
  button.textContent = "add to cart";
  category.textContent = item.category;
  img.setAttribute("src", item.image);
  description.textContent = item.description;
  sizesDiv.classList.add("w-100", "d-flex", "justify-content-around");
  price.textContent = `price ${item.price}`;
  rating.textContent = `rating ${item.rating.rate}`;
  count.textContent = `count ${item.rating.count}`;
  sizesDiv.append(price, rating, count);
  productDiv.append(category, img, description, button);
  allProductsDiv.append(productDiv);

  button.addEventListener("click", () => showChoosenProduct(item));
};

let GetProducts = async () => {
  let products = await axios.get("/products");
  products.data.forEach(showAllProducts);
};
GetProducts();

logoutBtn.addEventListener("click", () => {
  if (logoutBtn.textContent === "Carts") {
    window.location.replace("/card.html");
  } else  {
    localStorage.removeItem("token");
    window.location.replace("/login.html");
  }
});
