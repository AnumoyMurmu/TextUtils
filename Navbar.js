import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a className="navbar-brand" href="#">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"s
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              {props.home}
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
        
        {/* <div className={`form-check form-switch text-${props.mode==='white'?'dark':'white'}`}> */}
        <div className='form-check form-switch'>
          <input
            className="form-check-input"
            type="checkbox"
            id="switch-modal"
            onClick={props.toggleMode}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Enable Dark Mode
          </label>
        </div>
        
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  home: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: " hello",
  home: "got no home?",
};
