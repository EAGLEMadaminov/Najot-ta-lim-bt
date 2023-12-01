let editForm = document.querySelector("#edit-user-form");
let tBody = document.querySelector("tbody");
let editUserBtn = document.querySelector("#edit-user-btn");
let editPasswordForm = document.querySelector("#edit-user-password-form");
let editPasswordBtn = document.querySelector("#edit-password-btn");

axios.defaults.baseURL = "http://localhost:3000";

const getdateToInput = (item) => {
  editForm[0].value = item.first_name;
  editForm[1].value = item.last_name;
  editForm[2].value = item.age;
  editForm[3].value = item.email;

  editUserBtn.addEventListener("click", () => {
    let first_name = editForm[0].value;
    let last_name = editForm[1].value;
    let age = editForm[2].value;
    let email = editForm[3].value;

    let editItem = {
      first_name,
      last_name,
      age,
      email,
      password: item.password,
      image: item.image,
    };
    let res = axios.put(`/users/${item.id}`, editItem);
    console.log(res.data);
    showUsers();
  });
};

const editPasswordFunction = (item) => {
  editPasswordBtn.addEventListener("click", () => {
    let lastPasword = editPasswordForm[0].value.trim();
    let newPasssword = editPasswordForm[1].value;
    let confirmPassword = editPasswordForm[2].value;

    if (lastPasword !== item.password) {
      alert("last password error");
      return;
    }
    if (lastPasword === newPasssword) {
      alert("Password dosn't change");
      return;
    }
    if (newPasssword !== confirmPassword) {
      alert("New and confirm not equal");
      return;
    }
    item.password = newPasssword;
    axios.put(`/users/${item.id}`, item);
    showUsers();
  });
};

let showUsers = async () => {
  let res = await axios("/users");
  tBody.innerHTML = "";

  res.data.forEach((item) => {
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
    th.textContent = item.id;
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
    editBtn.addEventListener("click", () => {
      editBtn.setAttribute("data-bs-toggle", "modal");
      editBtn.setAttribute("data-bs-target", "#edit-user-modal");
      getdateToInput(item);
    });
    passwordChangeBtn.addEventListener("click", () => {
      passwordChangeBtn.setAttribute("data-bs-toggle", "modal");
      passwordChangeBtn.setAttribute("data-bs-target", "#edit-user-password");
      editPasswordFunction(item);
    });
  });
};

(async function getData() {
  showUsers();
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
      first_name: firstName,
      last_name: lastName,
      age,
      email,
      password,
      image,
    };
    console.log(newUSer);
    let data = await axios.post("/users", newUSer);
    tBody.innerHTML = "";
    showUsers();
  }
  createUserBtn.addEventListener("click", createUser);
})();
