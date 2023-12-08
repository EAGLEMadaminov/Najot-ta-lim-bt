console.log("ok");
let usersDiv = document.querySelector(".categories");
axios.defaults.baseURL = "http://localhost:5050/api/v1";
let showBtnAll = document.querySelectorAll(".show-btn");
let countAll = document.querySelectorAll(".count");
let tBody = document.querySelector("tBody");
let showModalDiv = document.querySelector(".show-modal");
let updateForm = document.querySelector(".update-form");

axios.defaults.baseURL = "http://localhost:5050/api/v1";

let token = localStorage.getItem("admin-token");


let showUpdateFunc = async (item) => {
  showModalDiv.classList.remove("hidden");
  updateForm[0].value = item.uz;
  updateForm[1].value = item.ru;
  updateForm[2].value = item.image;
  updateForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let updateUz = updateForm[0].value;
    let updateRU = updateForm[1].value;
    let updateImage = updateForm[2].value;
    let updateCategory = {
      uz: updateUz,
      ru: updateRU,
      image: updateImage,
    };
    let updateData = await axios.put(
      `/categories/${item._id}`,
      updateCategory,
      {
        headers: {
          authorization: `Barear ${token}`,
        },
      }
    );
    tBody.innerHTML = "";
    getAllUSers();
    showModalDiv.classList.add("hidden");
  });
};

async function getAllUSers() {
  let res = await axios.get("/categories", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
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
    updateBtn.addEventListener("click", () => showUpdateFunc(item));
  });
}
getAllUSers();

showBtnAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("hidden");
  });
});
