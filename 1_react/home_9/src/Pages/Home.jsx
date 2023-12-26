import Headers from "../Components/Headers";
import HeadImage from "../assets/head-pet.png";
import News from "../Components/News";
import girlUpPet from "../assets/girl-up-pet.png";
import Friends from "../Components/Friends";
import Products from "../Components/Products";
import Sectionhead from "../Components/Sectionhead";
import Usefull from "../Components/Usefull";

import PetSeller1 from "../assets/PetSeller/seller1.png";
import PetSeller2 from "../assets/PetSeller/seller2.png";
import PetSeller3 from "../assets/PetSeller/seller3.png";
import PetSeller4 from "../assets/PetSeller/seller4.png";
import PetSeller5 from "../assets/PetSeller/seller5.png";
import PetSeller6 from "../assets/PetSeller/seller6.png";
import PetSeller7 from "../assets/PetSeller/seller7.png";
import HandlePet from "../assets/handle-pet.png";
import useFullAdviceImage1 from "../assets/usefull1.png";
import useFullAdviceImage2 from "../assets/usefull2.png";
import useFullAdviceImage3 from "../assets/usefull3.png";

const array = [
  {
    img: useFullAdviceImage1,
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    text: "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
  },
  {
    img: useFullAdviceImage2,
    title: "Dog Diet You Need To Know",
    text: "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
  },
  {
    img: useFullAdviceImage3,
    title:
      "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    text: "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
  },
];

const Home = () => {
  return (
    <>
      <section className="bg-[#FCEDD1] h-screen rounded-b-[30px]">
        <div className="container mx-auto px-5">
          <Headers />
          <div className="flex lg:justify-between flex-wrap md:justify-center">
            <Friends />
            <img src={HeadImage} className="w-[600px]" alt="" />
          </div>
        </div>
      </section>
      <section id="news">
        <News />
      </section>
      <section>
        <div className="container bg-[#003459] mx-auto justify-start rounded-lg flex-wrap-reverse flex md:justify-between">
          <img src={girlUpPet} alt="" className="mt-10" />
          <div className="friend-img">
            <Friends />
          </div>
        </div>
      </section>
      <section id="products" className="my-10">
        <Products />
      </section>
      <div className="container mx-auto hidden lg:block">
        <Sectionhead
          text="Proud to be part of"
          info="Pet Sellers"
          btn="View all our sellers"
        />
        <div className="flex justify-between flex-wrap my-5">
          <img src={PetSeller1} alt="" />
          <img src={PetSeller2} alt="" />
          <img src={PetSeller3} alt="" />
          <img src={PetSeller4} alt="" />
          <img src={PetSeller5} alt="" />
          <img src={PetSeller6} alt="" />
          <img src={PetSeller7} alt="" />
        </div>
      </div>
      <section>
        <div className="container hidden mx-auto lg:flex  justify-around bg-[#FFB775] rounded-[20px] ">
          <div className="w-[600px] show-left p-5">
            <h2 className="text-[#003459] mt-[50px] text-6xl font-bold">
              Adoption
            </h2>
            <h3 className="text-5xl my-5 text-[#003459] font-semibold">
              We need help. so do they.
            </h3>
            <p className="text-[18px] w-[300px]">
              Adopt a pet and give it a home, it will be love you back
              unconditionally.
            </p>
            <div className="flex gap-4 mt-7">
              <button className="border flex items-center  border-[#003459] p-2 px-4 rounded-[20px] text-[#003459]">
                View Intro{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className=" ml-2 bi bi-play-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                </svg>
              </button>
              <button className="p-2 px-6 rounded-[20px] bg-[#003459] text-white">
                Explore Now
              </button>
            </div>
          </div>
          <img src={HandlePet} alt="" />
        </div>
      </section>
      <section>
        <div className="container mx-auto my-[100px]">
          <Sectionhead
            text="You already know ?"
            info="Useful pet knowledge"
            btn="View more"
          />
          <div className="flex justify-center lg:justify-between flex-wrap gap-4 my-14">
            {array.map((item, index) => (
              <Usefull key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
