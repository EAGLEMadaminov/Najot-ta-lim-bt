import Item from "../components/Item.jsx";
import { useState } from "react";
let array = [
  {
    title: "Componets",
    text: "1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus.",
    image: "",
  },
  {
    title: "JSX",
    text: "2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus.",
    image: "",
  },
  {
    title: "Props",
    text: "3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus.",
    image: "",
  },
  {
    title: "State",
    text: "4Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, repellendus.",
    image: "",
  },
];

function Component() {
  const [info, setInfo] = useState([]);
  const [isActive, setIsactive] = useState(false);
  return (
    <div className="bg-gray-600 h-screen">
      <div className="bg-gray-800 text-center text-white">
        <h1 className="text-3xl">Core Concepts</h1>
        <div className="container mx-auto   flex">
          {array.map((one, index) => (
            <Item key={index} info={one} />
          ))}
        </div>
      </div>

      <div className="container mx-auto text-white">
        <h2>Examples</h2>
        <div className="flex gap-4">
          {array.map((item, index) => (
            <button
              onClick={() => {
                setInfo([item]), setIsactive(true);
              }}
              className="2-[200px] p-2 px-3 hover:bg-blue-600 rounded-lg active:bg-blue-800"
              key={index}
            >
              {item.title}
            </button>
          ))}
        </div>
        {!isActive ? (
          <div>
            <p>{array[0].text}</p>
          </div>
        ) : (
          ""
        )}

        {info.map((one, index) => {
          return (
            <div key={index}>
              <p>{one.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Component;
