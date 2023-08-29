import React from "react";
import img1 from "../img1.jpg";
import img2 from "../img2.jpg";
import img3 from "../im-78494.jpg";
import img4 from "../img4.jpg";
import Bookmark from "./Bookmark";

const Travel = () => {
  return (
    <>
      <div className="travel">
        <div className="thirdHeading">
          <h1 className="afterStyle">Travel Style</h1>
          <h1 className="Number underline">03.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            incidunt magnam illum minima ipsa nam laboriosam sit voluptatibus
            sapiente omnis, architecto natus dolorum molestias veniam quaerat
            illo? Rem, illum accusantium!
          </p>
          <Bookmark />
        </div>
        <div className="travelImg">
          <div className="grid1">
            <img src={img1} id="2" alt="" />
            <img src={img2} id="3" alt="" />
          </div>
          <div className="grid2">
            <img src={img3} id="1" alt="" />
            <img src={img4} id="2" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Travel;
