import React from "react";
import Project1 from "../../../utils/Images/project1.png";
import Project2 from "../../../utils/Images/project2.png";
import Project3 from "../../../utils/Images/p2.png";
import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div>
      <div className="container mx-auto px-4 py-8 flex justify-center items-center flex-col h-auto md:h-screen">
        <h2 className="text-2xl mb-5 font-bold text-center text-primary">
          Recent Projects
        </h2>
        <p className="text-center mt-3 text-muted-foreground mb-6">
          EvoTech solution's recent projects feature cutting-edge design,
          user-friendly interfaces, and tailored solutions for clients.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-10">
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <img
              src={Project1}
              alt="Alphankela"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* <h3 className="text-lg font-semibold">Alphankela</h3> */}
              <Link to="/" className="text-primary hover:underline">
                View Project
              </Link>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <img
              src={Project2}
              alt="Browmay Medical"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* <h3 className="text-lg font-semibold">Browmay Medical</h3> */}
              <Link to="/" className="text-primary hover:underline">
                View Project
              </Link>
            </div>
          </div>
          <div className="bg-card rounded-lg shadow-lg overflow-hidden">
            <img
              src={Project3}
              alt="Nagar Security Group"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {/* <h3 className="text-lg font-semibold">Nagar Security Group</h3> */}
              <Link to="https://alphankela.com/" className="text-primary hover:underline">
                View Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
