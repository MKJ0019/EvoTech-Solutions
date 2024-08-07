import React from "react";
import time from '../../../assets/bg-img/time.png'
import user from '../../../assets/bg-img/user.png'
import creative from '../../../assets/bg-img/creative.png'
import achievment from '../../../assets/bg-img/achievement.png'

export default function SecondPage() {
  return (
    //  <div>
    <div className="max-w-4xl lg:h-[90svh] mt-24 flex justify-center flex-col mx-auto px-4 py-8">
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
            src={time}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-primary">Time Efficient</h3>
          <p className="text-muted-foreground">On-time project delivery.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
          <img
            undefinedhidden="true"
            alt="user-friendly"
            src={user}
            className="mb-4"
          />
          <h3 className="text-lg font-semibold text-primary">User Friendly</h3>
          <p className="text-muted-foreground">Focused on user experience.</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md">
          <img
            undefinedhidden="true"
            alt="creative-designs"
            src={creative}
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
            src={achievment}
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
