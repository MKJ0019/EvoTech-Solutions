import React from "react";

export default function Team() {
  return (
    <div className="h-[90svh] flex justify-center items-center">
      <section className="py-10">
        <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
        <h3 className="text-2xl pt-4 text-center mb-8">
          Let’s Meet Our <span className="text-primary">EvoTech Solutions</span>{" "}
          Innovators
        </h3>

        <div className="max-w-6xl pt-8 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className=" text-gray-500 bg-zinc-50 p-6 rounded-l-[50%] flex flex-col items-center">
            <img
              undefinedhidden="true"
              alt="Gauri Singh"
              src="https://placehold.co/150x150?text=Gauri+Singh"
              className="rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold">Gauri Singh</h4>
            <p className="text-sm text-center">
              Co-Founder CEO & Backend Developer UI/UX Designer
            </p>
            {/* <div className="flex space-x-2 mt-2">
              <a href="#" className="text-white hover:text-zinc-200">
                🔗
              </a>
              <a href="#" className="text-white hover:text-zinc-200">
                🔗
              </a>
              <a href="#" className="text-white hover:text-zinc-200">
                🔗
              </a>
            </div> */}
          </div>

          <div className="bg-zinc-50 text-gray-700 p-6 rounded-lg flex flex-col items-center">
            <img
              undefinedhidden="true"
              alt="Mayank"
              src="https://placehold.co/150x150?text=Mayank"
              className="rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold">Mayank Jha</h4>
            <p className="text-sm">Founder & Full Stack Developer</p>
            {/* <div className="flex space-x-2 mt-2">
              <a href="#" className="text-white hover:text-zinc-200">
                🔗
              </a>
              <a href="#" className="text-white hover:text-zinc-200">
                🔗
              </a>
              <a href="#" className="text-white hover:text-zinc-200">
                🔗
              </a>
            </div> */}
          </div>

          <div className="bg-zinc-50 text-gray-700 p-6 rounded-r-[50%] flex flex-col items-center">
            <img
              undefinedhidden="true"
              alt="Sharwan Kumar"
              src="https://placehold.co/150x150?text=Sharwan"
              className="rounded-full mb-4"
            />
            <h4 className="text-xl font-semibold">Sharwan Kumar</h4>
            <p className="text-sm">Co-Founder CTO Back End Developer</p>
            {/* <div className="flex space-x-2 mt-2">
              <a href="#" className="text-white hover:text-zinc-200">
                🔗
              </a>
              <a href="#" className="text-white hover:text-zinc-200">
                🔗
              </a>
              <a href="#" className="text-white hover:text-zinc-200">
                🔗
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
