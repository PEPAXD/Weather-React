import React from "react";
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
  Wind: wind_icon,
  Humidity: humidity_icon,
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

        <div className="humidity">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 32 32"
        >
        <path
          fill="currentColor"
          d="M26 12a3.898 3.898 0 0 1-4-3.777a3.902 3.902 0 0 1 .653-2.064l2.517-3.745a1.038 1.038 0 0 1 1.66 0l2.485 3.696A3.97 3.97 0 0 1 30 8.223A3.898 3.898 0 0 1 26 12m0-7.237l-1.656 2.463a1.89 1.89 0 0 0-.344.997a2.014 2.014 0 0 0 4 0a1.98 1.98 0 0 0-.375-1.047zM23.5 30h-15a6.496 6.496 0 0 1-1.3-12.862a8.994 8.994 0 0 1 17.6 0A6.496 6.496 0 0 1 23.5 30M16 12a7 7 0 0 0-6.941 6.145l-.1.812l-.815.064A4.496 4.496 0 0 0 8.5 28h15a4.496 4.496 0 0 0 .356-8.979l-.815-.064l-.099-.812A7.002 7.002 0 0 0 16 12"
        />
        </svg>
        <h2>64%</h2>
        </div>
        <div className="humidity">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 32 32"
        >
        <path
          fill="currentColor"
          d="M26 12a3.898 3.898 0 0 1-4-3.777a3.902 3.902 0 0 1 .653-2.064l2.517-3.745a1.038 1.038 0 0 1 1.66 0l2.485 3.696A3.97 3.97 0 0 1 30 8.223A3.898 3.898 0 0 1 26 12m0-7.237l-1.656 2.463a1.89 1.89 0 0 0-.344.997a2.014 2.014 0 0 0 4 0a1.98 1.98 0 0 0-.375-1.047zM23.5 30h-15a6.496 6.496 0 0 1-1.3-12.862a8.994 8.994 0 0 1 17.6 0A6.496 6.496 0 0 1 23.5 30M16 12a7 7 0 0 0-6.941 6.145l-.1.812l-.815.064A4.496 4.496 0 0 0 8.5 28h15a4.496 4.496 0 0 0 .356-8.979l-.815-.064l-.099-.812A7.002 7.002 0 0 0 16 12"
        />
        </svg>
        <h2>64%</h2>
        </div>
        <div className="humidity">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
          viewBox="0 0 32 32"
        >
        <path
          fill="currentColor"
          d="M26 12a3.898 3.898 0 0 1-4-3.777a3.902 3.902 0 0 1 .653-2.064l2.517-3.745a1.038 1.038 0 0 1 1.66 0l2.485 3.696A3.97 3.97 0 0 1 30 8.223A3.898 3.898 0 0 1 26 12m0-7.237l-1.656 2.463a1.89 1.89 0 0 0-.344.997a2.014 2.014 0 0 0 4 0a1.98 1.98 0 0 0-.375-1.047zM23.5 30h-15a6.496 6.496 0 0 1-1.3-12.862a8.994 8.994 0 0 1 17.6 0A6.496 6.496 0 0 1 23.5 30M16 12a7 7 0 0 0-6.941 6.145l-.1.812l-.815.064A4.496 4.496 0 0 0 8.5 28h15a4.496 4.496 0 0 0 .356-8.979l-.815-.064l-.099-.812A7.002 7.002 0 0 0 16 12"
        />
        </svg>
        <h2>64%</h2>
        </div>



      </div>
    </div>
  );
};
