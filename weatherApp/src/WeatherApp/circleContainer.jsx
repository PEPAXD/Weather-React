import React, { useState, useEffect } from "react";

export const Background = ({ bgImg, rotateDeg, shouldRotate }) => {
  
  const circles = ["A", "B", "C"];
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    shouldRotate && setRotate(rotateDeg);
  });

  return (
    <div className="circleContainer">
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${bgImg})`,
            transform: `rotate(${rotate}deg)`,
          }}
          className={`circle ${circle} ${rotate ? "rotate" : ""}`}
        ></div>
      ))}
      <div className="circleDarktransp"></div>
    </div>
  );
};