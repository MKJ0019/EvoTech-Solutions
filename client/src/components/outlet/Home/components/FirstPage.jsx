import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import star from "../../../../assets/bg-img/star.png";
import circle from "../../../../assets/bg-img/circle.png";
import MainImg from "../../../../assets/bg-img/imgageMain.webp";

export default function FirstPage() {
  const titleRef = useRef();

  useEffect(() => {
    const letters = titleRef.current.children;
    gsap.fromTo(
      letters,
      { y: -100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        ease: "bounce.out",
        duration: 0.9,
        // repeat: -1, 
        // repeatDelay: 0, 
        // yoyo: true,
      }
    );
  }, []);

  return (
    <div className="h-auto lg:h-[110vh] relative mx-auto flex pt-14 flex-col justify-center items-center">
      <div className="relative mt-[8%] w-[90%] lg:h-[60%]">
        <p className="text-[20px] lg:text-[30px] font-medium px-4">
          Content Marketing Through Digital{" "}
          <div className="bg-blue-500 rounded-xl absolute w-36 h-1"></div>
        </p>
        <img src={star} alt="" className="absolute h-8 lg:h-16 -right-5" />
        <h1
          className="text-[60px] mt-8 lg:mt-0 md:mt-0 lg:text-[220px] tracking-widest leading-none font-bold uppercase"
          ref={titleRef}
        >
          {"Creatives".split("").map((char, index) => (
            <span key={index}>{char}</span>
          ))}
        </h1>
        <img
          src={circle}
          className="absolute rotate-[180deg] -left-5 lg:-left-20"
          style={{ opacity: 0.2 }}
          alt=""
        />
        <p className="text-sm lg:text-xl px-5 mt-[7%] w-full lg:w-[32%]">
          Tired of your business being stuck in a rut? Bring some life into it
          with our customised advertising strategies and innovative creatives!
        </p>
      </div>
      <div className="w-full mt-10 lg:mt-0 md:mt-0 flex flex-col lg:flex-row-reverse items-center lg:items-end">
        <img
          src={MainImg}
          className="w-[90%] lg:w-[800px] h-[150px] lg:h-[250px] rounded-lg lg:rounded-l-xl shadow-xl object-cover"
          alt="Description of the image"
        />
      </div>
    </div>
  );
}
