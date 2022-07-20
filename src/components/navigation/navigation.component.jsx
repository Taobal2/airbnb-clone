import React, { useState } from "react";
import { TbWorld } from "react-icons/tb";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/airbnbLogo.png";
import "./navigation.style.css";
import Input from "../input/input.component";
import Dropdown from "../dropdown/dropdown.component";

const Navigation = () => {
  return (
    <nav className="navigation">
      <img src={logo} alt="logo" className="navigation__logo" />

      <Input />

      <div className="navigation__link">
        <div className="nav__text">
          <span className="nav__test">Become a host</span>
        </div>

        <div className="navIcon__container">
          <TbWorld className="nav__icon" />{" "}
        </div>

        <span className="nav__profile">
          <BiMenu className="menu__icon" />
          <span className="profile__container"></span>
        </span>
      </div>

      <Dropdown />
    </nav>
  );
};

export default Navigation;
