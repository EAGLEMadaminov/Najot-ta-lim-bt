function Websites({ data }) {
  return (
    <div className="border  h-auto bg-white rounded-lg  p-10 w-[330px]">
      <h1 className="text-2xl">{data.text}</h1>
      <div className="flex mt-10 items-end">
        <img src={data.img} alt="" />
        <div className="ml-4">
          <p className="font-semibold">{data.name}</p>
          <p className="text-[14px]"> {data.job}</p>
        </div>
      </div>
    </div>
  );
}

export default Websites;
