let layerBtns = document.querySelectorAll(".layer-btns .btn");
let burgerWrapper = document.querySelector(".burger");
let topBread = document.querySelector(".bread.top");
let bottomBread = document.querySelector(".bread.bottom");
let total = document.querySelector(".total");
let orderBtn = document.querySelector(".order-btn");
let lang = document.querySelector(".lang");
let items = document.querySelectorAll(".list-group-item");
let elTotalText = document.querySelector(".total-text");

let localItems = [];
let ingredients = {
  cheese: 2,
  meat: 5,
  onion: 1,
  tomato: 1,
  pickle: 1,
  salad: 1,
};
let listArr = {
  en: [
    "Bread- $2",
    "Cheese- $2",
    "Meat- $5",
    "Onion- $1",
    "Tomato- $1",
    "Pickle- $1",
    "Salad- $1",
  ],
  uz: [
    "Non- $2",
    "Pishloq- $2",
    "Go'sht- $5",
    "Piyoz- $1",
    "Pomidor- $1",
    "Bodring- $1",
    "Salad bargi- $1",
  ],
  ru: [
    "Хлеб – 2$",
    "Сыр- 2$",
    "Мясо- 5$",
    "Лук- 1$",
    "Помидоры- 1$",
    "Огурец- 1$",
    "Салат- 1$",
  ],
};
let choosenItems = [];
let id = 0;
layerBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    id++;
    let layer = btn.getAttribute("data-layer");
    let price = ingredients[layer];
    let imageURL = "./burger-layers/" + layer + ".svg";
    let image = document.createElement("img");
    image.setAttribute("src", imageURL);
    image.setAttribute("id", id);
    choosenItems.push({
      item: listArr.en[index + 1].slice(0, listArr.en[index + 1].indexOf("-")),
      id: id,
    });
    image.classList.add(layer);
    burgerWrapper.insertBefore(image, topBread);
    total.innerText = +total.innerText + price;

    image.addEventListener("click", () => {
      choosenItems = choosenItems.filter(
        (item) => item.id !== Number(image.getAttribute("id"))
      );
      image.remove();
      total.innerText -= price;
    });
  });
});

let burger = [];
orderBtn.addEventListener("click", () => {
  if (+total.innerText < 8) return;
  let order = Math.floor(Math.random() * 26 + 10);
  let time = new Date();
  let day = time.getDate();
  let hour = time.getHours().toString(10).padStart(2, 0);
  let min = time.getMinutes().toString(10).padStart(2, 0);
  let month = (time.getMonth() + 1).toString(10).padStart(2, 0);
  burger.push({
    burger: choosenItems,
    bread: "bread",
    date: { month, day, date: `${hour}:${min}` },
    total: `${total.textContent}$`,
  });

  localStorage.setItem("burger", JSON.stringify(burger));
  alert(
    "Buyurtmangiz uchun $" +
      total.innerText +
      " qabul qilindi! Sizning tartibingiz " +
      order +
      ". Bizni tanlaganingizdan xursandmiz. 📣"
  );

  total.innerHTML = 2;
});

let btnChanger = document.querySelector("#btn-changer");

btnChanger.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnChanger.textContent = "Dark";
});

// lang
lang.addEventListener("change", (e) => {
  localStorage.setItem("lang", e.target.value);
  items.forEach((item, index) => {
    if (e.target.value === "uz") {
      orderBtn.textContent = "Tanlash";
      item.textContent = listArr.uz[index];
    } else if (e.target.value === "en") {
      orderBtn.textContent = "Order Now";
      item.textContent = listArr.en[index];
    } else if (e.target.value === "ru") {
      orderBtn.textContent = "Выбирать";
      item.textContent = listArr.ru[index];
    }
  });
  layerBtns.forEach((btn, index) => {
    if (e.target.value === "uz") {
      elTotalText.textContent = "Jami:  $";
      btn.textContent = listArr.uz[index + 1].slice(
        0,
        listArr.uz[index + 1].indexOf("-")
      );
    } else if (e.target.value === "en") {
      elTotalText.textContent = "Total: $";

      btn.textContent = listArr.en[index + 1].slice(
        0,
        listArr.en[index + 1].indexOf("-")
      );
    } else if (e.target.value === "ru") {
      elTotalText.textContent = "Общий: $";

      btn.textContent = listArr.ru[index + 1].slice(
        0,
        listArr.ru[index + 1].indexOf("-")
      );
    }
  });
});

// localStorage
let choosenL = localStorage.getItem("lang");
lang.value = choosenL || "uz";
items.forEach((item, index) => {
  if (choosenL === "uz") {
    orderBtn.textContent = "Tanlash";
    item.textContent = listArr.uz[index];
  } else if (choosenL === "en") {
    orderBtn.textContent = "Order Now";
    item.textContent = listArr.en[index];
  } else if (choosenL === "ru") {
    orderBtn.textContent = "Выбирать";
    item.textContent = listArr.ru[index];
  }
});
layerBtns.forEach((btn, index) => {
  if (choosenL === "uz") {
    elTotalText.textContent = "Jami:  $";
    btn.textContent = listArr.uz[index + 1].slice(
      0,
      listArr.uz[index + 1].indexOf("-")
    );
  } else if (choosenL === "en") {
    elTotalText.textContent = "Total: $";

    btn.textContent = listArr.en[index + 1].slice(
      0,
      listArr.en[index + 1].indexOf("-")
    );
  } else if (choosenL === "ru") {
    elTotalText.textContent = "Общий: $";

    btn.textContent = listArr.ru[index + 1].slice(
      0,
      listArr.ru[index + 1].indexOf("-")
    );
  }
});
