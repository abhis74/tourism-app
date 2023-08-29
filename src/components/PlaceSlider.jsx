import React from "react";
import Slider from "react-slick";
import logo from "./travelImg.jpg";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const PlaceSlider = (props) => {
  console.log(props);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: props.slideshow,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="slider">
        <Slider {...settings}>
          <div className="sliderImg">
            <img src={logo} alt="" />
          </div>
          <div className="sliderImg">
            <img src={logo} alt="" />
          </div>
          <div className="sliderImg">
            <img src={logo} alt="" />
          </div>
          <div className="sliderImg">
            <img src={logo} alt="" />
          </div>
          <div className="sliderImg">
            <img src={logo} alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default PlaceSlider;
