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

    //* CityName
    const cityName = document.querySelector(".weather-temp p");
    cityName.innerHTML = `${data.name}`;

    //* humidity
    const humidity = document.querySelector(".humidity h2");
    humidity.innerHTML = `${data.main.humidity}%`;

    //* pressure
    const presure = document.querySelector(".winter h2");
    presure.innerHTML = `${Math.round(data.wind.speed * 3.6)} km/h`;
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const showPosition = async (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );
    const data = await response.json();

    const locality =
      data.address.city ||
      data.address.town ||
      data.address.village ||
      "Unknown location";

    search(locality);
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
          <h1 id="temperature"></h1>
          <p></p>

          <div className="geoLocation">
            <button onClick={getLocation}>Get Location</button>
          </div>

        </div>
      </div>

      <div className="dataContainer">
        <div className="dataTypes">
          <Data className={"humidity"} />
          <Data className={"winter"} />
          <Data className={"fire"} data={78} />
        </div>
      </div>
    </div>
  );
};
