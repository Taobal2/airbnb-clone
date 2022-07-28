import React, { useState, useEffect } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { BiUpload } from "react-icons/bi";

import "./card.style.css";
import "./cardDetails.style.css";
import data from "../../data.json";
import { useParams } from "react-router-dom";
import Footer from "../footer/footer.component";

const CardDetails = () => {
  const [myData, setMyData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setMyData(data[id - 1]);
  }, [id]);
  return (
    <div className="container">
      <div className="section--1">
        <div className="section--top">
          <div className="house__details">
            <h1 className="house__name">{myData?.title}</h1>
            <p className="house__location">{myData?.location}</p>
          </div>

          <div className="transfer__details">
            <div className="transfer">
              <BiUpload className="transfer__icon" />
              <span className="transfer__text">Share</span>
            </div>

            <div className="transfer">
              <AiOutlineHeart className="transfer__icon" />
              <span className="transfer__text">Save</span>
            </div>
          </div>
        </div>

        <div className="section--middle">
          <div className="large__image">
            <img className="image--large" src={myData?.image} alt="" />
          </div>

          <div className="house__images">
            <img src={myData?.img1} className="image--small" alt="" />
            <img src={myData?.img2} className="image--small" alt="" />
            <img src={myData?.img3} className="image--small" alt="" />
            <img src={myData?.img4} className="image--small" alt="" />
          </div>
        </div>

        <div className="section--bottom">
          <span className="house__fullDetails">{myData?.titleDetails}</span>
          <span className="house__discription">{myData?.discription} .</span>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CardDetails;
