import Nav from "./components/Nav/index.js";
import Button from "./components/Button/index.js";
import Person from "./assets/person1.png";
import Links from "./components/Links/index.js";
import Featured from "./components/Featured/index.js";
import Wakanda from "./components/Wakanda/index.js";
import Explore from "./components/Explore/index.js";
import About from "./components/About/index.js";
import Find from "./components/Find/index.js";
import Footer from "./components/Footer/index.js";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Nav />
        <div className="flex items-center mx-auto justify-between px-10">
          <div className="w-[400px]">
            <h1 className="text-4xl font-bold leading-10 ">
              Recruit top talented freelancer for your business
            </h1>
            <p className="my-5">
              Connect you to thoudsands of talented freelancer from any
              industry. You can have the best people in just few simple steps.
            </p>
            <Button />
          </div>
          <img src={Person} alt="" className="w-[500px] h-[500px]" />
        </div>
        <Links />
      </div>
      <Featured />
      <Wakanda />
      <Explore />
      <About />
      <Find />
      <Footer />
    </>
  );
}

export default App;
