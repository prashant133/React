import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {



  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                {props.about}
              </a>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode ==="light" ? 'dark' : 'light'}`}>
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label className={`form-check-label" for="flexSwitchCheckDefault`}>
             
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

// props for the nav bar
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
};

// setting the default props for nav bar so that if props is not passed then this default props is used
Navbar.defaultProps = {
  title: "this is title",
  about: "this is About",
};
