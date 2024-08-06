import React from "react";
import { Link } from "react-router-dom";
import Circle from '../../../../assets/bg-img/halfcircle.png'

export default function WhyChooseUS() {
  return (
    <div>
      <section className="bg-background min-h-screen relative flex flex-col space-y-10 justify-center items-center text-foreground p-4 lg:p-8">
      <img src={Circle} className="absolute right-[8%] opacity-15 rotate-360 top-[15%]  " alt="" />
        <div className="flex flex-col lg:flex-row px-4 z-10 lg:px-24 justify-center items-center space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-1/2 space-y-6 lg:space-y-12">
            <h2 className="text-xs lg:text-sm mb-2 lg:mb-4">WHY CHOOSE US</h2>
            <h3 className="text-2xl lg:text-4xl font-extrabold mb-4 lg:mb-6">
              KEYWORD, STRATEGY <br className="hidden lg:block" /> & AUDIENCE
            </h3>
            <p className="lg:mb-8 lg:translate-x-12 lg:w-[40%]">
              We focus on three key elements: Strategy, Audience, and Keywords.
              By prioritizing these aspects, we create personalized advertising
              campaigns that effectively increase our clients' reach. Our
              success is built on the 30-40-30 principle, ensuring outstanding
              campaign creation and exceptional results.
            </p>
          </div>
          <div className="space-y-6 lg:space-y-12 lg:w-1/2">
            <div className="flex items-center space-x-4 lg:space-x-10">
              <div className="sm:w-20 sm:h-20 lg:w-32 lg:h-32 h-16 w-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <span className="text-lg font-bold">30%</span>
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-semibold">STRATEGY</h4>
                <p className="text-sm lg:text-base">
                  Strategic choices account for 30% of an advertisement
                  campaign's success.
                </p>
              </div>
            </div>

            <div className="flex items-center lg:-translate-x-10 space-x-4 lg:space-x-10">
              <div className="sm:w-20 sm:h-20  lg:w-32 lg:h-32 h-16 w-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <span className="text-lg font-bold">40%</span>
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-semibold">AUDIENCE</h4>
                <p className="text-sm lg:text-base">
                  What is the advertisement worth if it isn't reaching the
                  correct audience?
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4 lg:space-x-10">
              <div className="sm:w-20 sm:h-20 lg:w-32 lg:h-32 h-16 w-16 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                <span className="text-lg font-bold">30%</span>
              </div>
              <div>
                <h4 className="text-lg lg:text-xl font-semibold">KEYWORD</h4>
                <p className="text-sm lg:text-base">
                  Effective keywords play a crucial role in ensuring the
                  widest possible reach for any campaign.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center space-x-4 w-full px-4 lg:px-20">
          <Link
            to="#"
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg"
          >
            Instagram
          </Link>
          <Link
            to="#"
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg"
          >
            LinkedIn
          </Link>
          <Link
            to="#"
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg"
          >
            Twitter
          </Link>
          <Link
            to="#"
            className="bg-secondary text-secondary-foreground px-4 py-2 rounded-lg"
          >
            YouTube
          </Link>
        </div>
      </section>
    </div>
  );
}
