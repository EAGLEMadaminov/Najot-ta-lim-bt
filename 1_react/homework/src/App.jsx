import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Blog from "./Pages/Blog.jsx";
import Header from "./components/header.jsx";
import { Routes, Route } from "react-router-dom";
import Products from "./Pages/Product.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
