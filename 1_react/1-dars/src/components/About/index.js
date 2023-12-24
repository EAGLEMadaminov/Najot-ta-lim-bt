import React from "react";
import Person1 from "../../assets/About/person1.png";
import Person2 from "../../assets/About/person2.png";
import Person3 from "../../assets/About/person3.png";
import Person4 from "../../assets/About/person4.png";
import Person5 from "../../assets/About/person5.png";
import Person6 from "../../assets/About/person6.png";
import Stars from "../../assets/About/starts.png";
function About() {
  return (
    <div className="container mx-auto">
      <div className="text-center py-[100px] bg-[#FAFAFA]">
        <p>TESTIMONIAL</p>
        <h2 className="text-4xl w-[500px] font-bold mx-auto">
          See what they’re saying about us
        </h2>

        <div className="flex flex-wrap gap-5  my-10 justify-around">
          <div className="text-left bg-white p-8 w-[350px] ">
            <div className="img flex items-center">
              <img src={Person1} alt="" className="w-[80px] h-[80px]" />
              <div className="ml-3">
                <h4 className="font-bold">Cara Bedford</h4>
                <img src={Stars} alt="" />
              </div>
            </div>
            <p className="my-3">
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it!
            </p>
          </div>
          <div className="text-left w-[350px] bg-white p-8">
            <div className="img flex items-center">
              <img src={Person2} alt="" className="w-[80px] h-[80px]" />
              <div className="ml-3">
                <h4 className="font-bold">Robert Fox</h4>
                <img src={Stars} alt="" />
              </div>
            </div>
            <p className="my-3">
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it!
            </p>
          </div>
          <div className="text-left w-[350px] bg-white p-8">
            <div className="img flex items-center">
              <img src={Person3} alt="" className="w-[80px] h-[80px]" />
              <div className="ml-3">
                <h4 className="font-bold">Albert Flores</h4>
                <img src={Stars} alt="" />
              </div>
            </div>
            <p className="my-3">
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it!
            </p>
          </div>
          <div className="text-left bg-white p-8 w-[350px]">
            <div className="img flex items-center">
              <img src={Person4} alt="" className="w-[80px] h-[80px]" />
              <div className="ml-3">
                <h4 className="font-bold">Kathryn Murphy</h4>
                <img src={Stars} alt="" />
              </div>
            </div>
            <p className="my-3">
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it!
            </p>
          </div>
          <div className="text-left bg-white p-8 w-[350px]">
            <div className="img flex items-center">
              <img src={Person5} alt="" className="w-[80px] h-[80px]" />
              <div className="ml-3">
                <h4 className="font-bold">Esther Howard</h4>
                <img src={Stars} alt="" />
              </div>
            </div>
            <p className="my-3">
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it!
            </p>
          </div>
          <div className="text-left bg-white p-8 w-[350px]">
            <div className="img flex items-center">
              <img src={Person6} alt="" className="w-[80px] h-[80px]" />
              <div className="ml-3">
                <h4 className="font-bold">Eleanor Pena</h4>
                <img src={Stars} alt="" />
              </div>
            </div>
            <p className="my-3">
              I have been using Wakanda for quite some time now and I have to
              say it has been the best freelance hiring platform that I've used.
              The quality of freelancers on this site is very high and they're
              totally reliable. I would highly recommend it!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
