let categoryDiv = document.querySelector(".category");
let showBtnAll = document.querySelectorAll(".show-btn");
let countAll = document.querySelectorAll(".count");

let token = localStorage.getItem("admin-token");

(function checkToekn() {
  if (!token) return window.location.replace("/pages/login.html");
})();

axios.defaults.baseURL = "http://localhost:5050/api/v1";

(async function getCategory() {
  let token = localStorage.getItem("token");
  let category = await axios.get("/categories", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  let users = await axios.get("/users", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  let products = await axios.get("/products", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  let allData = [category.data.length, users.data.length, products.data.length];
  countAll.forEach((item, index) => {
    item.textContent = allData[index];
  });
})();

showBtnAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("hidden");
  });
});
