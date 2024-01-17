import React, { useState, useEffect } from "react";
import "./styles/weatherUI.css";

import clear_icon from "../assets/Icons/clearDay.svg";

const icons = {
  Clear: clear_icon,
};

const weatherUI = ({ rotate, inputValue }) => {
  
  /*Cityvalue*/
  const [storedValue, setStoredValue] = useState("");
  useEffect(() => {
    setStoredValue(inputValue);
  }, [inputValue]);

  const handleInputChange = (event) => {
    setStoredValue(event.target.value);
  };

  const printInputValue = () => {
    search();
  };

  /*Fade in animation*/
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(rotate ? 1 : 0);
  }, [rotate]);

  /*OpenWeatherMap API*/
  const [showData, setShowData] = useState(false);
  const [cityName, setCityName] = useState('');
  let api_Key = "d346f2daac5cb21f0aa55da07724ace3";

  const search = async () => {
    const cityInput = storedValue;

    let elemente = cityInput;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${elemente}&appid=${api_Key}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setShowData(true);

    //* CityName
    setCityName(data.name);
    console.log(data.name);
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
                placeholder={inputValue}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    search(event.target.value);
                  }
                }}
                onChange={handleInputChange}
              />
              <label htmlFor="input-field" className="input-label">
                Search a location...
              </label>
              <button onClick={printInputValue}>
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
