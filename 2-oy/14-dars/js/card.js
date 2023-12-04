let randomNum = Math.floor(Math.random() * (7 - 1 + 1) + 1);
let allProductsDiv = document.querySelector(".all-products");
let totalPrice = document.querySelector(".total-price");
let elTotalDiv = document.querySelector(".total");
let goBackBtn = document.querySelector(".backBtn");

axios.defaults.baseURL = "https://fakestoreapi.com";
let sum = 0;
let showItems = async (item, index) => {
  let { data: product } = await axios.get(`/products/${item.productId}`);
  let allBuy = product.price * item.quantity;
  sum += allBuy;
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
  let itemQuantity = document.createElement("p");
  itemQuantity.textContent = `Product ${index + 1} count ${item.quantity}`;
  category.textContent = product.category;
  img.setAttribute("src", product.image);
  description.textContent = product.description;
  sizesDiv.classList.add("w-100", "d-flex", "justify-content-around");
  price.textContent = `price ${product.price}`;
  rating.textContent = `rating ${product.rating.rate}`;
  count.textContent = `count ${product.rating.count}`;
  sizesDiv.append(price, rating, count);
  productDiv.append(category, img, description, sizesDiv);
  allProductsDiv.append(productDiv);
  elTotalDiv.append(itemQuantity);
  totalPrice.textContent = `${sum}$`;
};

let GetCards = async () => {
  let { data } = await axios.get(`/carts/${randomNum}`);
  data.products.forEach(showItems);
};
GetCards();
goBackBtn.addEventListener("click", () => {
  window.location.replace("/");
});
