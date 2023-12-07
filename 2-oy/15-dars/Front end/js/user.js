let usersDiv = document.querySelector(".users");
let tBody = document.querySelector("tbody");
let showModalDiv = document.querySelector(".show-modal");
let form = document.querySelector("form");
let errorP = document.querySelector(".error-message");
let showBtnAll = document.querySelectorAll(".show-btn");

showBtnAll.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.nextElementSibling.classList.toggle("hidden");
  });
});

axios.defaults.baseURL = "http://localhost:5050/api/v1";
let token = localStorage.getItem("token");

let showModalFunc = (item) => {
  showModalDiv.classList.remove("hidden");
  form[0].value = item.name;
  form[1].value = item.phoneNumber;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let newName = form[0].value;
    let newPhone = form[1].value;
    let newPassword = form[2].value;
    setTimeout(() => {
      errorP.textContent = "";
    }, 3_000);
    if (newName === item.name && newPhone === item.phoneNumber) {
      errorP.textContent = "Nothing changed Please change name or phone";
      console.log(errorP.textContent);
      return;
    }

    let updateUser = {
      name: newName,
      phoneNumber: newPhone,
      password: newPassword,
    };
    let res = await axios.put(`/users/${item._id}`, updateUser, {
      headers: {
        authorization: `Barear ${token}`,
      },
    });
    tBody.innerHTML = "";
    getAllUSers();
    showModalDiv.classList.add("hidden");
  });
};

async function getAllUSers() {
  let token = localStorage.getItem("token");
  let res = await axios.get("/users", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  res.data.forEach((item) => {
    let nameP = document.createElement("td");
    let userPhone = document.createElement("td");
    let role = document.createElement("td");
    let update = document.createElement("td");
    const all = [nameP, userPhone, role, update];
    all.forEach((item) => {
      item.className = "border p-2 my-2";
    });
    let updateBtn = document.createElement("button");
    updateBtn.textContent = "update";
    update.append(updateBtn);
    let userDiv = document.createElement("tr");

    nameP.innerHTML = item.name;
    userPhone.textContent = item.phoneNumber;
    role.textContent = item.role;
    userDiv.append(nameP, userPhone, role, update);
    tBody.append(userDiv);

    updateBtn.addEventListener("click", () => showModalFunc(item));
  });
}
getAllUSers();
