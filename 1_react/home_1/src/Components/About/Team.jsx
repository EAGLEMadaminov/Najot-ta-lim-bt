function Team({ data }) {
  return (
    <div>
      <img src={data.img} alt="" />
      <h2 className="text-xl my-5">{data.name}</h2>
      <p className="text-[#777777]">{data.job}</p>
    </div>
  );
}

export default Team;
