let form = document.querySelector("form");

axios.defaults.baseURL = "http://localhost:5050/api/v1";
let token = localStorage.getItem("client-token");



async function getClientInfo() {
  let { data } = await axios.get("/clients/me", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  form[0].value = data.name;
  form[1].value = data.phoneNumber;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let name = form[0].value;
    let phoneNumber = form[1].value;
    let password = form[2].value;
    if (password === "") {
      password = data.password;
    }
    let client = {
      name,
      phoneNumber,
      password,
    };

    console.log(client);
    let res = await axios.put(`/clients/${data._id}`, client, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    window.location.replace("/");
  });
}
getClientInfo();
