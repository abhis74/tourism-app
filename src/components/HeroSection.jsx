import React from "react";
import HeroImg from "../../src/im-78494.jpg";
import PlaceSlider from "./PlaceSlider";
import Bookmark from "./Bookmark";

const HeroSection = ({ firstHeading, secondHeading }) => {
  console.log(firstHeading);
  return (
    <div className="homeimg">
      <img src={HeroImg} alt="" />

      <div className="heading1 wow animate__fadeInDown">
        <h1>{firstHeading}</h1>
      </div>

      <div className="heading2">
        <div className="headingAndPara">
          <h1>{secondHeading} </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
            voluptatibus quidem! Veritatis deserunt autem quaerat voluptas
            porro, officia eveniet ipsa. In quod unde eum iste suscipit ea
            asperiores, perspiciatis vero.
          </p>
          <Bookmark />
        </div>
        <div className="sliderBox">
          <PlaceSlider slideshow={3.5} />
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default HeroSection;
