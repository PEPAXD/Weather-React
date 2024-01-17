import React, { useState, useEffect } from "react";
import "./styles/weatherUI.css";

import clear_icon from "../assets/Icons/clearDay.svg";

const icons = {
  Clear: clear_icon,
};

const weatherUI = ({ rotate, inputValue }) => {
  /*App-Cityvalue*/
  const [storedValue, setStoredValue] = useState("");
  useEffect(() => {
    setStoredValue(inputValue);
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

  /*OpenWeatherMap API*/
  const api_Key = "d346f2daac5cb21f0aa55da07724ace3";

const search = async () => {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${storedValue}&appid=${api_Key}&units=metric`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("No data found");
    }

    const data = await response.json();
    const { name, weather, main } = data;

    console.log("cityName: ", name);
    console.log("weatherDescription: ", weather[0].description);
    console.log("temperature: ", main.temp);
    console.log("minTemp: ", main.temp_min);
    console.log("maxTemp: ", main.temp_max);
    console.log("humidity: ", main.humidity);
    console.log("pressure: ", main.pressure);

    document.getElementById("input-field").value = name;
    setStoredValue(name);

  } catch (error) {
    console.log(error.message);
    setStoredValue("Invalid Input - Try Again");
    document.getElementById("input-field").value = 'NO DATA FOUND - TRY AGAIN';
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
                  event.target.value = '';
                  event.target.placeholder = '';
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

            <p className="weather">Nublado</p>
          </div>
          <img src={icons.Clear} alt="weather icon" className="weatherIcon" />

          <div className="tempContainer">
            <p className="temp">22°C</p>

            <div className="minMax">
              <div className="min">
                <p className="minHeading">Min</p>
                <p className="minTemp">17°C</p>
              </div>

              <div className="max">
                <p className="maxHeading">Max</p>
                <p className="maxTemp">27°C</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default weatherUI;
