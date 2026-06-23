import React from "react";
import { Typewriter } from "react-simple-typewriter";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Hero() {
  return (
    <div
      className="container-fluid mb-5"
      style={{
        backgroundColor: "#38b6ff",
        padding: "5.75rem 1rem",
      }}
    >
      <div className="row">
        <div className="col-6">
          <img
            className="mx-auto d-block"
            src="media\images\my.webp"
            alt="myImage"
            style={{ borderRadius: "100%", width: "50%", margin: "7.5rem 0" }}
          ></img>
        </div>
        <div className="col-6 d-flex align-items-start flex-column align-self-center">
          <h1 style={{ color: "white" }}>
            I am Aniruddhasinh Jadav <br /> and A
            <span style={{ color: "#f3faff", fontWeight: "bold" }}>
              <Typewriter
                words={[" Student", " Gamer", " Full-stack Web Developer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <div className="d-flex">
            <a
              className="mx-1"
              href="https://www.linkedin.com/in/aniruddhasinhjadav"
              target="_blank"
            >
              <button type="button" class="btn btn-primary btn-lg my-3">
                <LinkedInIcon />
                Likedin
              </button>
            </a>
            <a
              className="mx-1"
              href="https://github.com/Aniruddhajadav"
              target="_blank"
            >
              <button
                type="button"
                class="btn btn-light border border-white btn-lg my-3"
              >
                <GitHubIcon />
                GitHub
              </button>
            </a>
            <a
              className="mx-1"
              href="https://drive.google.com/file/d/16oxPBwXQd7_jj74Vlm4l9xXSz4GmghUT/view?usp=sharing"
              target="_blank"
            >
              <button
                type="button"
                class="btn btn-light border border-white btn-lg my-3 fs-5"
              >
                Resume <OpenInNewIcon />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
