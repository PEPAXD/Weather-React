import "./Background.css";
import React, { useState } from "react";

export const Background = ({ bgImg }) => {
  /* circlesDiv */
  const circles = ["A", "B", "C"];

  /* Rotate */
  const [rotate, setRotate] = useState(false);
  const handleRotate = () => {
    console.log('rotate');
    setRotate(!rotate);
  };

  /* BackgroundImg */
  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  return (
    <div className="background">
      <div className="circleContainer">
        {circles.map((circle, index) => (
          <div key={index} style={bgStyle} className={`circle ${circle} ${rotate ? 'rotate' : ''}` }></div>
        ))}

        <div className="circleDarktransp"></div>
      </div>

      <button className="buttonRotate" onClick={handleRotate}>
        Rotate Test
      </button>
    </div>
  );
};
