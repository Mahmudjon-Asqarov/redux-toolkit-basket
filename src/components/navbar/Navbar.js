import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar_fix navbar-expand-lg navbar-light bg-light">
      {/* Container wrapper */}
      <div className="container-fluid container">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height={15}
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Shopping-cart
              </a>
            </li>
          </ul>
          {/* Left links */}
        </div>
        {/* Collapsible wrapper */}
        {/* Right elements */}
        <div className="d-flex align-items-center  ">
          {/* Icon */}
          <a className="text-reset me-3" href="#">
            <span>0</span>
            <i className="fas fa-heart" />
          </a>
          <a className="text-reset me-3" href="#">
            <span>0</span>
            <i className="fas fa-shopping-cart" />
          </a>
        </div>
      </div>
      {/* Container wrapper */}
    </nav>
  );
}

export default Navbar;
