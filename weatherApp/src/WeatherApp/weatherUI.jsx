import React from "react";
import "./styles/weatherUI.css";

import clear_icon from "../assets/Icons/clearDay.svg";

const icons = {
  Clear: clear_icon,
};

const weatherUI = () => {
  return (
    <div className="sliderContent">
      <div className="cardContainer">
        <div className="card">
          <div className="textData">
            <p className="city">Villa Carlos Paz</p>
            <p className="weather">weather DAta </p>
          </div>
          <img src={icons.Clear} alt="weather icon" className="weatherIcon" />

          <div className="tempContainer">
            <p className="temp">26°C</p>

            <div className="minMax">
              <div className="min">
                <p className="minHeading">Min</p>
                <p className="minTemp">17</p>
              </div>

              <div className="max">
                <p className="maxHeading">Max</p>
                <p className="maxTemp">27</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default weatherUI;
