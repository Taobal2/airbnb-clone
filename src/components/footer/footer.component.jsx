import React from "react";
import "./footer.style.css";
import { TbWorld } from "react-icons/tb";
import { FiFacebook } from "react-icons/fi";
import { BsTwitter } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__list">
        <section className="section">
          <h2 className="heading">Support</h2>
          <p className="list">Help Center</p>
          <p className="list">Air Cover</p>
          <p className="list">Safety Information</p>
          <p className="list">Supporting people with disabilities</p>
          <p className="list">Cancellation options</p>
          <p className="list">Our Covid-19 Response</p>
          <p className="list">Report a neighborhood concer</p>
        </section>

        <section className="section">
          <h2 className="heading">Community</h2>
          <p className="list">Airbnb.org: disaster relief housing</p>
          <p className="list">Support Afghan refugee</p>
          <p className="list">Combating discrimination</p>
        </section>

        <section className="section">
          <h2 className="heading">Try hosting</h2>
          <p className="list">Air cover for Hosts</p>
          <p className="list">Explore hosting resources</p>
          <p className="list">Visit our community forum</p>
          <p className="list">Supporting people with disabilities</p>
          <p className="list">How to host responsibly</p>
        </section>

        <section className="section">
          <h2 className="heading">Airbnb</h2>
          <p className="list">Newsroom</p>
          <p className="list">Learn about new features</p>
          <p className="list">Letter from our founders</p>
          <p className="list">Careers</p>
          <p className="list">Investors</p>
          <p className="list">Gift cards</p>
        </section>
      </div>

      <div className="footer__bottom">
        <div className="footerBottom__list">
          <span className="list"> &copy; 2022 Airbnb,Inc. .</span>
          <span className="list"> Privacy .</span>
          <span className="list"> Terms .</span>
          <span className="list"> Sitemap .</span>
        </div>

        <div className="footerBottom__list">
          <TbWorld className="nav__icon" />
          <div className="english">ENGLISH (US)</div>
          <div className="english">$ USD</div>
          <div className="social__media">
            <FiFacebook />
            <BsTwitter className="twitter" />
            <ImInstagram />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
