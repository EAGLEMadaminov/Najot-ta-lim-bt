function Product({ product }) {
  console.log(product);
  return (
    <div className="border rounded-lg w-[300px] p-4">
      <img
        src={product.image}
        alt={product.title}
        className="w-[100px] h-[100px]"
      />
      <h2 className="text-xl">{product.title}</h2>
      <p>{product.description.slice(0, 90)}...</p>
    </div>
  );
}

export default Product;
