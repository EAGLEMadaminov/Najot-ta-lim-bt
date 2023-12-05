let usersDiv = document.querySelector(".categories");
axios.defaults.baseURL = "http://localhost:5050/api/v1";
let showBtnAll = document.querySelectorAll(".show-btn");
let countAll = document.querySelectorAll(".count");
let tBody = document.querySelector("tBody");

(async function getAllUSers() {
  let token = localStorage.getItem("token");
  let res = await axios.get("/categories", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  console.log(res.data);
  res.data.forEach((item) => {
    let nameP = document.createElement("td");
    let nameRu = document.createElement("td");
    let image = document.createElement("td");
    let update = document.createElement("td");
    let updateBtn = document.createElement("button");
    updateBtn.textContent = "update";
    update.append(updateBtn);
    image.textContent = "url";
    let userDiv = document.createElement("tr");
    nameP.classList.add("border", "p-2");
    nameRu.classList.add("border", "p-2");
    image.classList.add("border", "p-2");
    update.classList.add("border", "p-2");
    nameP.innerHTML = item.uz;
    nameRu.textContent = item.ru;
    userDiv.append(nameP, nameRu, image, update);
    tBody.append(userDiv);
  });
})();

showBtnAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("hidden");
  });
});
