import React from "react";

import LeftAlignedTimeline from "./LeftAlignedTimeline";

function Education() {
  return (
    <div className="container mt-5 text-center">
      <h2>Education</h2>
      <div
        className="border rounded-4 m-4 p-4"
        style={{
          display: "inline-block",
          padding: "0 1.25rem",
          backgroundColor: "#38b6ff",
          color: "#f3faff",
        }}
      >
        <LeftAlignedTimeline
          year={"2024-2027"}
          course={"Diplome Computer Science & Engineering"}
          college={"ITM(SLS) BARODA UNIVERSITY"}
          CGPAandDate={"8.20 CGPA (29/05/26)"}
        />
      </div>
      <hr />
    </div>
  );
}

export default Education;
