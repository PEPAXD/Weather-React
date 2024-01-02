import React from "react";
import { Data } from "./Data.jsx";
import "./WeatherApp.css";

import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";

const icons = {
  Clear: clear_icon,
  Clouds: cloud_icon,
  Drizzle: drizzle_icon,
  Rain: rain_icon,
  Snow: snow_icon,
};

export const WeatherApp = () => {
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div className="search-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1"
            stroke="white"
            class="w-6 h-6"
            style={{ width: "48px", height: "48px" }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      <div className="weather">
        <div className="weather-image">
          <img src={icons.Clouds} alt="" />
        </div>

        <div className="weather-temp">
          <h1>25°C</h1>
          <p>CityName</p>
        </div>
      </div>

      <div className="dataContainer">
        <Data />
        <Data />
        <Data />
      </div>

      </div>
  );
};
