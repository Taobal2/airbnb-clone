import React from "react";
import "./card.style.css";

const Card = () => {
  return (
    <div className="card">
      <div className="card__container">
        <img src={"image"} alt="house images" className="card__image" />
      </div>
      <div className="card__footer">
        <div className="cardFooter__top">
          <h2 className="card__title">{"title"}</h2>
          <span className="card__rating">{"rating"}</span>
        </div>
        <p className="card__distance">{"distance"} Kilometers away</p>
        <span className="card__date">{"date"}</span>
        <div className="cardPrice__text">
          <span className="card__price"> ${"price"}</span>night
        </div>
      </div>
    </div>
  );
};

export default Card;
