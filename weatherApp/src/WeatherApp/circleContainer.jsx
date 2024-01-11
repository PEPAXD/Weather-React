import React, { useState, useEffect } from "react";

export const Background = ({ bgImg, rotateDeg, shouldRotate, opacity }) => {
  
  const circles = ["A", "B", "C"];
  const [rotate, setRotate] = useState(0);
  const [localOpacity, setLocalOpacity] = useState(opacity);
  


  useEffect(() => {
    shouldRotate && setRotate(rotateDeg);
    if (shouldRotate) {
      setLocalOpacity(opacity === 0 ? 1 : 0);
    }
  }, [shouldRotate, rotateDeg, opacity]);

  return (
    <div className="circleContainer">
      {circles.map((circle, index) => (
        <div
          key={index}
          style={{
            backgroundImage: `url(${bgImg})`,
            transform: `rotate(${rotate}deg)`,
            opacity: localOpacity,
            transition: 'opacity 1.5s ease-out'
          }}

          className={`circle ${circle} ${rotate ? "rotate" : ""}`}
        ></div>
      ))}
    </div>
  );
};