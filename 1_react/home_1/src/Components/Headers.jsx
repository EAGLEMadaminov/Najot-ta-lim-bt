import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
function Headers() {
  return (
    <div className="bg-[#0A2640] ">
      <div className="container flex mx-auto justify-between py-5  items-center text-white">
        <img src={Logo} alt="" />
        <ul className="flex gap-5">
          <li>
            <Link to="/">Product</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="" className="bg-white font-semibold text-black p-2 px-4 rounded-[20px]">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Headers;
