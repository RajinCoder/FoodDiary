import React from "react";

import helperP from "../assets/helperP.png";

const AboutSection = () => {
  return (
    <div id="aboutBox" className="aboutBox">
      <div id="aboutDesc" className="aboutDesc">
        <h2>Meet The Team</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic modi
          odio quibusdam tempora tenetur ipsum rerum quisquam nobis molestias
          possimus praesentium recusandae iure corporis asperiores, natus qui
          vel dicta libero.
        </p>
      </div>

      <div className="aboutPic">
        <div id="peterBox">
          <strong>Chef Peter</strong>
          <img id="peterPic" src={helperP} alt="Helper Peter" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
