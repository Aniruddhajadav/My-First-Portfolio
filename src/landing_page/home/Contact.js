import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Contact() {
  return (
    <div className="container mt-5 text-center">
      <h2>Contact Info</h2>
      <p>Open to frontend roles, internships, and collaborations</p>
      <h5>aniruddhajadav12@gmail.com</h5>
      <a href="https://www.linkedin.com/in/aniruddhasinhjadav" target="_blank">
        <button type="button" class="btn btn-primary btn-lg my-3">
          <LinkedInIcon />
          Likedin
        </button>
      </a>
    </div>
  );
}

export default Contact;
