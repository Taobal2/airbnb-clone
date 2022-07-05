import React from "react";
import "./top.style.css";

const Top = ({ icon, title }) => {
  return (
    <div className="top">
      <div className="top__container">
        <img src={icon} className="top__icon" alt="" />
        <div className="top__title">{title}</div>
      </div>
    </div>
  );
};

export default Top;
