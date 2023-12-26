const Sectionhead = ({ text, info, btn }) => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p>{text}</p>
        <h2 className="text-xl md:text-2xl font-semibold text-[#003459]">{info}</h2>
      </div>
      <button className=" hidden md:inline border p-[10px] text-[#003459] font-semibold px-5 rounded-[25px] border-[#003459]">
        {btn} ▶
      </button>
    </div>
  );
};

export default Sectionhead;
