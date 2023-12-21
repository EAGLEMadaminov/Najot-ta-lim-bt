import React from "react";
import WakandaImage from "../../assets/Wireframes.png";

function Wakanda() {
  return (
    <div className="flex container mx-auto my-5 items-center justify-around">
      <img src={WakandaImage} alt="" className="w-[350px] h-[500px]" />
      <div className="w-[400px]">
        <h2 className="text-4xl font-semibold leading-14">
          Wakanda is an easy platform to find talent
        </h2>
        <ul className="flex flex-col gap-5">
          <li className="mt-5">
            <span className="border rounded-[50%] w-5 h-5 bg-blue-400 px-2 p-1 mr-2">
              1
            </span>
            Sign in to our website
          </li>
          <li>
            <span className="border rounded-[50%] w-5 h-5 bg-blue-400 px-2 p-1 mr-2">
              2
            </span>
            Fill out neccesary information
          </li>
          <li>
            <span className="border rounded-[50%] w-5 h-5 bg-blue-400 px-2 p-1 mr-2">
              3
            </span>
            Discover thoudsands of freelancers
          </li>
          <li>
            <span className="border rounded-[50%] w-5 h-5 bg-blue-400 px-2 p-1 mr-2">
              4
            </span>
            View freelancer’s profile and hire
          </li>
          <li>
            <span className="border rounded-[50%] w-5 h-5 bg-blue-400 px-2 p-1 mr-2">
              5
            </span>
            Complete payment & it’s time to work!
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Wakanda;
