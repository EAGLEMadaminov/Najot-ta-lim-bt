import React from "react";
import Lady from "../../assets/last-image.png";

function Find() {
  return (
    <div className="container mx-auto my-10 bg-[#0077C0] flex items-center justify-between  px-[100px] text-white">
      <img src={Lady} alt="" />
      <div className="w-[400px]">
        <h4>WHAT ARE YOU WAITING FOR?</h4>
        <h2 className="text-4xl find-bold mt-5 mb-10">
          Find the talent to get your business growing
        </h2>
        <button className="border rounded-lg bg-white text-[#0071D9] font-semibold p-2 px-3">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Find;
