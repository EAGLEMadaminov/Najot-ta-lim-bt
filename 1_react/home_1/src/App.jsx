import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import Header from "./Components/Headers.jsx";
import Footer from "./Components/Footer.jsx";
function App() {
  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
