import React from "react";
import Footer from "../footer/footer.component";
import Video from "../video/video.component";
import "./host.style.css";

const Host = () => {
  return (
    <div className="host">
      <Video />

      <div className="details__container">
        <p className="details">Find out what you could earn as a Host</p>
      </div>

      <div className="box__container">
        <div className="box">
          <p className="heading">Hosts in your area earn an average of*</p>
          <p className="payment">
            <span className="price">$972</span> / month
          </p>
        </div>

        <div className="box">
          <span className="heading">They earn</span>
          <p className="plan">
            <span className="price">$81 </span>/ night
          </p>
        </div>

        <div className="box">
          <span className="heading">They're booked</span>
          <p className="plan">
            <span className="price">12 </span> nights / month
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Host;
