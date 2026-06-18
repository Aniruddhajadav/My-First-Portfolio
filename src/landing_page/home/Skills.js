import React from "react";

function Skills() {
  return (
    <div className="container mt-5 text-center">
      <h2>Skills</h2>
      <div className="row">
        <h3>Full-Stack Web Develoment (MERN)</h3>
        <div className="col-4">
          <h4 className="ms-4">Frontend</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap(Framework)</li>
            <li>Embedded JavaScript (EJS)</li>
            <li>React</li>
            <li>Material-UI</li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="ms-4">Backend</h4>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
        <div className="col-4">
          <h4 className="ms-4">Other</h4>
          <ul>
            <li>Git & GitHub</li>
            <li>SQL & MySQL</li>
            <li>MongoDB & Mongoose</li>
            <li>npm</li>
          </ul>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Skills;
