import React from "react";
import "./top.style.css";

const Top = ({ icon, title }) => {
  return (
    <div className="banner">
      <div className="banner__container">
        <img src={icon} className="banner__icon" />
        <div className="banner__title">{title}</div>
      </div>
    </div>
  );
};

export default Top;
