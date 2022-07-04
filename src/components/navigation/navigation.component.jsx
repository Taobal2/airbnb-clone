import React from "react";
import { TbWorld } from "react-icons/tb";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/airbnbLogo.png";
import "./navigation.style.css";
import Input from "../input/input.component";
import TopSlider from "../top/topSlider.component";

const Navigation = () => {
  return (
    <nav className="navigation">
      <section className="navigation__top">
        <img src={logo} alt="logo" className="navigation__logo" />

        <Input />

        <div className="navigation__link">
          <span className="nav__text">Become a host</span>
          <TbWorld className="nav__icon" />{" "}
          <span className="nav__profile">
            <BiMenu className="menu__icon" />
            <span className="profile__container"></span>
          </span>
        </div>
      </section>

      <section>
        <TopSlider />
      </section>
    </nav>
  );
};

export default Navigation;
