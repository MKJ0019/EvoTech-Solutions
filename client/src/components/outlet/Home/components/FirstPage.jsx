import React from "react";
import star from "../../../../assets/bg-img/star.png";
import circle from "../../../../assets/bg-img/circle.png";

export default function FirstPage() {
  return (
    <div className="h-[105svh] relative mx-auto flex pt-10 flex-col justify-center items-center">
      <div className="h-[60%] relative mt-[8%] w-[90%]">
        <p className=" text-[30px] font-medium px-4">
          Content Marketing Through Digital <div className="bg-blue-500 rounded-xl absolute w-36 h-1"></div>

        </p>
        <img src={star} alt="" className="absolute h-16 -right-5" />
        <h1 className="text-[220px] tracking-widest leading-none font-bold uppercase">
          Creatives
        </h1>
        <img
          src={circle}
          className="absolute rotate-[180deg] -left-20"
          style={{ opacity: 0.2 }}
          alt=""
        />
        <p className="text-xl px-5 mt-[7%] w-[32%] ">
          Tired of your business being stuck in a rut? Bring some life into it
          with our customised advertising strategies and innovative creatives!
        </p>
      </div>
      <div className="w-full flex flex-row-reverse">
        <img src="https://placehold.co/800x250" alt="" />
      </div>
    </div>
  );
}
