import React from "react";
import logo from "./travelImg.jpg";
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
import img3 from "../im-78494.jpg";
import img4 from "../img4.jpg";

import Bookmark from "./Bookmark";

const Experience = () => {
  return (
    <>
      <div className="experience">
        <div className="gridImg">
          <div className="firstset">
            <img src={logo} id="one" alt="" />
            <img src={img3} id="two" alt="" />
            <img src={img4} id="three" alt="" />
          </div>
          <div className="secondset">
            <img src={img1} id="four" alt="" />
            <img src={img2} id="five" alt="" />
          </div>
        </div>

        <div className="Secondheading">
          <div className="headingdiv">
            <h1 className="Number">02.</h1>
            <h1 className="experiences">Experiences</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id quae
            dolore aliquid tempore amet velit saepe ipsam ipsa, quia, eum in,
            quasi obcaecati optio iste pariatur voluptates. Quisquam, error
            sequi.
          </p>
          <Bookmark />
        </div>
      </div>
    </>
  );
};

export default Experience;
