let form = document.querySelector("form");
let p = document.querySelector(".error-message");

axios.defaults.baseURL = "http://localhost:5050/api/v1";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = form[0].value;
  let phone = form[1].value;
  let password = form[2].value;
  setTimeout(() => {
    p.textContent = "";
  }, 3_000);

  if (!phone || !password || !name) {
    p.textContent = "All fileds are required";
    return;
  }

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
  if (res.data) {
    window.location.replace("/");
  }
});
