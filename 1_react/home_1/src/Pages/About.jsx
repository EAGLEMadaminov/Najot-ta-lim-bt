import Service1 from "../assets/service1.png";
import BlogTop3 from "../assets/blogTop3.png";
import Team from "../assets/About/about_team.png";
import Person from "../assets/About/personCall.png";
import Girl from "../assets/About/girlCall.png";
import Team1 from "../assets/About/team1.png";
import Team2 from "../assets/About/team2.png";
import Team3 from "../assets/About/team3.png";
import Handle from "../assets/About/last.png";

import TeamComponent from "../Components/About/Team";
import Value from "../Components/About/Value";
import Form from "../Components/Form";

const teamArray = [
  { img: Team1, name: "Michael Scott", job: "General Manager" },
  { img: Team2, name: "Dwight Schrute", job: "General Manager" },
  { img: Team3, name: "Pam Beetsley", job: "General Manager" },
];
const valuesArray = [
  {
    img: BlogTop3,
    text: "We are commited.",
    info: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
  },
  {
    img: Service1,
    text: "We are responsible.",
    info: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
  },
  {
    img: Handle,
    text: "We aim for progress.",
    info: "Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. ",
  },
];
function About() {
  return (
    <div>
      <section className="bg-[#0A2640] py-5 pb-[200px]">
        <div className="text-center text-white w-[600px] mx-auto">
          <p>About</p>
          <h2 className="text-5xl my-5 leading-[60px]">
            We love to make great things, things that matter.
          </h2>
          <p>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </div>
      </section>
      <div className="flex translate-y-[-100px] content-between container mx-auto justify-around">
        <div>
          <img src={Person} alt="" className="w-[300px] mb-14" />
          <img src={BlogTop3} alt="" className="w-[300px] h-[280px]" />
        </div>
        <img src={Girl} alt="" className="w-[400px]" />
        <div>
          <img src={Service1} alt="" className="w-[300px] mb-14 h-[280px]" />
          <img src={Team} alt="" className="w-[300px]" />
        </div>
      </div>
      <section className="bg-[#0A2640]">
        <div className="text-center text-white py-[100px]">
          <p>Our numbers</p>
          <h2 className="text-4xl w-[600px] leading-[60px] mx-auto">
            Handshake infographic mass market crowdfunding iteration.
          </h2>
          <ul className="flex container justify-around mx-auto mt-10">
            <li>
              <h3 className="text-[96px] text-[#4FE9A4]">120m</h3>
              <p className="text-xl">Cool feature title</p>
            </li>
            <li>
              <h3 className="text-[96px] text-[#4FE9A4]">10.000</h3>
              <p className="text-xl">Cool feature title</p>
            </li>
            <li>
              <h3 className="text-[96px] text-[#4FE9A4]">240</h3>
              <p className="text-xl">Cool feature title</p>
            </li>
          </ul>
        </div>
      </section>
      <section>
        <div className="container mx-auto my-[100px]">
          <div className="ml-[200px] ">
            <p className="text-gray-500">Our team</p>
            <h2 className="my-10 text-5xl">The leadership team</h2>
            <p className="text-gray-500 w-[700px]">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.{" "}
            </p>
          </div>
          <div className="flex justify-around my-10">
            {teamArray.map((item, index) => (
              <TeamComponent key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#0A2640]">
        <div className="container mx-auto py-[100px] text-white">
          <div className=" ml-[200px] w-[600px]">
            <p>Our values</p>
            <h2 className="text-5xl my-5">Things in we believe</h2>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.{" "}
            </p>
          </div>
          <div className="flex ml-[200px] justify-around flex-col my-5">
            {valuesArray.map((item, index) => (
              <Value key={index} data={item} />
            ))}
          </div>
        </div>
      </section>
      <section className="my-[100px]">
        <Form />
      </section>
    </div>
  );
}

export default About;
