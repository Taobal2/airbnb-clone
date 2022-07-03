import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Top from "./top.component";
import "./topSlider.style.css";

const TopSlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 4,
  };

  return (
    <div className="top">
      <div className="top__slider">
        <Slider {...settings} className="slider">
          <Top
            icon="https://a0.muscache.com/pictures/8e507f16-4943-4be9-b707-59bd38d56309.jpg"
            title="Islands"
          />
          <Top
            icon="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
            title="Beach"
          />
          <Top
            icon="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
            title="Amazing pools"
          />
          <Top
            icon="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
            title="OMG"
          />
          <Top
            icon="https://a0.muscache.com/pictures/8b44f770-7156-4c7b-b4d3-d92549c8652f.jpg"
            title="Artic"
          />
          <Top
            icon="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"
            title="Bed & Breakfast"
          />
          <Top
            icon="https://a0.muscache.com/pictures/50861fca-582c-4bcc-89d3-857fb7ca6528.jpg"
            title="Design"
          />
          <Top
            icon="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
            title="National Parks"
          />
          <Top
            icon="https://a0.muscache.com/pictures/52c8d856-33d0-445a-a040-a162374de100.jpg"
            title="Shared Homes"
          />
          <Top
            icon="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
            title="Beach"
          />
          <Top
            icon="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
            title="Beach"
          />
          <Top
            icon="https://a0.muscache.com/pictures/10ce1091-c854-40f3-a2fb-defc2995bcaf.jpg"
            title="Beach"
          />
        </Slider>
      </div>
    </div>
  );
};

export default TopSlider;
