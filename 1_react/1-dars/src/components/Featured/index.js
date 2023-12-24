import React from "react";
import Profession from "../../assets/award.png";
import HeadPhones from "../../assets/headphones.png";
import Verify from "../../assets/verified_user.png";
function Featured() {
  return (
    <div className="w-full bg-[#0077C0] text-white text-center py-12">
      <h3 className="uppercase">Feature</h3>
      <h2 className="text-4xl w-[330px] mx-auto">
        The benefit of using our platform
      </h2>

      <div className="flex justify-around mt-10  text-left px-14 gap-5">
        <div className="p-5">
          <div className="border  rounded-[50%] bg-white flex place-items-center w-[100px] h-[100px]">
            <img src={Profession} alt="" className="w-10 h-10 mx-auto" />
          </div>
          <h3 className="text-xl mt-6 mb-3">Professional & Fast</h3>
          <p className="text-gray-300">
            Search and hire the most talented freelancers to match your needs.
            No matter what you need done, we've got the perfect freelancer for
            you.
          </p>
        </div>
        <div className="p-5">
          <div className="border  rounded-[50%] bg-white flex place-items-center w-[100px] h-[100px]">
            <img src={HeadPhones} alt="" className="w-10 h-10 mx-auto" />
          </div>
          <h3 className="text-xl mt-6 mb-3">Professional & Fast</h3>
          <p className="text-gray-300">
            Search and hire the most talented freelancers to match your needs.
            No matter what you need done, we've got the perfect freelancer for
            you.
          </p>
        </div>
        <div className="p-5">
          <div className="border  rounded-[50%] bg-white flex place-items-center w-[100px] h-[100px]">
            <img src={Verify} alt="" className="w-10 h-10 mx-auto" />
          </div>
          <h3 className="text-xl mt-6 mb-3">Professional & Fast</h3>
          <p className="text-gray-300">
            Search and hire the most talented freelancers to match your needs.
            No matter what you need done, we've got the perfect freelancer for
            you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Featured;
