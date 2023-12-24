import { Component } from "react";
import NavLinks from "../NavLinks.jsx";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="#">
          <img src="/vite.svg" alt="" className="w-[50px]" />
        </a>
        <ul className="flex">
          <Link to="/">Home</Link>
          <NavLinks link="/about" className="text-2xl">
            About
          </NavLinks>
          <NavLinks link="/contact">Contact</NavLinks>
          <NavLinks link="/login">Log in</NavLinks>
        </ul>
      </nav>
    );
  }
}

export default Nav;
