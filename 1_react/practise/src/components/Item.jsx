function Item({ info }) {
  return (
    <div className="w-[300px] p-5 text-white text-center ">
      <h2 className="text-2xl">{info.title}</h2>
      <p className="mt-4">{info.text}</p>
    </div>
  );
}

export default Item;
