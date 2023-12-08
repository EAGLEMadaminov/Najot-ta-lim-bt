let form = document.querySelector("form");

axios.defaults.baseURL = "http://localhost:5050/api/v1";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let name = form[0].value;
  let phoneNumber = form[1].value;
  let password = form[2].value;
  let client = {
    name,
    phoneNumber,
    password,
  };

  let res = await axios.post("/auth/register", client);
  window.location.replace("/client/pages/login.html");
});
