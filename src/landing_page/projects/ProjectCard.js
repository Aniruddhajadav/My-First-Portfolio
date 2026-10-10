import React, { useState, useEffect } from "react";

export default function ProjectCard({
  title,
  about,
  time,
  techStack,
  keyFeatures,
  slides = [],
  linkedinUrl,
  githubUrl,
  live,
}) {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, [slides.length]);

  return (
    <div className="row border">
      <div className="col-6 border slideshow-container">
        {slides.map((slide, index) => (
          <div
            className="fade"
            key={index}
            style={{
              display: index === slideIndex ? "block" : "none",
            }}
          >
            <img
              src={slide}
              alt="Project thumbnail"
              style={{ height: "100%", width: "100%" }}
            ></img>
          </div>
        ))}
      </div>
      <div className="col-6 border">
        <div className="row border">
          <h1 className="px-4">{title}</h1>
          <p className="px-4">{about}</p>
          <ul className="px-3">
            {keyFeatures.map((feature, index) => (
              <li key={index} style={{ padding: "5px" }}>
                {feature}
              </li>
            ))}
          </ul>
          <p className="px-4">{time}</p>
        </div>
        <div className="row border">
          <span className="px-4">{techStack}</span>
        </div>
        <div className="row border">
          <ul class="list-group list-group-horizontal">
            <li class="list-group-item">
              <a href={linkedinUrl} target="_blank">
                LinkedIn
              </a>
            </li>
            <li class="list-group-item">
              {" "}
              <a href={githubUrl} target="_blank">
                GitHub
              </a>
            </li>
            <li class="list-group-item">
              {" "}
              <a href={live} target="_blank">
                Live
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
