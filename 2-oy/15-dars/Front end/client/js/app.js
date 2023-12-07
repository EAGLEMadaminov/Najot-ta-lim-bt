let showProductDiv = document.querySelector(".show-product");
axios.defaults.baseURL = "http://localhost:5050/api/v1";

let getProducts = async () => {
  let { data } = await axios.get("/products");

  data.forEach((item) => {
    let itemDiv = document.createElement("div");
    itemDiv.className = "w-[300px] m-4 text-center rounded-lg border-[5px] p-3 ";
    let image = document.createElement("img");
    image.setAttribute("src", item.image);
    image.className = "w-[200px] h-[200px] mx-auto";
    let name = document.createElement("h2");
    name.textContent = `Name: ${item.name.uz}`;
    let price = document.createElement("p");
    let addBtn = document.createElement("button");
    addBtn.textContent = "Add to cart";
    addBtn.className = "p-2 bg-blue-500 rounded-md text-white";
    price.textContent = `Price: ${item.price}$`;
    let category = document.createElement("p");
    category.textContent = `Category: ${item.category.uz}`;
    let all = [name, price, addBtn];
    all.forEach((item)=>{
        item.classList.add("my-3")
    })
    itemDiv.append(image, name, price, category, addBtn);
    showProductDiv.append(itemDiv);
  });
};
getProducts();
