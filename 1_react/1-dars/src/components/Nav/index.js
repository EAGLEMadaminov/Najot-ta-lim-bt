import React from "react";
import logo from "../../assets/logo.png";
import Button from "../Button";

function Nav() {
  return (
    <header className="navbar p-5 px-10 flex justify-between items-center">
      <div className="logo flex">
        <img src={logo} alt="logo png" />
        <a href="/" className="text-3xl ml-3 font-bold">
          Wakanda
        </a>
      </div>
      <nav>
        <ul className="flex gap-3 text-xl items-center">
          <li className="mx-2">
            <a href="#home">Home</a>
          </li>
          <li className="mx-2">
            <a href="#about">About Us</a>
          </li>
          <li className="mx-2">
            <a href="#how">How It Works</a>
          </li>
          <li className="mx-2">
            <a href="#freelance">For Freelancer</a>
          </li>
          <li className="mx-2">
            <Button />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
