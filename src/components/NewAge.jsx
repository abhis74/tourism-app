import React from "react";
import Bookmark from "./Bookmark";

const NewAge = () => {
  return (
    <div className="NewAgeMap">
      <div className="map">
        <img
          src="https://img.freepik.com/free-vector/illustration-global-icon_53876-9267.jpg?w=740&t=st=1693215169~exp=1693215769~hmac=910290c707ab1c52b0e6b510afe1a8260d6006b7298c4d15e2235ab9639c6655"
          alt=""
        />
      </div>
      <div className="fifthHeading">
        <h1 className="Number">05.</h1>
        <h1 className="fifthHeadingText">New Age Destination Managements</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
          distinctio officia illo id ad nisi iste sit consequuntur commodi, iure
          accusantium maiores veniam at iusto. Mollitia repellat aut adipisci.
          Ducimus!
        </p>
        <Bookmark />
      </div>
    </div>
  );
};

export default NewAge;
