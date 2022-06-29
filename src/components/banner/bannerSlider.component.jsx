import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./banner.component";

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div>
        <Slider {...settings}>
          <Banner />
        </Slider>
      </div>
    </div>
  );
};

export default BannerSlider;
