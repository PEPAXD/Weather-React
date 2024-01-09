import React from "react";
import "./Background.css";
import wallpaperHome from "../assets/Backgrounds/home.png";

export const Background = () => {
  return (
    <div className="container">

      <div className="bg-slide active">
        
        <div className="circle bg">
          <img src={wallpaperHome} />
        </div>

        
      </div>
    </div>
  );
};
