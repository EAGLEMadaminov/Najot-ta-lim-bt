import { Link } from "react-router-dom";
function header() {
  return (
    <header className="py-5 bg-blue-400 ">
      <div className="container mx-auto">
        <ul className="flex justify-around">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/component">Component</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default header;
