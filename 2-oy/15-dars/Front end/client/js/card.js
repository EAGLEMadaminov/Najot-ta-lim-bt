let showCartsDiv = document.querySelector(".show-carts");

axios.defaults.baseURL = "http://localhost:5050/api/v1";
let token = localStorage.getItem("client-token");

async function showCard() {
  let { data } = await axios.get("/clients/me", {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  data.cart.forEach(async (item) => {
    let { data: oneProduct } = await axios.get(`products/${item.product}`);
    let itemDiv = document.createElement("div");
    itemDiv.className =
      "w-[300px] m-4 text-center rounded-lg border-[5px] p-3 ";
    let image = document.createElement("img");
    image.setAttribute("src", oneProduct?.image);
    image.className = "w-[200px] h-[200px] mx-auto";
    let name = document.createElement("h2");
    name.textContent = `Name: ${oneProduct?.name?.uz}`;
    let price = document.createElement("p");
    price.textContent = `Price: ${oneProduct?.price}$`;
    let count = document.createElement("p");
    count.textContent = `Count: ${item.quantity}`;
    let all = [name, price, count];
    all.forEach((item) => {
      item.classList.add("my-3");
    });
    itemDiv.append(image, name, price, count);
    showCartsDiv.append(itemDiv);
  });
}
showCard();
