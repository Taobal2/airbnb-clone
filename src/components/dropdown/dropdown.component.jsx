import React from "react";
import { useNavigate } from "react-router-dom";

import "./dropdown.style.css";

const Dropdown = ({ setOpen }) => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
  };
  const signupHandler = () => {
    navigate("/signup");
  };

  return (
    <div className="dropdown__container">
      <div className="dropdown__item" onClick={signupHandler}>
        Sign up
      </div>

      <div className="dropdown__item" onClick={loginHandler}>
        Log in
      </div>

      <div className="dropdown__item">Host your home</div>
      <div className="dropdown__item">Host an experience</div>
      <div className="dropdown__item">Help</div>
    </div>
  );
};

export default Dropdown;
