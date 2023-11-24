let random = Math.random().toString(16).slice(2, 8);
let elH = document.querySelector("h1");
let color = "#" + random;
let elBody = document.body;

elBody.style.backgroundColor = color;
elH.textContent = color;
elH.style.textAlign = "center";
elH.style.marginTop = "200px";
