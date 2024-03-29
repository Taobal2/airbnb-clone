import React, { useContext } from "react";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import logo from "../../assets/airbnbLogo.png";
import "./navigation.style.css";
import Input from "../input/input.component";
import Dropdown from "../dropdown/dropdown.component";
import { DropdownContext } from "../../globalContext/dropdown.context";

const Navigation = () => {
  const { isDropDownOpen, setIsDropDownOpen } = useContext(DropdownContext);

  const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen);
  return (
    <nav className="navigation">
      <Link to="/">
        <img src={logo} alt="logo" className="navigation__logo" />
      </Link>

      <Input />

      <div className="navigation__link">
        <Link to="/host">
          <div className="nav__text">
            <span className="nav__test">Become a host</span>
          </div>
        </Link>

        <div className="navIcon__container">
          <TbWorld className="nav__icon" />{" "}
        </div>

        <span className="nav__profile" onClick={toggleDropDown}>
          <BiMenu className="menu__icon" />
          <span className="profile__container"></span>
        </span>
      </div>

      {isDropDownOpen && <Dropdown />}
    </nav>
  );
};

export default Navigation;
