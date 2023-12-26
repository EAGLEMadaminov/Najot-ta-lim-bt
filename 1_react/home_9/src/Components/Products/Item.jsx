import Prize from "../../assets/Products/prize.png";
const Item = ({ data }) => {
  return (
    <div className="w-[300px] my-5 md:my-0 p-5 shadow-lg">
      <img src={data.img} alt="" />
      <div>
        <h2 className="text-[#00171F]  text-[18px] font-bold">{data.name}</h2>
        <div className="flex my-3">
          <p className="mr-2 text-[#667479]">
            Product: <span className="font-bold">{data.product}</span>
          </p>{" "}
          *{" "}
          {data.size ? (
            <p className="ml-2 text-[#667479]">
              Size: <span className="font-bold">{data.size}</span>
            </p>
          ) : (
            ""
          )}
        </div>
        <h3 className="text-[#00171F] font-bold">{data.price}</h3>
        <div className="flex p-2 bg-rose-100 rounded-lg font-semibold mt-2 ">
          <img src={Prize} alt="" className="mr-5" />* {data.foot}
        </div>
      </div>
    </div>
  );
};

export default Item;
