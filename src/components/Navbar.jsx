import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <Link to={`/`} style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <Link to={`/addusers`} style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Add customer
                  </a>
                </li>
              </Link>
              <Link to={`/viewusers`} style={{ textDecoration: "none" }}>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    View users
                  </a>
                </li>
              </Link>
            </ul>
            <div class="d-flex">
              <button class="btn btn-primary" type="submit">
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
