import React from "react";
import { InlineWidget } from "react-calendly";

export default function Meet() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full overflow-hidden pt-16 h-full">
        <InlineWidget url="https://calendly.com/mayank657585" />
      </div>
    </div>
  );
}
