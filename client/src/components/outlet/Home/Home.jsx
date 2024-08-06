import React from "react";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import FourthPage from "./components/FourthPage";
import Team from "./components/Team";
import Testinomial from "./components/Testinomial";
import WhyChooseUS from "./components/WhyChooseUS";
import WorkFlow from "./components/WorkFlow";
import Projects from '../service/Projects'

export default function () {
  return (
    <div>
      <FirstPage />
      <SecondPage />
      <FourthPage />
      <WhyChooseUS/>
      <WorkFlow/>
      {/* <Projects/> */}
      <Team />
      <Testinomial/>
    </div>
  );
}
