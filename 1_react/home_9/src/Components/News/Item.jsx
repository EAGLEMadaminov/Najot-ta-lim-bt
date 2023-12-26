const Item = ({ data }) => {
  return (
    <div className="w-[300px] shadow-xl  p-3 rounded-lg">
      <img src={data.img} alt="" className="rounded-lg" />
      <h2 className="text-[#00171F] font-bold  mt-2">{data.name}</h2>
      <div className="flex my-1">
        <p className="text-[#667479] mr-3">
          Gene:{" "}
          <span className="text-[#667479] font-bold ml-2">{data.gene}</span>
        </p>{" "}
        *{" "}
        <p className="text-[#667479] ml-3">
          Age: <span className="text-[#667479] font-bold ml-2">{data.age}</span>
        </p>
      </div>
      <h2 className="font-bold">{data.price}</h2>
    </div>
  );
};

export default Item;
