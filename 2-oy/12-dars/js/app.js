let userId = localStorage.getItem("user-id");

if (!userId) {
  window.location.replace("/pages/login.html");
}
