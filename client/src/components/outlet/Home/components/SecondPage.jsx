import React from "react";

export default function SecondPage() {
  return (
    <div>
      <section class="py-12 h-[770px] bg-background">
        <div class="container mx-auto mt-[6%] flex flex-col space-y-[4%] text-center">
          <div className="flex">
            <h2 class="text-6xl text-start mx-auto font-bold mb-4 text-foreground">
              OUR <br /> SERVICES
            </h2>
            <p class="text-start w-[40%] mt-5 mx-auto tracking-widest mb-8">
              We at EvoTech Solution, recognize the importance of understanding
              the customer's decision-making process, which is why we go the
              extra mile to create tailored ad campaigns that maximize reach for
              our clients.
            </p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10 ">
            <div class="p-6 border border-border rounded-lg bg-card">
              <h3 class="text-xl font-semibold uppercase mb-2">
                Web Development
              </h3>
              <ul class="list-disc list-inside text-muted-foreground">
                <li>Landing pages</li>
                <li>E-com websites</li>
                <li>Firm Websites</li>
              </ul>
            </div>
            <div class="p-6 border border-border rounded-lg bg-card">
              <h3 class="text-xl font-semibold uppercase mb-2">UI/UX Design</h3>
              <ul class="list-disc list-inside text-muted-foreground">
                <li>Landing pages</li>
                <li>E-com websites</li>
                <li>Firm Websites</li>
              </ul>
            </div>
            <div class="p-6 border border-border rounded-lg bg-card">
              <h3 class="text-xl font-semibold uppercase mb-2">
                Hosting Service
              </h3>
              <ul class="list-disc list-inside text-muted-foreground">
                <li>Landing pages</li>
                <li>E-com websites</li>
                <li>Firm Websites</li>
              </ul>
            </div>
            <div class="p-6 border border-border rounded-lg bg-card">
              <h3 class="text-xl font-semibold uppercase mb-2">
                Wordpress & Shopify
              </h3>
              <ul class="list-disc list-inside text-muted-foreground">
                <li>Landing pages</li>
                <li>E-com websites</li>
                <li>Firm Websites</li>
              </ul>
            </div>
            <div class="p-6 border border-border rounded-lg bg-card">
              <h3 class="text-xl font-semibold uppercase mb-2">
                SOLAR LEAD GENERATION
              </h3>
              <ul class="list-disc list-inside text-muted-foreground">
                <li>Qualified & Exclusive</li>
                <li>650+ Credit Score</li>
                <li>$100+ Utility Bill</li>
              </ul>
            </div>
            <div class="p-6 border border-border rounded-lg bg-card">
              <h3 class="text-xl font-semibold uppercase mb-2">
                PAID ADVERTISING
              </h3>
              <ul class="list-disc list-inside text-muted-foreground">
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
