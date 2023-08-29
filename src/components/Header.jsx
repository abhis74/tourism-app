import React, { useEffect } from "react";
import logo from "../../src/logo.webp";

const Header = () => {
  return (
    <>
      <nav className="navBar" id="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="headerlinks">
          <ul>
            <li>ABOUT US</li>
            <li>DESTINATION</li>
            <li>EXPERIENCES</li>
            <li>TRAVEL STYLE</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
