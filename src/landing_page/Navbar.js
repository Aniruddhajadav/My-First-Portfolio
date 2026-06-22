import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div class="container-fluid row">
          <div className="col-1">
            <Link class="nav-brand" to="/">
              <img
                src="media/images/logo.png"
                alt="logo"
                style={{ width: "75%" }}
              ></img>
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            class="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNav"
          >
            <ul class="navbar-nav" style={{ fontSize: "1.25rem" }}>
              <li class="nav-item px-2 mx-2">
                <a class="nav-link active" href="/#education">
                  Education
                </a>
              </li>
              <li class="nav-item px-2 mx-2">
                <a class="nav-link active" href="/#project">
                  Projects
                </a>
              </li>
              <li class="nav-item px-2 mx-2">
                <a class="nav-link active" href="/#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item px-2 mx-2">
                <a class="nav-link active" href="/#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
