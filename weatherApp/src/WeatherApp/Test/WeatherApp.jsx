import React, { useState } from "react";
import { Data } from "./Data.jsx";
import "./WeatherApp.css";

import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import drizzle_icon from "../assets/drizzle.png";
import rain_icon from "../assets/rain.png";
import snow_icon from "../assets/snow.png";
import reactIcon from "../assets/reactWeather.png";

const icons = {
  Clear: clear_icon,
  Clouds: cloud_icon,
  Drizzle: drizzle_icon,
  Rain: rain_icon,
  Snow: snow_icon,
  React: reactIcon,
};

export const WeatherApp = () => {
  const [showData, setShowData] = useState(false);
  let api_Key = "d346f2daac5cb21f0aa55da07724ace3";

  const search = async (cityInput) => {
    let elemente = cityInput;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${elemente}&appid=${api_Key}&units=metric`;

    let response = await fetch(url);
    let data = await response.json();

    setShowData(true); // Mostrar los datos al final de la función search

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
            stroke="#000"
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
          <img src={icons.React} alt="" />
        </div>

        <div className="weather-temp">
          <h1 id="temperature"></h1>
          <p></p>

          <div className="geoLocation" onClick={getLocation}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <g fill="none" fillRule="evenodd">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                <path
                  fill="transparent"
                  d="M17.553 16.106a1 1 0 0 1 1.283.345l.058.102l2 4a1 1 0 0 1-.765 1.439L20 22H4a1 1 0 0 1-.945-1.328l.05-.12l2-4a1 1 0 0 1 1.836.788l-.047.107L5.618 20h12.764l-1.276-2.553a1 1 0 0 1 .447-1.341M12 2a7 7 0 0 1 7 7c0 2.382-1.289 4.317-2.623 5.69a15.721 15.721 0 0 1-2.418 2.008l-.373.246l-.332.209c-.052.031-.102.06-.149.09l-.257.148c-.528.3-1.168.3-1.696 0l-.257-.149l-.31-.189a17.017 17.017 0 0 1-.171-.109l-.373-.246a15.72 15.72 0 0 1-2.418-2.008C6.289 13.317 5 11.382 5 9a7 7 0 0 1 7-7m0 5a2 2 0 1 0 0 4a2 2 0 0 0 0-4"
                />
              </g>
            </svg>
            <button ></button>
          </div>
        </div>
      </div>

      <div className="dataContainer">
        {showData && (
          <div className="dataTypes">
            <Data className={"humidity"} />
            <Data className={"winter"} />
          </div>
        )}
      </div>
    </div>
  );
};
