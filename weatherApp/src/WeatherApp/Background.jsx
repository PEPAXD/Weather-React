import React from "react";
import "./Background.css";
import wallpaperHome from "../assets/Backgrounds/home.png";

export const Background = () => {
  return (
    <div className="background">
      <div className="circleContent">
        <div className="circle C"></div>
        <div className="circle B"></div>
        <div className="circle A"></div>
        <div className="circleDarktransp"></div>
      </div>
    </div>
  );
};
