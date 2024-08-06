import React from "react";
import "../../../../assets/style/style.css";
import '../../../../assets/style/style.css'

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
            <div className="p-6 card border border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">
                Web Development
              </h3>
              <ul className="list-disc c-txt list-inside text-muted-foreground">
                <li>Landing pages</li>
                <li>E-com websites</li>
                <li>Firm Websites</li>
              </ul>
            </div>
            <div className="p-6 border card border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">UI/UX Design</h3>
              <ul className="list-disc c-txt list-inside text-muted-foreground">
                <li>Landing pages</li>
                <li>E-com websites</li>
                <li>Firm Websites</li>
              </ul>
            </div>
            <div className="p-6 border card border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">
                Hosting Service
              </h3>
              <ul className="list-disc c-txt list-inside text-muted-foreground">
                <li>Landing pages</li>
                <li>E-com websites</li>
                <li>Firm Websites</li>
              </ul>
            </div>
            <div className="p-6 border card border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">
                Wordpress & Shopify
              </h3>
              <ul className="list-disc c-txt list-inside text-muted-foreground">
                <li>Landing pages</li>
                <li>E-com websites</li>
                <li>Firm Websites</li>
              </ul>
            </div>
            <div className="p-6 border card border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">
                SOLAR LEAD GENERATION
              </h3>
              <ul className="list-disc c-txt list-inside text-muted-foreground">
                <li>Qualified & Exclusive</li>
                <li>650+ Credit Score</li>
                <li>$100+ Utility Bill</li>
              </ul>
            </div>
            <div className="p-6 border card border-border rounded-lg bg-card">
              <h3 className="text-xl c-txt font-semibold uppercase mb-2">
                PAID ADVERTISING
              </h3>
              <ul className="list-disc c-txt list-inside text-muted-foreground">
                <li>Google Ads</li>
                <li>Meta Ads</li>
                <li>Linked In Ads</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
