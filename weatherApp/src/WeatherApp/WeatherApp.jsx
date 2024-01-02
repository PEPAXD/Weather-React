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
  let api_Key = "d346f2daac5cb21f0aa55da07724ace3";

  const search = async (cityInput) => {
    let elemente = cityInput;
    console.log(elemente);
  };

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />

        <button
          className="search-icon"
          onClick={() => {
            const userInput = document.querySelector(".cityInput").value;
            search(userInput);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="w-6 h-6"
            style={{ width: "48px", height: "48px" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>

      </div>

      <div className="weather">
        <div className="weather-image">
          <img src={icons.Clouds} alt="" />
        </div>

        <div className="weather-temp">
          <h1 id="temperature">°C</h1>
          <p>CityName</p>
        </div>
      </div>

      <div className="dataContainer">
        <div className="dataTypes">
          <Data className={"humidity"} data={78} />
          <Data className={"winter"} data={78} />
          <Data className={"fire"} data={78} />
        </div>
      </div>
    </div>
  );
};
