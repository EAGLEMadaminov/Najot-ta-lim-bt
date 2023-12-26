const Usefull = ({ data }) => {
  return (
    <div className="shadow-lg p-2">
      <img src={data.img} alt="" />
      <button className="p-1 my-4 px-3 rounded-[15px] bg-[#00A7E7] text-white">
        Pet knowledge
      </button>
      <div className="w-[350px]">
        <h2 className="text-[#00171F] my-3 font-bold">{data.title}</h2>
        <p>{data.text.slice(0, 210)} ...</p>
      </div>
    </div>
  );
};

export default Usefull;
