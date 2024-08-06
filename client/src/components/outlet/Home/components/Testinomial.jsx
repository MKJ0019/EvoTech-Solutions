import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

function Testinomial() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      content: `"We are committed to building long-lasting relationships with our clients, striving to be an integral part of their success journey. We focus on delivering enduring value and support to help them achieve their goals."`,
      author: "Gauri Singh",
      title: "Co-Founder & CEO",
      rating: 5,
    },
    {
      id: 2,
      content: `"At AeroWeb Solutions, we understand business needs beyond financial metrics, focusing on the value our solutions add to ensure the best outcomes and promising results for our clients. Our approach integrates comprehensive insights to drive success and foster long-lasting partnerships."`,
      author: "Sharwan Kumar",
      title: "Co-Founder & CFO",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="max-w-6xl mx-auto">
      <section className="light py-14 md:py-24 text-zinc-900 dark:text-white">
        <div className="container px-4 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto -mb-[100px] lg:-mb-0 text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block w-10 h-10 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
          </div>

          <div className="slider-container overflow-hidden relative h-[600px] lg:h-[400px]">
            <AnimatePresence initial={false} custom={currentSlide}>
              <motion.div
                key={currentSlide}
                className="slide flex justify-center items-center w-[100%] h-[100%] flex-shrink-0 p-4 absolute"
                custom={currentSlide}
                initial="enter"
                animate="center"
                exit="exit"
                variants={variants}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                <div className="text-center flex flex-col justify-center items-center" data-aos="zoom">
                  <p className="leading-relaxed lg:w-[40%] w-[90%] mb-5 text-lg lg:text-2xl">
                    {testimonials[currentSlide].content}
                  </p>
                  <h4 className="text-gray-900 font-medium title-font tracking-wider text-lg">
                    {testimonials[currentSlide].author}
                  </h4>
                  <p className="text-gray-500">
                    {testimonials[currentSlide].title}
                  </p>
                  <p className="mb-6">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`fas fa-star ${
                          i < Math.floor(testimonials[currentSlide].rating)
                            ? "text-yellow-500"
                            : "text-yellow-200 dark:text-opacity-20"
                        }`}
                      ></span>
                    ))}
                    {testimonials[currentSlide].rating % 1 !== 0 && (
                      <span className="fas fa-star-half-alt text-yellow-500"></span>
                    )}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="flex lg:-mt-0 md:-mt-0 -mt-20 justify-around">
            <button
              className="left-5 top-1/2 hover:transition duration-500 ease-in-out transform -translate-y-1/2 border hover:bg-black text-black hover:text-white p-3 rounded-full"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <IoMdArrowDropleft size={30} />
            </button>
            <button
              className="right-5 top-1/2 transform hover:transition duration-500 ease-in-out -translate-y-1/2 border hover:bg-black text-black hover:text-white p-3 rounded-full"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <IoMdArrowDropright size={30} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testinomial;
