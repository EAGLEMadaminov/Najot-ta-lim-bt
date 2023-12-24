import React from "react";
import Person from "../../assets/explorePerson.png";

function Explore() {
  return (
    <div className="bg-[#C7EEFF]">
      <div className="flex justify-around  items-center container mx-auto">
        <div className="w-[400px]">
          <h2 className="text-4xl font-semibold leading-10">
            Explore and hire talent from our platform
          </h2>
          <p className="my-8 text-[14px] ">
            We've got experts for every industry - all under one roof! You can
            find everything from WordPress developers to Graphic designers to
            copywriters and many more at Wakanda.
          </p>
        </div>
        <img src={Person} alt="" className="w-[500px] h-[500px]" />
      </div>
    </div>
  );
}

export default Explore;
