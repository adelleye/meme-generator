import React from "react";
import trollFace from "../images/trollFace.png";

const Header = () => {
  return (
    <nav className="header">
      <img
        src={trollFace}
        className="header--image"
        alt="Meme Generator Logo"
      ></img>
      <h3 className="header--title">Meme Generator</h3>
      <p className="header--text">By Tobi Adeleye</p>
    </nav>
  );
};

export default Header;
