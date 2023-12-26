import Sectionhead from "../../Components/Sectionhead.jsx";
import Product1 from "../../assets/Products/product1.png";
import Product2 from "../../assets/Products/product2.png";
import Product3 from "../../assets/Products/product3.png";
import Product4 from "../../assets/Products/product4.png";
import Product5 from "../../assets/Products/product5.png";
import Product6 from "../../assets/Products/product6.png";
import Product7 from "../../assets/Products/product7.png";
import Product8 from "../../assets/Products/product8.png";
import Item from "./Item.jsx";
const productsList = [
  {
    img: Product1,
    name: "Reflex Plus Adult Cat Food Salmon",
    product: "Dog Food",
    size: "385gm",
    price: "140.000 VND",
    foot: "Free Toy & Free Shaker",
  },
  {
    img: Product2,
    name: "Reflex Plus Adult Cat Food Salmon",
    product: "Cat Food",
    size: "1.5kg",
    price: "165.000 VND",
    foot: "Free Toy & Free Shaker",
  },
  {
    img: Product3,
    name: "Cat scratching ball toy kitten sisal rope ball",
    product: "Toy",
    price: "1.100.000 VND",
    foot: "Free Cat Food",
  },
  {
    img: Product4,
    name: "Cute Pet Cat Warm Nest",
    product: "Toy",
    price: "410.000 VND",
    foot: "Free Cat Food",
  },
  {
    img: Product5,
    name: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    product: "Dog Food",
    size: "385gm",
    price: "350.000 VND",
    foot: "Free Toy & Free Shaker",
  },
  {
    img: Product6,
    name: "Costumes Fashion Pet Clother Cowboy Rider",
    product: "Costume",
    size: "1.5kg",
    price: "500.000 VND",
    foot: "Free Toy & Free Shaker",
  },
  {
    img: Product7,
    name: "Costumes Chicken Drumsti ck Headband",
    product: "Costume",
    price: "400.000 VND",
    foot: "Free Cat Food",
  },
  {
    img: Product8,
    name: "Plush Pet Toy",
    product: "Toy",
    price: "250.000 VND",
    foot: "Free Toy & Free Shaker",
  },
];

const Products = () => {
  return (
    <div className="container mx-auto">
      <Sectionhead
        text="Hard to choose right products for your pets?"
        info="Our Products"
        btn="View more"
      />
      <div className="flex justify-center md:justify-between flex-wrap my-10">
        {productsList.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
