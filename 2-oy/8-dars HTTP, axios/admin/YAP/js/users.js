let tBody = document.querySelector("tbody");

axios.defaults.baseURL = "http://localhost:3000";

(async function getData() {
  let res = await axios("/users");
  res.data.forEach((item, index) => {
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let fname = document.createElement("td");
    let lastName = document.createElement("td");
    let age = document.createElement("td");
    let email = document.createElement("td");
    let password = document.createElement("td");
    password.classList.add("w-25");
    let actions = document.createElement("td");
    let passwordChangeBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    tr.classList.add("text-center");
    deleteBtn.classList.add("btn", "btn-danger", "btn-sm");
    editBtn.classList.add("btn", "btn-success", "btn-sm");
    passwordChangeBtn.classList.add("btn", "btn-warning", "btn-sm");
    deleteBtn.innerHTML = ` <span class="material-icons-outlined fs-5">delete</span>`;
    editBtn.innerHTML = `<span class="material-icons-outlined fs-5 ">edit</span>`;
    passwordChangeBtn.innerHTML = `<span class="material-icons-outlined fs-5">key</span>`;
    actions.append(passwordChangeBtn, editBtn, deleteBtn);
    th.setAttribute("scope", "row");
    th.textContent = index + 1;
    fname.textContent = item.first_name;
    lastName.textContent = item.last_name;
    age.textContent = item.age;
    email.textContent = item.email;
    password.textContent = item.password;
    tr.append(th, fname, lastName, age, email, password, actions);
    tBody.append(tr);

    deleteBtn.addEventListener("click", () => {
      tr.remove();
      axios.delete(`/users/${item.id}`);
    });
  });
  let createUserBtn = document.querySelector("#create-user-btn");
  async function createUser() {
    let form = document.querySelector("#create-user-form");
    let firstName = form[0].value;
    let lastName = form[1].value;
    let age = +form[2].value;
    let email = form[3].value;
    let password = form[4].value;
    let image = form[5].value;
    let newUSer = {
      firstName,
      lastName,
      age,
      email,
      password,
      image,
    };
    console.log(newUSer);
    await axios.post("/users", newUSer);
  }
  createUserBtn.addEventListener("click", createUser);
})();
