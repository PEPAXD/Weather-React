import "./Background.css";
import React, { useState } from "react";

export const Background = ({ bgImg, rotateDeg }) => {
  /* circlesDiv */
  const circles = ["A", "B", "C"];

  /* Rotate */
  const [rotate, setRotate] = useState(0);
  
  const handleRotate = () => {
    setRotate(rotateDeg);
  };

  /* BackgroundImg */
  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
    transform: `rotate(${rotate}deg)`
  };

  return (
    <div className="background">
      <div className="circleContainer">
        {circles.map((circle, index) => (
          <div key={index} style={bgStyle} className={`circle ${circle} ${rotate ? 'rotate' : ''}` }></div>
        ))}

        <div className="circleDarktransp"></div>
      </div>

      <button className="buttonRotate" onClick={handleRotate}>Rotate Test</button>
    </div>
  );
};
