import React from "react";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="project">
      <h2 className="py-5 text-center">Projects</h2>
      <div className="container d-flex">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-5">
            <ProjectCard
              imageURL={"media/images/image.png"}
              projectName={"Wanderlust - Airbnb - Clone"}
              projectDesription={
                "Wanderlust is a comprehensive web application that allows users to list, explore, and book unique accommodations around the world."
              }
              likedinURL={
                "https://www.linkedin.com/posts/aniruddhasinhjadav_fullstackwebdev-project-mvc-activity-7429860403913891840-VayM?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJrThABUdUry9hLFvf3NS8JzZPCkkXrQ9s"
              }
              githubURL={
                "https://github.com/Aniruddhajadav/Wanderlust-Airbnb-clone"
              }
            />
          </div>
          <div className="col-5">
            <ProjectCard
              imageURL={"media/images/zerodha.png"}
              projectName={"Zerodha Clone"}
              projectDesription={
                "Zerodha Clone 📈 A full-stack (MERN) web application clone of Zerodha, India’s leading stock brokerage platform and Kite Dashboard"
              }
              likedinURL={
                "https://www.linkedin.com/posts/aniruddhasinhjadav_mern-reactjs-nodejs-activity-7471235852208185344-eIFP?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJrThABUdUry9hLFvf3NS8JzZPCkkXrQ9s"
              }
              githubURL={"https://github.com/Aniruddhajadav/Zerodha-Clone"}
            />
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Projects;
