import React from "react";

export default function SecondPage() {
  return (
    //  <div>
    <div className="max-w-4xl lg:h-[82svh] flex justify-center flex-col mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center text-primary">
        Why choose us
      </h2>
      <p className="mt-4 text-center text-muted-foreground">
        Choose us for innovative solutions, expert team, tailored approach, and
        exceptional client satisfaction.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
          <img
            undefinedhidden="true"
            alt="time-efficient"
            src="https://openui.fly.dev/openui/24x24.svg?text=⏱️"
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-primary">Time Efficient</h3>
          <p className="text-muted-foreground">On-time project delivery.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
          <img
            undefinedhidden="true"
            alt="user-friendly"
            src="https://openui.fly.dev/openui/24x24.svg?text=👤"
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-primary">User Friendly</h3>
          <p className="text-muted-foreground">Focused on user experience.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
          <img
            undefinedhidden="true"
            alt="creative-designs"
            src="https://openui.fly.dev/openui/24x24.svg?text=🎨"
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-primary">
            Creative Designs
          </h3>
          <p className="text-muted-foreground">
            Innovative, captivating design solutions.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
          <img
            undefinedhidden="true"
            alt="achievements"
            src="https://openui.fly.dev/openui/24x24.svg?text=🏆"
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-primary">Achievements</h3>
          <p className="text-muted-foreground">
            Recognized for outstanding achievements.
          </p>
        </div>
      </div>
    </div>
  );
}
