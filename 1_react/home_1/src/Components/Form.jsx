function Form() {
  return (
    <div className="container mx-auto bg-[#0A2640] text-center text-white py-[50px] rounded-lg">
      <h2 className="text-4xl w-[600px] mx-auto leading-[50px] px-10">
        An enterprise template to ramp up your company website
      </h2>
      <div className="flex justify-center gap-5 my-10">
        <input
          type="text"
          placeholder="Your email address"
          className="border rounded-[30px] placeholder-black w-[400px] bg-white p-3  px-5 text-black outline-none"
        />
        <button className="p-3 px-10 font-semibold  bg-green-500 text-black rounded-[30px]">
          Start now
        </button>
      </div>
    </div>
  );
}

export default Form;
