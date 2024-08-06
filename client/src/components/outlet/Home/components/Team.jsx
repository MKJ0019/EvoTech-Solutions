import React from "react";

export default function Team() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <section className="py-10 w-full">
        <h2 className="text-3xl font-bold text-center mb-6">Our Team</h2>
        <h3 className="text-2xl pt-4 text-center mb-8">
          Let’s Meet Our <span className="text-primary">AeroWeb Solutions</span>{" "}
          Innovators
        </h3>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-zinc-50 text-gray-700 p-6 rounded-lg flex flex-col items-center">
            <img
              alt="Gauri Singh"
              src="https://placehold.co/150x150?text=Gauri+Singh"
              className="rounded-full mb-4 w-32 h-32 object-cover"
            />
            <h4 className="text-xl font-semibold">Gauri Singh</h4>
            <p className="text-sm text-center">
              Co-Founder CEO & Backend Developer UI/UX Designer
            </p>
          </div>
          <div className="bg-zinc-50 text-gray-700 p-6 rounded-lg flex flex-col items-center">
            <img
              alt="Mayank"
              src="https://placehold.co/150x150?text=Mayank"
              className="rounded-full mb-4 w-32 h-32 object-cover"
            />
            <h4 className="text-xl font-semibold">Mayank Jha</h4>
            <p className="text-sm text-center">Founder & Full Stack Developer</p>
          </div>
          <div className="bg-zinc-50 text-gray-700 p-6 rounded-lg flex flex-col items-center">
            <img
              alt="Sharwan Kumar"
              src="https://placehold.co/150x150?text=Sharwan"
              className="rounded-full mb-4 w-32 h-32 object-cover"
            />
            <h4 className="text-xl font-semibold">Sharwan Kumar</h4>
            <p className="text-sm text-center">
              Co-Founder CTO Back End Developer
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
