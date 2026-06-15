import React from "react";

import Hero from "./Hero";
import Education from "./Education";
import Certificate from "./Certificate";
import Projects from "./Project";
import Skills from "./Skills";
import Experience from "./Experience";
import Contact from "./Contact";

function HomePage() {
  return (
    <>
      <Hero />
      <Education />
      <Certificate />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </>
  );
}

export default HomePage;
