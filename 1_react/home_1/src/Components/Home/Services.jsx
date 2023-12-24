function Services({ info }) {
  return (
    <div className="p-14 text-left">
      <img src={info.image} alt="" className="w-[250px]" />
      <h2 className="text-xl">{info.title}</h2>
      <p className="w-[250px] my-5 text-gray-400">{info.text}</p>
      <button className="font-bold flex items-center border-b pb-2 border-black">
        {info.link}{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          className="bi mt-1 ml-2 bi-arrow-right-short"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
          />
        </svg>
      </button>
    </div>
  );
}

export default Services;
