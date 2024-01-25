import React from "react";
import contact from "../data/contact.json";

const Herosection = () => {
  return (
    <div className="container">
      <div className="herocontent">
        <h1 className="heroname">Hi, I'm Guru</h1>
        <p className="herodescription">
          Versatile developer skilled in React, JavaScript, Tailwind CSS, and
          Mendix. Let's connect for more details!
        </p>
        <div className="herobtn">
          {" "}
          <a href={contact[0].onlinelink} className="herocontact">
            Contact Me
          </a>
          <a
            href="/hero/Gurunath M Resume.pdf"
            target="_blank"
            className="herocontact"
          >
            Resume
          </a>
        </div>
      </div>
      <img className="heroimage" src="/hero/circleboy.png" />
      <div className="topblur"></div>
      <div className="bottomblur"></div>
    </div>
  );
};

export default Herosection;
