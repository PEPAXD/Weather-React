import React, { useEffect, useState } from 'react';

export const Background = ({ bgImg, rotateDeg, shouldRotate, opacity }) => {
  const [rotate, setRotate] = useState(0);
  const [localOpacity, setLocalOpacity] = useState(opacity);

  useEffect(() => {
    if (shouldRotate) {
      setRotate(rotateDeg);
      setLocalOpacity(opacity ? 0 : 1);
    }
  }, [shouldRotate, rotateDeg, opacity]);

  const circleStyle = {
    backgroundImage: `url(${bgImg})`,
    transform: `rotate(${rotate}deg)`,
    opacity: localOpacity,
    transition: 'opacity 2s ease-out'
  };

  return (
    <div className="circleContainer">
      {['A', 'B', 'C'].map((circle, index) => (
        <div
          key={index}
          style={circleStyle}
          className={`circle ${circle} ${rotate ? 'rotate' : ''}`}
        />
      ))}
    </div>
  );
};