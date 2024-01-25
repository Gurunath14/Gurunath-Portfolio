import React, { useState } from "react";
import openmenu from "../assets/nav/menuIcon.png";
import closemenu from "../assets/nav/closeIcon.png";

const Navbar = () => {
  const [menuicon, setmenuicon] = useState(false);
  return (
    <div>
      <div className="nav">
        <a className="title" href="/">
          Portfolio
        </a>
        <div className="menu">
          <img
            src={menuicon ? closemenu : openmenu}
            className="menubtn"
            onClick={() => {
              setmenuicon(!menuicon);
            }}
          />
          <ul className={menuicon ? "menulist menuopen" : "menulist"}>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#expirence">Expirence</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
