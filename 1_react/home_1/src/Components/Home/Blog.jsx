function Blog({ data }) {
  return (
    <div className="rounded-lg text-left">
      <img src={data.topImage} alt="" />
      <p className="text-gray-400 text-[14px] my-5">
        {" "}
        <span className="font-semibold text-[18px] mr-3 text-black">
          Category
        </span>
        November 22, 2021
      </p>
      <p className="w-[300px] text-xl mb-6">{data.text}</p>
      <div className="flex items-center">
        <img src={data.personImage} alt="" />
        <p className="ml-3">{data.name}</p>
      </div>
    </div>
  );
}

export default Blog;
