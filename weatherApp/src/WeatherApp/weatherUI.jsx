import React, { useState, useEffect } from "react";
import "./styles/weatherUI.css";

import clear_icon from "../assets/Icons/clearDay.svg";
import error404 from "../assets/Icons/error-404.svg";
import fewClouds_icon from "../assets/Icons/few_Clouds.svg";
import rain_icon from "../assets/Icons/Rain.svg";
import thunderstorm_icon from "../assets/Icons/thunderstorm.svg";
import snow_icon from "../assets/Icons/snow.svg";
import showerRain_icon from "../assets/Icons/shower_rain.svg";
import mist_icon from "../assets/Icons/mist.svg";

const weatherIcons = {
  "error 404": error404,
  "Clear": clear_icon,
  "Rain": rain_icon,
  "Thunderstorm": thunderstorm_icon,
  "Snow": snow_icon,
  "Clouds": fewClouds_icon,
  "Drizzle" : showerRain_icon,
  "Mist": mist_icon,
};

const weatherUI = ({ rotate, inputValue }) => {
  useEffect(() => {
    setStoredValue(inputValue);
    search();
  }, [inputValue]);

  /*inputCityvalue*/
  const handleInputChange = (event) => {
    setStoredValue(event.target.value);
  };

  /*Updatedata*/
  const newCityName = () => {
    search();
    
  };

  /*Fade in animation*/
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(rotate ? 1 : 0);
  }, [rotate]);

  const [showDiv, setShowDiv] = useState(true);
  const [storedValue, setStoredValue] = useState(inputValue);
  const [weatherMain, setWeatherMain] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [tempData, setTempData] = useState("");
  const [minTemp, setMinTemp] = useState("");
  const [maxTemp, setMaxTemp] = useState("");

  /*OpenWeatherMap API*/
  const api_Key = "d346f2daac5cb21f0aa55da07724ace3";
  const search = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${storedValue}&appid=${api_Key}&units=metric`;
      const response = await fetch(url);
      setShowDiv(true);

      if (!response.ok) {
        throw new Error("No data found");
      }

      const data = await response.json();
      const { name, weather, main } = data;

      const weatherMain = weather[0].main;
      setWeatherMain(weatherMain);

      const weatherDescription = weather[0].description;
      setWeatherDescription(weatherDescription);

      setTempData(Math.round(main.temp) + "°C");
      setMinTemp(Math.round(main.temp_min) + "°C");
      setMaxTemp(Math.round(main.temp_max) + "°C");

      document.getElementById("input-field").value = name;
      setStoredValue(name);

    } catch (error) {
      document.getElementById("input-field").value =
        error.message + " - Try Again";
      setWeatherDescription("error 404");
      setShowDiv(false);

      const weatherMain = "error 404";
      setWeatherMain(weatherMain);
    }
  };

  return (
    <div
      style={{ opacity: opacity, transition: "opacity 1s ease-in" }}
      className="sliderContent"
    >
      <div className="cardContainer">
        <div className="card">
          <div className="textData">
            
            <div className="input-container">
              <input
                id="input-field"
                className="input-field"
                type="text"
                placeholder={storedValue}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    search(event.target.value);
                  }
                }}
                onChange={handleInputChange}
                onFocus={(event) => {
                  event.target.value = "";
                  event.target.placeholder = "";
                }}
              />
              <label htmlFor="input-field" className="input-label">
                Search a location...
              </label>
              <button onClick={newCityName} type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentcolor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15h7.9" />
                    <path d="M11.5 3a17 17 0 0 0 0 18m1-18a16.984 16.984 0 0 1 2.574 8.62M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22" />
                  </g>
                </svg>
              </button>
            </div>

            <p className="weather">{weatherDescription}</p>
          </div>
          <img
            src={weatherIcons[weatherMain]}
            alt="weather icon"
            className="weatherIcon"
          />

          <>
            {showDiv && (
              <div className="tempContainer">
                <p className="temp">{tempData}</p>

                <div id="minMax" className="minMax">
                  <div className="min">
                    <p className="minHeading">Min</p>
                    <p className="minTemp">{minTemp}</p>
                  </div>

                  <div className="max">
                    <p className="maxHeading">Max</p>
                    <p className="maxTemp">{maxTemp}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default weatherUI;
