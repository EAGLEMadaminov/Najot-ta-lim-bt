import { Component } from "react";
import NavLinks from "../NavLinks.jsx";

class Nav extends Component {
  render() {
    return (
      <nav>
        <a href="#">
          <img src="/vite.svg" alt="" />
        </a>
        <ul className="flex">
          <NavLinks link="/about">About</NavLinks>
          <NavLinks link="/contact">Contact</NavLinks>
          <NavLinks link="/login">Log in</NavLinks>
        </ul>
      </nav>
    );
  }
}

export default Nav;
