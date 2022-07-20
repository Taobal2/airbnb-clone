import React from "react";
import { Link } from "react-router-dom";
import "./dropdown.style.css";

const Dropdown = ({ setOpen }) => {
  return (
    <div className="dropdown__container">
      <Link to="signup">
        <div className="dropdown__item">Sign up</div>
      </Link>
      {/* <Link> */}
      <div className="dropdown__item">Log in</div>
      {/* </Link> */}
      <div className="dropdown__item">Host your home</div>
      <div className="dropdown__item">Host an experience</div>
      <div className="dropdown__item">Help</div>
    </div>
  );
};

export default Dropdown;
