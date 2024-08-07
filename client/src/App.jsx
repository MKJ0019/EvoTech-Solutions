import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "./components/outlet/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/outlet/service/Services";
import Footer from "./components/footer/Footer";
import About from "./components/outlet/about/About";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Contact from "./components/outlet/contact/Contact";
import Meet from "./components/outlet/contact/Meet";

function AppWrapper() {
  const location = useLocation();
  const showFooter = location.pathname !== "/meet";

  return (
    <div className="bg-gradient bg-[#f8f8f8] min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <AnimatePresence>
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, scale: 1, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 1.1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="h-full"
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="/service" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/meet" element={<Meet />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
      {showFooter && <Footer />}
      <ScrollTop />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}
