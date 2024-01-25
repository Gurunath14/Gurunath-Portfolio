import React from "react";
import aboutimg from "../assets/about/aboutImage.png";
import cusor from "../assets/about/cursorIcon.png";
import mobile from "/public/about/icons8-iphone-se-48.png";
import uiicon from "../assets/about/uiIcon.png";

const Aboutme = () => {
  return (
    <div className="blackbox">
      <div className="aboutcontainer" id="about">
        <p className="abouttitle">About</p>
        <div className="aboutinnercontainer">
          <div>
            <img className="aboutimage" src="/hero/Heroboy.png" />
          </div>
          <div className="knownflex">
            <div className="known">
              <img src={cusor} />
              <div className="knownwork">
                {" "}
                <p>Frontend Developer</p>
                <p>
                  I'm a front-end developer with experience in building
                  responsive and optimized sites
                </p>
              </div>
            </div>
            <div className="known">
              <img src={mobile} />
              <div className="knownwork">
                {" "}
                <p>Mobile App Developer</p>
                <p>
                  Versatile UI designer with expertise in crafting engaging
                  landing pages. Skilled mobile app developer, focused on
                  efficiency and optimization.
                </p>
              </div>
            </div>
            {/* <div className="known">
              <img src={mobile} />
              <div className="knownwork">
                {" "}
                <p>Backend Developer</p>
                <p>
                  I have experience developing fast and optimised back-end
                  systems and APIs
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
