import React from "react";
import "../../../../assets/style/style.css";
import "../../../../assets/style/style.css";

export default function SecondPage() {
  return (
    <div>
      <section className="py-12 h-auto lg:h-[770px] bg-background">
        <div className="container mx-auto mt-[6%] flex flex-col space-y-4 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row justify-between lg:space-x-10">
            <h2 className="text-3xl lg:text-6xl font-bold mb-4 text-foreground">
              OUR <br className="hidden lg:block" /> SERVICES
            </h2>
            <p className="w-full lg:w-[40%] lg:-translate-x-[10%] mt-5 mx-auto tracking-widest mb-8">
              We at AeroWeb Solution, recognize the importance of understanding
              the customer's decision-making process, which is why we go the
              extra mile to create tailored ad campaigns that maximize reach for
              our clients.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-10">
            <div className="p-6 card border border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">
                Web Development
              </h3>
            </div>
            <div className="p-6 border card border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">
                UI/UX Design
              </h3>
            </div>
            <div className="p-6 border card border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">
                WORDPRESS & SHOPIFY
              </h3>
            </div>
            <div className="p-6 border card border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">
                SEO OPTIMIZATION
              </h3>
            </div>
            <div className="p-6 border card border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">
                Hosting Service
              </h3>
            </div>
            <div className="p-6 border card border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">
                PAID ADVERTISING
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
