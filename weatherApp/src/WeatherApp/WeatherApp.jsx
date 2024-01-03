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
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${elemente}&appid=${api_Key}&units=metric`;
    
    let response = await fetch(url);
    let data = await response.json();

    //* TempData 
    const temperature = document.querySelector("#temperature");
    temperature.innerHTML = `${Math.round(data.main.temp)}°C`;
    console.log(data.main.temp);

    //* CityName
    const cityName = document.querySelector(".weather-temp p");
    cityName.innerHTML = `${data.name}`;
    console.log(data.name);

    //* humidity
    const humidity = document.querySelector(".humidity p");
    //humidity.innerHTML = `${data.main.humidity}%`;

    //* pressure
    const presure = document.querySelector(".winter p")
    //presure.innerHTML = `${data.main.pressure}hPa`;

  };

  return (
    <div className="container">
      <div className="top-bar">
        <input
          className="cityInput"
          type="text"
          placeholder="Search for a city..."
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              search(event.target.value);
            }
          }}
        />

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
