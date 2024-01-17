// import React, {Component} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mobil from "../assets/images/img_car.png";

function Sliderr() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <>
      <Slider {...settings}>
        <div className="heroImage">
          <img src={mobil} alt="mobil" />
        </div>
        <div className="heroImage">
          <img src={mobil} alt="mobil" />
        </div>
        <div className="heroImage">
          <img src={mobil} alt="mobil" />
        </div>
        <div className="heroImage">
          <img src={mobil} alt="mobil" />
        </div>
      </Slider>
      <div className=""></div>
      <div>121</div>
      <div>121</div>
    </>
  );
}

export default Sliderr;
