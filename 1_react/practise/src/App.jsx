import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Component from "./Pages/Component";
import Header from "./components/header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component" element={<Component />} />
      </Routes>
    </>
  );
}

export default App;
