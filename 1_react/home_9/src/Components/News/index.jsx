import Pet1 from "../../assets/News/image1.jpg";
import Pet2 from "../../assets/News/image2.jpg";
import Pet3 from "../../assets/News/image3.jpg";
import Pet4 from "../../assets/News/image4.jpg";
import Pet5 from "../../assets/News/image5.jpg";
import Pet6 from "../../assets/News/image6.jpg";
import Pet7 from "../../assets/News/image7.jpg";
import Pet8 from "../../assets/News/image8.jpg";
import Item from "./Item";
import Sectionhead from "../Sectionhead";
const petsArray = [
  {
    img: Pet1,
    name: "MO231 - Pomeranian White",
    gene: "Male",
    age: "02 months",
    price: "6.900.000 VND",
  },
  {
    img: Pet2,
    name: "MO502 - Poodle Tiny Yellow",
    gene: "Male",
    age: "02 months",
    price: "3.900.000 VND",
  },
  {
    img: Pet3,
    name: "MO102 - Poodle Tiny Sepia",
    gene: "Male",
    age: "02 months",
    price: "4.000.000 VND",
  },
  {
    img: Pet4,
    name: "MO512 - Alaskan Malamute Grey",
    gene: "Male",
    age: "02 months",
    price: "8.900.000 VND",
  },
  {
    img: Pet5,
    name: "MO231 - Pembroke Corgi Cream",
    gene: "Male",
    age: "02 months",
    price: "7.900.000 VND",
  },
  {
    img: Pet6,
    name: "MO502 - Pembroke Corgi Tricolor",
    gene: "Male",
    age: "02 months",
    price: "9.000.000 VND",
  },
  {
    img: Pet7,
    name: "MO231 - Pomeranian White",
    gene: "Male",
    age: "02 months",
    price: "6.500.000 VND",
  },
  {
    img: Pet8,
    name: "MO512 - Poodle Tiny Dairy Cow",
    gene: "Male",
    age: "02 months",
    price: "5.000.000 VND",
  },
];

const News = () => {
  return (
    <div className="container my-[50px] mx-auto px-5">
  <Sectionhead text="Whats new?" info="Take a look at some of our pets" btn="View more"/>
      <div className="flex flex-wrap justify-between gap-3 my-5">
        {petsArray.map((item, index) => (
          <Item key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default News;
