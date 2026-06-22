import React from "react";

import OpenInNewIcon from "@mui/icons-material/OpenInNew";

function Certificate() {
  return (
    <div className="container pt-5 text-center">
      <h2>Certificate</h2>
      <ul>
        <a
          className="mx-1"
          href="https://www.linkedin.com/posts/aniruddhasinhjadav_fullstack-mern-javascript-share-7470434945736437762-jHPS/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEJrThABUdUry9hLFvf3NS8JzZPCkkXrQ9s"
          target="_blank"
        >
          <div
            className="border rounded-4 m-4 p-4"
            style={{ display: "inline-block", backgroundColor: "#38b6ff" }}
          >
            <li>
              Delta (Full Stack Web Development) | Apna College{" "}
              <OpenInNewIcon />
            </li>
          </div>
        </a>
      </ul>
      <hr />
    </div>
  );
}

export default Certificate;
