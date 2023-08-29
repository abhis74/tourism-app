import React from "react";
import avatar from "../avatar.png";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <div className="sixthheading">
        <h1>Testimonials</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, dicta
          optio provident vero quas maxime, architecto corrupti facilis deleniti
        </p>
        <img
          src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1s"
          alt=""
        />
      </div>

      <div className="testimonyDiv">
        <div className="testimony">
          <div className="testimonyImgs">
            <img src={avatar} alt="" />
          </div>
          <h2 className="avatarName">Abhishek</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            optio, praesentium id cum expedita beatae. Sit ullam corrupti, at
          </p>
        </div>
        <div className="testimony">
          <div className="testimonyImgs">
            <img src={avatar} alt="" />
          </div>
          <h2 className="avatarName">Abhishek</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            optio, praesentium id cum expedita beatae. Sit ullam corrupti, at
          </p>
        </div>
        <div className="testimony">
          <div className="testimonyImgs">
            <img src={avatar} alt="" />
          </div>
          <h2 className="avatarName">Abhishek</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            optio, praesentium id cum expedita beatae. Sit ullam corrupti, at
          </p>
        </div>
        <div className="testimony">
          <div className="testimonyImgs">
            <img src={avatar} alt="" />
          </div>
          <h2 className="avatarName">Abhishek</h2>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
            optio, praesentium id cum expedita beatae. Sit ullam corrupti, at
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
