import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/outlet/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/outlet/service/Services";
import Footer from "./components/footer/Footer";
import About from "./components/outlet/about/About";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
