import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import "./card.style.css";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  const { image, title, myId, rating, date, price, distance } = data;

  return (
    <div className="card">
      <Link to={`/card/${myId}`}>
        <div className="card__container">
          <img src={image} alt="house images" className="card__image" />
          <AiOutlineHeart className="love__icon" />
        </div>
      </Link>

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

export default Card;
