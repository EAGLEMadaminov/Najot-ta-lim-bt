import Graphs from "../assets/graphics.png";
import Boldo from "../assets/boldo.png";
import Presto from "../assets/presto.png";
import Service1 from "../assets/service1.png";
import Service2 from "../assets/service2.png";
import Service3 from "../assets/service3.png";
import Connect from "../assets/personCall.png";
import Agile from "../assets/girlCall.png";
import Website1 from "../assets/website1.png";
import Website2 from "../assets/website2.png";
import Website3 from "../assets/website3.png";
import TeamWork from "../assets/teamwork.png";
import BlogTop1 from "../assets/blogTop1.png";
import BlogTop2 from "../assets/blogTop2.png";
import BlogTop3 from "../assets/blogTop3.png";
import BlogPerson1 from "../assets/blogPerson1.png";
import BlogPerson2 from "../assets/blogPerson2.png";
import BlogPerson3 from "../assets/blogPerson3.png";

import Services from "../Components/Home/Services";
import Websites from "../Components/Home/Websites";
import Blog from "../Components/Home/Blog";
import Form from "../Components/Form";

const services = [
  {
    image: Service1,
    title: "Cool feature title",
    text: "Learning curve network effects return on investment.",
    link: "Explore page",
  },
  {
    image: Service2,
    title: "Even cooler feature",
    text: "Learning curve network effects return on investment.",
    link: "Explore page",
  },
  {
    image: Service3,
    title: "Cool feature title",
    text: "Learning curve network effects return on investment.",
    link: "Explore page",
  },
];
const websites = [
  {
    text: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
    img: Website1,
    name: "Albus Dumbledore",
    job: "Manager @ Howarts",
  },
  {
    text: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
    img: Website2,
    name: "Severus Snape",
    job: "Manager @ Slytherin",
  },
  {
    text: "“Release facebook responsive web design business model canvas seed money monetization.”",
    img: Website3,
    name: "Harry Potter",
    job: "Team Leader @ Gryffindor",
  },
];
const blogs = [
  {
    topImage: BlogTop1,
    text: "Pitch termsheet backing validation focus release.",
    personImage: BlogPerson1,
    name: "Chandler Bing",
  },
  {
    topImage: BlogTop2,
    text: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    personImage: BlogPerson2,
    name: "Rachel Green",
  },
  {
    topImage: BlogTop3,
    text: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    personImage: BlogPerson3,
    name: "Monica Geller",
  },
];
function Home() {
  return (
    <div>
      <section className="bg-[#0A2640]">
        <div className=" container mx-auto pb-5">
          <div className="flex  justify-between py-10 items-center ">
            <div className="left w-[530px]">
              <h2 className="text-5xl text-white  leading-[70px] ">
                Save time by building fast with Boldo Template{" "}
              </h2>
              <p className="text-gray-400 my-5">
                Funding handshake buyer business-to-business metrics iPad
                partnership. First mover advantage innovator success deployment
                non-disclosure.
              </p>
              <div className="flex gap-3 font-semibold mt-5">
                <button className="p-2 px-14 rounded-[18px]  text-[#0A2640] bg-[#65E4A3] font-semibold">
                  Buy template
                </button>
                <button className="p-2 px-10 border rounded-[20px] text-white">
                  Explore
                </button>
              </div>
            </div>
            <img src={Graphs} alt="" />
          </div>
          <div className="flex justify-between mx-auto ">
            <img src={Boldo} alt="" />
            <img src={Presto} alt="" />
            <img src={Boldo} alt="" />
            <img src={Presto} alt="" />
            <img src={Boldo} alt="" />
            <img src={Boldo} alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container text-center mt-14">
          <p>Our Services</p>
          <h2 className="text-4xl w-[600px] leading-[50px] mx-auto">
            Handshake infographic mass market crowdfunding iteration.
          </h2>

          <div className="flex justify-around">
            {services.map((item, index) => (
              <Services key={index} info={item} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container flex my-[100px] mx-auto justify-around gap-10 items-center">
          <img src={Connect} alt="" className="w-[400px]" />
          <div className="w-[500px]">
            <h2 className="text-4xl leading-[50px] ">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <ul className="">
              <li className="items-center flex my-4">
                <span className="bg-[#0A2640] mr-4 w-[30px]  h-[30px] text-white rounded-[50%] flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </span>
                We connect our customers with the best.{" "}
              </li>
              <li className="items-center flex my-4">
                <span className="bg-[#0A2640] text-white leading-[30px] flex justify-center items-center  mr-4 w-[30px] h-[30px] rounded-[50%] ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </span>
                Advisor success customer launch party.{" "}
              </li>
              <li className="items-center flex my-4">
                <span className="bg-[#0A2640] mr-4 text-white justify-center items-center flex w-[30px] h-[30px] rounded-[50%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    className="bi bi-check2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </span>
                Business-to-consumer long tail.
              </li>
            </ul>
            <button className="bg-[#0A2640] mt-5 p-3 px-14 text-white rounded-[30px]">
              Start now{" "}
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="flex container mx-auto items-center justify-around">
          <div className="w-[470px]">
            <h2 className="text-4xl leading-[50px]">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <ul className="text-xl">
              <li className="p-3 my-5 px-4 flex items-center bg-[#0A2640] text-white">
                <span className="mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-feather"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.765 3.765 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1c-1.95 1.686-3.168 3.724-3.758 5.423-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88.017.04.035.082.056.122A68.362 68.362 0 0 0 .08 15.198a.528.528 0 0 0 .157.72.504.504 0 0 0 .705-.16 67.606 67.606 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.528.528 0 0 0 0-.739l-.729-.744 1.311.209a.504.504 0 0 0 .443-.15c.222-.23.444-.46.663-.684.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.524.524 0 0 0-.112-.172ZM3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196a.526.526 0 0 0-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.282 1.282 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a6.85 6.85 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524-1.581-.25Zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a7.97 7.97 0 0 1 1.564-.173Z" />
                  </svg>
                </span>{" "}
                We connect our customers with the best.{" "}
              </li>
              <li className="p-3 my-5 flex items-center px-4 shadow-lg">
                <span className="mr-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
                  </svg>
                </span>{" "}
                Advisor success customer launch party.
              </li>
              <li className="p-3 my-5 flex items-center px-4 shadow-lg ">
                <span className="mr-3">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-sun"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                  </svg>
                </span>{" "}
                Business-to-consumer long tail.
              </li>
            </ul>
          </div>
          <img src={Agile} alt="" className="w-[400px] h-[600px]" />
        </div>
      </section>
      <section className="bg-[#0A2640] py-[100px]">
        <div className="container mx-auto ">
          <div className="flex justify-around">
            <h2 className="text-4xl text-white w-[500px] leading-[50px] ">
              An enterprise template to ramp up your company website
            </h2>
            <div className="flex gap-4 items-end">
              <span className="bg-white w-[40px] h-[40px] items-center justify-center flex rounded-[50px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
              </span>
              <span className="bg-white w-[40px] h-[40px] flex items-center justify-center rounded-[50%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </span>
            </div>
          </div>
          <div className="flex justify-around gap-5 my-10">
            {websites.map((item, index) => (
              <Websites key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="my-[100px]">
        <div className="container mx-auto text-center">
          <img src={TeamWork} alt="" className="w-full" />
          <div className="flex my-10 justify-between">
            <h2 className="text-3xl leading-[40px] text-left w-[400px]">
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h2>
            <div>
              <ul>
                <li className="flex items-center pb-2 border-b my-4">
                  We connect our customers with the best?
                  <button className="w-[20px] ml-10 h-[20px] rounded-[50%] bg-[#0A2640] text-white flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="  bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                </li>
                <li className="flex items-center pb-2 border-b my-4">
                  Android research & development rockstar?
                  <button className="w-[20px] ml-10 h-[20px] rounded-[50%] bg-[#0A2640] text-white flex justify-center items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="12"
                      fill="currentColor"
                      className="  bi bi-chevron-down"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="my-[100px]">
        <div className="container mx-auto text-center">
          <p className="text-center">Our Blog</p>
          <h2 className="text-4xl text-center w-[700px] mx-auto leading-[50px]">
            Value proposition accelerator product management venture
          </h2>

          <div className="flex justify-around my-10 gap-3">
            {blogs.map((item, index) => {
              return <Blog key={index} data={item} />;
            })}
          </div>
          <button className="font-semibold mx-auto  border border-[#0A2640] text-[#0A2640] rounded-[20px] p-2 px-8 ">
            Learn more
          </button>
        </div>
      </section>
      <section>
        <Form />
      </section>
    </div>
  );
}

export default Home;
