import React from "react";
import "../../../../assets/style/style.css";

export default function WorkFlow() {
  return (
    <div className="bg-background p-4 lg:p-8">
      <h2 className="text-xl lg:text-2xl font-bold text-foreground text-center mb-6 lg:mb-10">
        How we work
      </h2>
      <div className="hidden lg:block md:block">
        <div className="relative flex flex-col max-w-6xl mx-auto items-center justify-center mt-6">
          <div className="flex flex-wrap justify-between w-full mb-5 max-w-4xl text-center lg:text-left">
            <div className="text-lg lg:text-xl w-1/2 lg:w-auto mb-2 lg:mb-0">
              Step 1
            </div>
            <div className="text-lg lg:text-xl w-1/2 lg:w-auto mb-2 lg:mb-0">
              Step 2
            </div>
            <div className="text-lg lg:text-xl w-1/2 lg:w-auto mb-2 lg:mb-0">
              Step 3
            </div>
            <div className="text-lg lg:text-xl w-1/2 lg:w-auto">Step 4</div>
          </div>
          <div className="absolute top-3/4 left-0 right-0 h-px bg-black"></div>
          <div className="flex justify-between w-full max-w-4xl relative z-10">
            <div className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full border">
              <span className="bg-blue-600 p-2 rounded-full animate-scale"></span>
            </div>
            <div className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full border">
              <span className="bg-blue-600 p-2 rounded-full animate-scale"></span>
            </div>
            <div className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full border">
              <span className="bg-blue-600 p-2 rounded-full animate-scale"></span>
            </div>
            <div className="flex items-center justify-center w-8 h-8 lg:w-12 lg:h-12 rounded-full border">
              <span className="bg-blue-600 p-2 rounded-full animate-scale"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto items-start gap-4 lg:gap-9 mt-10">
        <div className="text-center flex-1 min-w-[120px] lg:min-w-[200px] max-w-[250px]">
          <div className="text-5xl lg:text-7xl text-gray-300 font-bold text-primary mb-4">
            01
          </div>
          <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2">
            Audience
          </h3>
          <p className="text-sm lg:text-base">
            We analyze your audience to identify the ideal demographics for your
            business.
          </p>
        </div>
        <div className="text-center flex-1 min-w-[120px] lg:min-w-[200px] max-w-[250px]">
          <div className="text-5xl lg:text-7xl text-gray-300 font-bold text-primary mb-4">
            02
          </div>
          <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2">
            Plan & Sketch
          </h3>
          <p className="text-sm lg:text-base">
            Our team of professionals focuses on data collection and developing
            a duly-noted strategy tailored for the target audience.
          </p>
        </div>
        <div className="text-center flex-1 min-w-[120px] lg:min-w-[200px] max-w-[250px]">
          <div className="text-5xl lg:text-7xl text-gray-300 font-bold text-primary mb-4">
            03
          </div>
          <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2">
            Customize
          </h3>
          <p className="text-sm lg:text-base">
            We focus on developing solutions customized for optimizing your
            business in the relevant industry.
          </p>
        </div>
        <div className="text-center flex-1 min-w-[120px] lg:min-w-[200px] max-w-[250px]">
          <div className="text-5xl lg:text-7xl text-gray-300 font-bold text-primary mb-4">
            04
          </div>
          <h3 className="text-base lg:text-lg font-semibold text-foreground mb-2">
            User Testing
          </h3>
          <p className="text-sm lg:text-base">
            We consider audience inputs and adjust our implementations
            accordingly.
          </p>
        </div>
      </div>
    </div>
  );
}
