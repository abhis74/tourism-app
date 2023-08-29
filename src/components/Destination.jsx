import React from "react";
import PlaceSlider from "./PlaceSlider";
import Bookmark from "./Bookmark";

const Destination = () => {
  return (
    <div>
      <div className="destination">
        <h1 className="Number">O1.</h1>
        <div className="Firstheading">
          <h1 className="destinationTitle">Destination</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque,
            explicabo sed eius cumque voluptates veritatis illo ea repellat
            eligendi neque perferendis delectus optio, sunt dolore minima
            eveniet tempora nihil suscipit!
          </p>
          <Bookmark />
        </div>
        <PlaceSlider slideshow={2} />
      </div>
    </div>
  );
};

export default Destination;
