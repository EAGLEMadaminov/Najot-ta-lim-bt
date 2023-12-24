import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const links = [
  { link: "/", iconName: "house", text: "Home" },
  { link: "/about", iconName: "info", text: "About" },
  { link: "/contact", iconName: "phone", text: "Contact" },
  { link: "/blog", iconName: "note-sticky", text: "Blog" },
  { link: "/product", iconName: "market", text: "Product" },
  { iconName: "note-sticky", text: "Logout" },
];
function Header() {
  return (
    <header className="sticky-top w-full">
      <nav className="py-5 bg-blue-500">
        <ul className="flex justify-around">
          {links
            .filter((l) => l.link)
            .map((item, index) => (
              <NavLinks
                key={index}
                link={item.link}
                iconName={item.iconName}
                text={item.text}
              />
            ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
