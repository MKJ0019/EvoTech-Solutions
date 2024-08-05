import React from "react";

export default function WhyChooseUS() {
  return (
    <div>
      <section className="bg-background h-[90svh] flex flex-col space-y-10 justify-center items-center text-foreground p-8">
        <div className="flex px-24 justify-center items-center">
          <div className=" space-y-12">
            {" "}
            <h2 className="text-sm mb-4">WHY CHOOSE US</h2>
            <h3 className="text-4xl font-extrabold mb-6">
              KEYWORD, STRATEGY <br /> & AUDIENCE
            </h3>
            <p className="mb-8 translate-x-12 w-[40%]">
              We focus on three key elements: Strategy, Audience, and Keywords.
              By prioritizing these aspects, we create personalized advertising
              campaigns that effectively increase our clients' reach. Our
              success is built on the 30-40-30 principle, ensuring outstanding
              campaign creation and exceptional results.
            </p>
          </div>
          <div>
            <div className="space-y-12">
              <div className="flex w-[120%] items-center">
                <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <span className="text-lg font-bold">30%</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">STRATEGY</h4>
                  <p>
                    Strategic choices account for 30% of an advertisement
                    campaign's success.
                  </p>
                </div>
              </div>

              <div className="flex w-[120%] -translate-x-20 items-center">
              <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <span className="text-lg font-bold">30%</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">AUDIENCE</h4>
                  <p>
                    What is the advertisement worth for if it isn't reaching the
                    correct audience?
                  </p>
                </div>
              </div>

              <div className="flex w-[120%] items-center">
                <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                  <span className="text-lg font-bold">30%</span>
                </div>
                <div>
                  <h4 className="text-xl font-semibold">KEYWORD</h4>
                  <p>
                    Effective keywords play a crucial role in ensuring the
                    widest possible reach for any campaign.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex space-x-4">
          <a
            href="#"
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg"
          >
            Facebook
          </a>
          <a
            href="#"
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg"
          >
            Instagram
          </a>
          <a
            href="#"
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg"
          >
            YouTube
          </a>
        </div>
      </section>
    </div>
  );
}
