let usersList = document.querySelector("#users");
let tBody = document.querySelector("tbody");
let elPhotosLink = document.querySelector(".photos");
let params = new URLSearchParams(window.location.search);
let id = params.get("id");
if (id) {
  fetch("https://jsonplaceholder.typicode.com/albums/" + id + "/photos")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        let li = document.createElement("li");
        let h1 = document.createElement("h2");
        let h2 = document.createElement("h4");
        let image = document.createElement("img");
        let a = document.createElement("a");
        h1.textContent = item.albumId;
        h2.textContent = item.title;
        image.setAttribute("src", item.url);
        a.textContent = "Go back";
        a.setAttribute("href", `/`);
        li.append(h1, h2, image, a);
        document.body.append(li);
      });
    });
} else {
  fetch("https://jsonplaceholder.typicode.com/albums")
    .then((res) => res.json())
    .then((data) => {
      data.forEach((item) => {
        let li = document.createElement("tr");
        let h2 = document.createElement("th");
        let h4 = document.createElement("th");
        let p = document.createElement("th");
        let a = document.createElement("a");
        h2.textContent = item.userId;
        h4.textContent = item.id;
        p.textContent = item.title;
        a.textContent = "See photos";
        a.setAttribute("href", `/?id=${item.id}`);
        li.append(h2, h4, p, a);
        tBody.append(li);
      });
    });
}

// const changeArray = (array, number) => {
//   for (let i = 1; i <= number; i++) {
//     let item = array.pop();
//     array.unshift(item); 
//   }
//   return array;
// };
// console.log(changeArray([2, 3, 4, 5], 1));
