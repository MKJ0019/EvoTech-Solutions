// import React from "react";
// import SecondPage from "./SecondPage";
// import FourthPage from "../Home/components/FourthPage";
// import Projects from "./Projects";

// export default function Services() {
//   return (
//     <div className="">
//       <div className="flex h-[90svh] flex-col md:flex-row items-center p-6 bg-background">
//         <div className="md:w-1/2 h-[60svh] flex flex-col p-10 justify-between">
//           <div>
//             <h2 className="text-2xl font-bold text-primary">Our Services</h2>
//             <h1 className="text-4xl pt-5 font-extrabold text-primary">
//               We Provide Best <span className="text-accent">Business</span>
//               <br />
//               Solutions
//             </h1>
//           </div>
//           <p className="mt-4 text-muted-foreground">
//             We deliver top-notch business solutions tailored to meet your unique
//             needs, ensuring efficiency, growth, and success. Our expert team
//             leverages innovative strategies and technologies to drive your
//             business forward and achieve outstanding results.
//           </p>
//           <div className="mt-6">
//             <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg mr-4">
//               Get Started
//             </button>
//             <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg">
//               Learn More
//             </button>
//           </div>
//         </div>
//         <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
//           <img
//             undefinedhidden="true"
//             alt="business-solutions-illustration"
//             src="https://placehold.co/500x440"
//           />
//         </div>
//       </div>
//       <FourthPage/>
//       <SecondPage/>
//       <Projects/>
//     </div>
//   );
// }


import React from "react";
import SecondPage from "./SecondPage";
import FourthPage from "../Home/components/FourthPage";
import Projects from "./Projects";
import service from '../../../assets/bg-img/service.png'

export default function Services() {
  return (
    <div>
      <div className="flex lg:h-[90svh] flex-col md:flex-row items-center p-6 bg-background">
        <div className="md:w-1/2 h-[60svh] flex flex-col lg:p-10 lg:py-5 md:py-5 py-14 justify-between">
          <div>
            <h2 className="text-2xl font-bold text-primary">Our Services</h2>
            <h1 className="text-4xl pt-5 font-extrabold text-primary">
              We Provide Best <span className="text-accent">Business</span>
              <br />
              Solutions
            </h1>
          </div>
          <p className="mt-4 text-muted-foreground">
            We deliver top-notch business solutions tailored to meet your unique
            needs, ensuring efficiency, growth, and success. Our expert team
            leverages innovative strategies and technologies to drive your
            business forward and achieve outstanding results.
          </p>
          <div className="mt-6">
            <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 py-2 rounded-lg mr-4">
              Get Started
            </button>
            <button className="bg-primary text-primary-foreground hover:bg-primary/80 px-4 py-2 rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center mt-6 md:mt-0">
          <img
            alt="business-solutions-illustration"
            src={service}
            className="w-[600px] h-auto"
          />
        </div>
      </div>
      <FourthPage />
      <SecondPage />
      <Projects />
    </div>
  );
}
