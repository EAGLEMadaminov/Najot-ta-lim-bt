let form = document.querySelector("form");
let p = document.querySelector(".error-message");
axios.defaults.baseURL = "http://localhost:5050/api/v1";
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let phone = form[0].value;
  let password = form[1].value;
  if (!phone || !password) {
    p.textContent = "All fileds are required";
  }

  setTimeout(() => {
    p.textContent = "";
  }, 3_000);
  let auth = {
    phoneNumber: phone,
    password,
  };
  let res = await axios.post("/auth", auth);
  localStorage.setItem("admin-token", res.data.token);
  if (res.data.token) {
    window.location.replace("/admin.html");
  }
});
