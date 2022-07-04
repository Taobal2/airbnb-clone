import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import "./card.style.css";
import data from "../../data.json";

const CardDetails = ({ data }) => {
  const { image, title, rating, date, price, distance } = data;
  return (
    <div className="card">
      <div className="card__container">
        <img src={image} alt="house images" className="card__image" />
        <AiOutlineHeart className="love__icon" />
      </div>

      <div className="card__footer">
        <div className="cardFooter__top">
          <h2 className="card__title">{title}</h2>
          <div className="rating">
            <span className="card__rating">{rating}</span>
            <AiFillStar className="rating__icon" />
          </div>
        </div>
        <p className="card__distance">{distance} Kilometers away</p>
        <span className="card__date">{date}</span>
        <div className="cardPrice__text">
          <span className="card__price"> ${price}</span>night
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
