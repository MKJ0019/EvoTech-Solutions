import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

gsap.registerPlugin(ScrollToPlugin);

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: 0 }, ease: "power2.out" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 p-3 bg-gray-300 text-black font-extrabold rounded-full shadow-lg hover:bg-zinc-500 transition duration-300"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

export default ScrollToTopButton;
