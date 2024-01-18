import React, { useState, useEffect } from "react";
import "./styles/weatherUI.css";

import clear_icon from "../assets/Icons/clearDay.svg";
import error404 from "../assets/Icons/error-404.svg";

const icons = {
  Clear: clear_icon,
  error: error404,
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

      setWeatherDescription(weather[0].description);
      setTempData(Math.round(main.temp) + "°C");
      setMinTemp(Math.round(main.temp_min) + "°C");
      setMaxTemp(Math.round(main.temp_max) + "°C");

      console.log("humidity: ", main.humidity);
      console.log("pressure: ", main.pressure);

      console.log("Data: ", data);

      document.getElementById("input-field").value = name;
      setStoredValue(name);
    } catch (error) {

      document.getElementById("input-field").value =
      error.message + " - Try Again";
      setWeatherDescription("error 404");
      setTempData("");
      setShowDiv(false);
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
              <button onClick={newCityName}>
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
          <img src={icons.error} alt="weather icon" className="weatherIcon" />

          <div className="tempContainer">
            <p className="temp">{tempData}</p>

            <>
              {showDiv && (
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
              )}
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default weatherUI;
