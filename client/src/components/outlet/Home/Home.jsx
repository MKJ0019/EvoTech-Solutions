import React from "react";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import Team from "./components/Team";
import Testinomial from "./components/Testinomial";
import WhyChooseUS from "./components/WhyChooseUS";
import WorkFlow from "./components/WorkFlow";

export default function () {
  return (
    <div>
      <FirstPage />
      <SecondPage />
      {/* <ThirdPage/> */}
      <FourthPage />
      <WhyChooseUS/>
      <WorkFlow/>
      <Team />
      <Testinomial/>
    </div>
  );
}
