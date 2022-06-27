import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdKey } from "react-icons/io";
import "./input.style.css";

const Input = () => {
  return (
    <div className="input__container">
      <input className="input" />
      <AiOutlineSearch className="input__icon" />
      <div className="icon__container">
        <IoMdKey className="key__icon" />
      </div>
      <div className="input__texts">
        <div className="input__text1">
          <span>Where to?</span>
        </div>
        <div className="input__text2">
          <span className="span1">Anywhere .</span>
          <span className="span1">Any week .</span>
          <span className="span3">Add guest</span>
        </div>
      </div>
    </div>
  );
};

export default Input;
