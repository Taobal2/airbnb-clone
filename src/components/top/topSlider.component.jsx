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
            icon="https://a0.muscache.com/pictures/4221e293-4770-4ea8-a4fa-9972158d4004.jpg"
            title="Caves"
          />
          <Top
            icon="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
            title="Surfing"
          />
          <Top
            icon="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
            title="Amazing views"
          />
          <Top
            icon="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
            title="Earth homes"
          />
          <Top
            icon="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
            title="Tropical"
          />
          <Top
            icon="https://a0.muscache.com/pictures/1d477273-96d6-4819-9bda-9085f809dad3.jpg"
            title="A-frames"
          />
          <Top
            icon="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"
            title="Luxe"
          />
          <Top
            icon="https://a0.muscache.com/pictures/a4634ca6-1407-4864-ab97-6e141967d782.jpg"
            title="Lake"
          />
          <Top
            icon="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
            title="Tiny homes"
          />
          <Top
            icon="https://a0.muscache.com/pictures/1b6a8b70-a3b6-48b5-88e1-2243d9172c06.jpg"
            title="Castles"
          />
          <Top
            icon="https://a0.muscache.com/pictures/ca25c7f3-0d1f-432b-9efa-b9f5dc6d8770.jpg"
            title="Camping"
          />
          <Top
            icon="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
            title="Cabins"
          />
          <Top
            icon="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
            title="Mansions"
          />
          <Top
            icon="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg"
            title="Golfings"
          />
          <Top
            icon="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
            title="Historical homes"
          />
          <Top
            icon="https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
            title="Beachfront"
          />
          <Top
            icon="https://a0.muscache.com/pictures/c8bba3ed-34c0-464a-8e6e-27574d20e4d2.jpg"
            title="Skiing"
          />
          <Top
            icon="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
            title="Country side"
          />

          {/*  */}
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
