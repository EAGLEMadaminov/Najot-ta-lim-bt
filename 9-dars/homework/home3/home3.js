let elCloseBtn = document.querySelector(".close");
let count = 0;
document.addEventListener("dblclick", (e) => {
  let elDiv = document.createElement("div");
  console.log("ok");
  let x = e.clientX;
  let y = e.clientY;
  elDiv.style.marginLeft = `${x}px`;
  elDiv.style.marginTop = `${y}px`;
  elDiv.style.display = "block";
  elDiv.classList.add("box");
  elDiv.textContent = "Note" + ++count;
  document.body.append(elDiv);
  elDiv.addEventListener("mouseenter", (e) => {
    e.target.remove();
    document.body.append(e.target);
  });
  elDiv.addEventListener("click", (e) => {
    e.target.setAttribute("contenteditable", true);
  });
  elDiv.addEventListener("blur", (e) => {
    e.target.setAttribute("contenteditable", false);
  });
  elDiv.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    e.target.remove();
  });
});
