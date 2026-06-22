import React from "react";

import Hero from "./Hero";
import Education from "../education/Education";
import Certificate from "./Certificate";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import Experience from "./Experience";
import Contact from "./Contact";

function HomePage() {
  return (
    <section id="home">
      <Hero />
      <Education />
      <Certificate />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </section>
  );
}

export default HomePage;
