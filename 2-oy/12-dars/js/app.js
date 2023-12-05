let alerts = document.querySelector(".alerts");
let main = document.querySelector("main");
let searchInput = document.querySelector("#searchInput");
let ul = document.createElement("ul");

let userId = localStorage.getItem("user-id");
(function checkUSer() {
  if (!userId) {
    return window.location.replace("/pages/login.html");
  }
})();

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

let showUserInfo = async () => {
  let { data: user } = await axios.get(`/users/${id}`);
  if (!user) {
    localStorage.removeItem("user-id");
    window.location.replace("/pages/login.html");
  }

  fullName.textContent = user.fullName;
  phoneNumber.textContent = user.phone;

  let { data: chats } = await axios.get("/chats");
  chats = chats.filter((chat) => chat.members.includes(user.id));
  console.log(chats);

  const renderChat = async (chat) => {
    let friendId = chat.members.find((memberId) => memberId != user.id);
    let { data: friend } = await axios.get(`/users/${friendId}`);
    let li = document.createElement("li");
    li.classList.add("flex", "items-center", "gap-2", "cursor-pointer");
    li.setAttribute("data-chat-id", friend.id);
    let imgDiv = document.createElement("div");
    imgDiv.classList.add(
      ..."w-10 h-10 bg-rose-200 rounded-full grid place-items-center text-rose-900 text-2xl".split(
        " "
      )
    );
    imgDiv.textContent = friend.fullName[0];
    let userName = document.createElement("h3");
    userName.classList.add("text-2xl");
    userName.textContent = friend.fullName;
    li.append(imgDiv, userName);
    ul.append(li);

    li.addEventListener("click", () => {
      window.location.replace(`/pages/chat.html?chatid=${chat.id}`);
      return;
    });
  };

  if (chats.length === 0) {
    let h2 = document.createElement("h2");
    h2.classList.add("text-4xl", "text-blue-600", "text-center");
    h2.innerText =
      "You haven't started any chat with anyone yet. \n Looks like you are from moon 😇 ";
    main.append(h2);
  } else {
    ul.classList.add(
      ..."grid gap-2 [&_li:not(:first-child)]:border-t [&_li]:pt-2 [$_li]:border-rose-900".split(
        " "
      )
    );
    main.append(ul);
    chats.forEach(renderChat);
  }

  const renderUser = async (user) => {
    let li = document.createElement("li");
    li.classList.add("flex", "items-center", "gap-2", "cursor-pointer");
    li.setAttribute("data-user-id", user.id);
    let imgDiv = document.createElement("div");
    imgDiv.classList.add(
      ..."w-10 h-10 bg-rose-200 rounded-full grid place-items-center text-rose-900 text-2xl".split(
        " "
      )
    );
    imgDiv.textContent = user.fullName[0];
    let userName = document.createElement("h3");
    userName.classList.add("text-2xl");
    userName.textContent = user.fullName;
    li.append(imgDiv, userName);
    ul.append(li);

    li.addEventListener("click", () => {
      window.location.replace(`/pages/chat.html?userId=${user.id}`);
      return;
    });
  };

  searchInput.addEventListener("keydown", async () => {
    let searchStr = searchInput.value.toLowerCase();
    if (!searchStr) {
      ul.innerHTML = "";
      chats.forEach(renderChat);
    }
    let { data: users } = await axios.get("/users");
    let filtersUsers = users.filter(
      (user) =>
        user.phone.toLowerCase().includes(searchStr) ||
        user.fullName.toLowerCase().includes(searchStr)
    );
    ul.innerHTML = "";
    console.log(filtersUsers);
    filtersUsers.forEach(renderUser);
  });
};

showUserInfo();
