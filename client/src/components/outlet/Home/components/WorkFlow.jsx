import React from "react";

export default function WorkFlow() {
  return (
    <div className="bg-background p-8">
      <h2 className="text-2xl font-bold text-foreground text-center mb-4">
        How we work
      </h2>
      <div className="relative flex flex-col max-w-6xl mx-auto items-center justify-center mt-6">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-black"></div>
        <div className="flex justify-between w-full max-w-4xl relative z-10">
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-red-600 border animate-blink">
            •
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-red-600 border animate-blink">
            •
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-red-600 border animate-blink">
            •
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full text-red-600 border animate-blink">
            •
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto items-start gap-6 mt-8">
        <div className="text-center flex-1 min-w-[200px] max-w-[250px]">
          <div className="text-3xl font-bold text-primary mb-2">01</div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Audience</h3>
          <p>
            We analyze your audience to identify the ideal demographics for your business.
          </p>
        </div>
        <div className="text-center flex-1 min-w-[200px] max-w-[250px]">
          <div className="text-3xl font-bold text-primary mb-2">02</div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Plan & Sketch</h3>
          <p>
            Our team of professionals focuses on data collection and developing a duly-noted strategy tailored for the target audience.
          </p>
        </div>
        <div className="text-center flex-1 min-w-[200px] max-w-[250px]">
          <div className="text-3xl font-bold text-primary mb-2">03</div>
          <h3 className="text-lg font-semibold text-foreground mb-2">Customize</h3>
          <p>
            We focus on developing solutions customized for optimizing your business in the relevant industry.
          </p>
        </div>
        <div className="text-center flex-1 min-w-[200px] max-w-[250px]">
          <div className="text-3xl font-bold text-primary mb-2">04</div>
          <h3 className="text-lg font-semibold text-foreground mb-2">User Testing</h3>
          <p>
            We consider audience inputs and adjust our implementations accordingly.
          </p>
        </div>
      </div>
    </div>
  );
}
