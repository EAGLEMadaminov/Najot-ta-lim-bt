let showProductDiv = document.querySelector(".show-product");
let modalCardDiv = document.querySelector(".modal-card");
let chooseProductDiv = document.querySelector(".choosen-produc");
let sendBtn = document.querySelector(".send-btn");
let searchForm = document.querySelector(".search-form");
let userName = document.querySelector(".user-name");
let cartCount = document.querySelector(".cart-count");
let closeModalBtn = document.querySelector(".close-modal");
let totalPrice = document.querySelector(".total-price");

axios.defaults.baseURL = "http://localhost:5050/api/v1";
let token = localStorage.getItem("client-token");

closeModalBtn.addEventListener("click", () => {
  modalCardDiv.classList.add("hidden");
});

let chooseProducts = [];

(async function getClient() {
  let { data } = await axios.get("/clients/me", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  userName.textContent = data.name;
})();

let productPrice = 0;

let modalCardShoFunc = async (item) => {
  if (!token) {
    window.location.replace("./client/pages/login.html");
    return;
  }
  productPrice += Number(item.price);
  totalPrice.textContent = productPrice;
  let count = 1;

  modalCardDiv.classList.remove("hidden");
  let oneProduct = document.createElement("div");
  oneProduct.className = "flex border p-2 m-4 justify-around";
  let incBtn = document.createElement("button");
  incBtn.textContent = "▶";
  let decBtn = document.createElement("button");
  let price = document.createElement("p");
  price.textContent = item.price;
  decBtn.textContent = "◀";
  let input = document.createElement("input");
  input.setAttribute("type", "number");
  input.className = " w-[40px] text-xl";
  input.value = count;
  let name = document.createElement("p");
  name.textContent = `name: ${item.name.uz}`;
  let removeProductBtn = document.createElement("button");
  removeProductBtn.textContent = "❎";

  oneProduct.append(name, decBtn, input, incBtn, removeProductBtn);
  chooseProductDiv.append(oneProduct);

  removeProductBtn.addEventListener("click", () => {
    productPrice = productPrice - Number(item.price) * count;
    totalPrice.textContent = productPrice;
    oneProduct.remove();
  });

  let newProduct = {
    product: item._id,
    quantity: count,
  };

  incBtn.addEventListener("click", () => {
    ++count;
    input.value = count;
    newProduct.quantity = count;
    productPrice += Number(item.price);
    totalPrice.textContent = productPrice;
  });

  decBtn.addEventListener("click", () => {
    --count;
    if (count >= 1) {
      input.value = count;
      newProduct.quantity = count;
      productPrice -= Number(item.price);
      totalPrice.textContent = productPrice;
    } else {
      count = 1;
      input.value = count;
      newProduct.quantity = count;
    }
  });

  chooseProducts.push(newProduct);
  console.log(chooseProducts);
};

let showDataForClientFunc = (data) => {
  showProductDiv.innerHTML = "";
  data.forEach((item) => {
    let itemDiv = document.createElement("div");
    itemDiv.className =
      "w-[300px] m-4 text-center rounded-lg border-[5px] p-3 ";
    let image = document.createElement("img");
    image.setAttribute("src", item.image);
    image.className = "w-[200px] h-[200px] mx-auto";
    let name = document.createElement("h2");
    name.textContent = `Name: ${item?.name?.uz}`;
    let price = document.createElement("p");
    let addBtn = document.createElement("button");
    addBtn.textContent = "Add to cart";
    addBtn.className = "p-2 bg-blue-500 rounded-md text-white";
    price.textContent = `Price: ${item.price}$`;
    let category = document.createElement("p");
    category.textContent = `Category: ${item?.category?.uz}`;
    let all = [name, price, addBtn];
    all.forEach((item) => {
      item.classList.add("my-3");
    });
    itemDiv.append(image, name, price, category, addBtn);
    showProductDiv.append(itemDiv);
    addBtn.addEventListener("click", () => modalCardShoFunc(item));
  });
};

sendBtn.addEventListener("click", async () => {
  modalCardDiv.classList.add("hidden");
  cartCount.textContent = chooseProducts.length;
  let { data } = await axios.post("/clients/cart", chooseProducts, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  chooseProductDiv.innerHTML = "";
});

let getProducts = async () => {
  let { data } = await axios.get("/products");

  showDataForClientFunc(data);
};

getProducts();

searchForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let quary = searchForm[0].value;
  if (quary) {
    console.log(quary);
    let { data } = await axios.get(`/products/search?q=${quary}`);
    showDataForClientFunc(data);
    console.log(data);
  }
});
