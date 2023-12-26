import Logo from "../assets/logo.png";

const Headers = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center py-6">
        <img src={Logo} alt="" />
        <ul className="hidden lg:flex gap-4 text-[#003459] font-semibold text-xl">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Category</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="flex rounded-[30px] lg:bg-white items-center px-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            type="text"
            placeholder="Search something here!"
            className="p-3  outline-none hidden lg:inline-block"
          />
        </div>
        <button className="hidden lg:inline-block rounded-[30px] p-3 px-7 bg-[#003459] text-white">
          Join the community
        </button>
        <select className="hidden lg:inline bg-transparent text-[#003459] font-semibold">
          <option value="eng">Eng</option>
          <option value="uz">Uz</option>
          <option value="ru">Ru</option>
        </select>
      </div>
    </header>
  );
};

export default Headers;
