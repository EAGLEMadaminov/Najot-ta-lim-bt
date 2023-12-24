function Value({ data }) {
  return (
    <div className="flex  my-5 ">
      <img src={data.img} className="w-[150px] h-[150px]" alt="" />
      <div className="ml-14 w-[500px]">
        <h3 className="text-2xl ">{data.text}</h3>
        <p className="mt-5">{data.info}</p>
      </div>
    </div>
  );
}

export default Value;
