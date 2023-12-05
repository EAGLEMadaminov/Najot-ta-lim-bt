let usersDiv = document.querySelector(".users");
let form = document.querySelector("form");
let p = document.querySelector(".error-message");

axios.defaults.baseURL = "http://localhost:5050/api/v1";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = form[0].value;
  let phone = form[1].value;
  let password = form[2].value;
  if (!phone || !password || !name) {
    p.textContent = "All fileds are required";
  }

  setTimeout(() => {
    p.textContent = "";
  }, 3_000);

  let newUser = {
    name,
    phoneNumber: phone,
    password,
  };
  console.log(newUser);
  let token = localStorage.getItem("token");
  let res = await axios.post("/users", newUser, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  console.log(res.data);
});

(async function getAllUSers() {
  let token = localStorage.getItem("token");
  let res = await axios.get("/users", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  console.log(res.data);
  res.data.forEach((item) => {
    let nameP = document.createElement("h2");
    let userPhone = document.createElement("p");
    let role = document.createElement("p");
    let userDiv = document.createElement("div");
    userDiv.classList.add(
      ..."user w-[300px] border rounded-lg m-3 bg-white p-4".split(" ")
    );
    nameP.innerHTML = `Name: ${item.name}`;
    nameP.classList.add("font-bold");
    userPhone.textContent = `User Phone: ${item.phoneNumber}`;
    role.textContent = `User Role: ${item.role}`;
    userDiv.append(nameP, userPhone, role);
    usersDiv.append(userDiv);
  });
})();
