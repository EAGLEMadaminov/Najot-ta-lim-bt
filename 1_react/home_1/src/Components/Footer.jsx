import FooterLogo from "../assets/footerLogo.png";
import { Link } from "react-router-dom";
const links = [
  { name: "Landings", link1: "Home", link2: "Products", link3: "Services" },
  {
    name: "Company",
    link1: "Home",
    link2: "Careers",
    hire: "Hiring!",
    link3: "Services",
  },
  { name: "Resources", link1: "Blog", link2: "Products", link3: "Services" },
];
function Footer() {
  return (
    <div className="container mx-auto flex justify-between my-[100px] px-5">
      <div className="w-[300px]">
        <img src={FooterLogo} alt="" />
        <p className="my-7 text-gray-400">
          Social media validation business model canvas graphical user interface
          launch party creative facebook iPad twitter.
        </p>
        <p className="text-gray-400">All rights reserved.</p>
      </div>
      {links.map((item, index) => (
        <div key={index}>
          <h2 className="font-semibold text-xl ">{item.name}</h2>
          <ul className="text-gray-400 gap-5 ">
            <li className="my-5 mt-7">
              <Link to="/">{item.link1}</Link>
            </li>
            <li className="my-5">
              <Link>{item.link2}</Link>
            </li>
            <li className="my-5">
              <Link>{item.link3}</Link>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Footer;
