document.addEventListener("DOMContentLoaded", async () => {
  let alerts = document.querySelector(".alerts");
  let main = document.querySelector("main");
  function createAlert(msg, type = "error") {
    let alertElement = document.createElement("div");
    let color =
      type === "error"
        ? "rose"
        : type === "success"
        ? "green"
        : type === "info"
        ? "blue"
        : "yellow";
    let className = `ps-8 pe-4 py-2 text-xl rounded-lg border border-${color}-700 text-${color}-700 bg-${color}-200`;
    alertElement.classList.add(...className.split(" "));
    alertElement.textContent = msg;
    let closeBtn = document.createElement("button");
    closeBtn.classList.add("ms-4");
    closeBtn.textContent = "X";
    alertElement.append(closeBtn);
    alerts.append(alertElement);
    closeBtn.addEventListener("click", () => alertElement.remove());
    setTimeout(() => alertElement.remove(), 3_000);
  }
  let fullName = document.querySelector("#fullName");
  let phoneNumber = document.querySelector("#phoneNumber");
  let logoutBtn = document.querySelector("#logoutBtn");
  axios.defaults.baseURL = "http://localhost:3000";
  let id = localStorage.getItem("user-id");

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("user-id");
    createAlert("Logged out successfully", "success");
    setTimeout(() => {
      window.location.replace("/pages/login.html");
    }, 3_500);
  });
  let { data: user } = await axios.get(`/users/${id}`);
  if (!user) {
    localStorage.removeItem("user-id");
    window.location.replace("/pages/login.html");
  }

  fullName.textContent = user.fullName;
  phoneNumber.textContent = user.phone;

  let { data: chats } = await axios.get("/chats");
  chats = chats.filter((chat) => chat.members.includes(user.id));

  if (chats.length === 0) {
    let h2 = document.createElement("h2");
    h2.classList.add("text-4xl", "text-blue-600", "text-center");
    h2.innerText =
      "You haven't started any chat with anyone yet. \n Looks like you are from moon 😇 ";
    main.append(h2);
  }
});
