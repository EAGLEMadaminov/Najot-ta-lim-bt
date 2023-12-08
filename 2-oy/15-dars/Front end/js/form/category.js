let form = document.querySelector("form");
let p = document.querySelector(".error-message");

axios.defaults.baseURL = "http://localhost:5050/api/v1";
let token = localStorage.getItem("admin-token");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let uz = form[0].value;
  let ru = form[1].value;
  let image = form[2].value;

  setTimeout(() => {
    p.textContent = "";
  }, 3_000);

  if (!uz || !ru || !image) {
    p.textContent = "All fileds are required";
    return;
  }

  let newCategory = {
    uz,
    ru,
    image,
  };
  let res = await axios.post("/categories", newCategory, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  if (res.data) {
    window.location.replace("/pages/category.html");
  }
});
