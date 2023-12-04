let form = document.querySelector("form");
let errorText = document.querySelector(".error-text");
let box = document.querySelector(".box");
let addBtn = document.querySelector(".add");

axios.defaults.baseURL = "https://fakestoreapi.com";
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let username = form[0].value;
  let password = form[1].value;
  let login = {
    username,
    password,
  };

  if (!username || !password) {
    errorText.textContent = "Please fill all fileds";
    setTimeout(() => {
      errorText.textContent = "";
    }, 3_000);
    return;
  }
  try {
    let { data } = await axios.post("/auth/login", login);
    localStorage.setItem("token", data.token);
    if (data.token) {
      window.location.replace("/");
    }
  } catch (error) {
    errorText.textContent = "Username or password incorrect";
    setTimeout(() => {
      errorText.textContent = "";
    }, 3_000);
  }
});
