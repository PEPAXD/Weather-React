import React, { useState, useEffect } from "react";
import "./styles/weatherUI.css";

import clear_icon from "../assets/Icons/clearDay.svg";

const icons = {
  Clear: clear_icon,
};

const weatherUI = ({ rotate, inputValue }) => {
  /*Fade in animation*/
  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(rotate ? 1 : 0);
  }, [rotate]);

  /*OpenWeatherMap API*/
  const search = async (cityInput) => {
    let elemente = cityInput;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${elemente}&appid=${api_Key}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setShowData(true);

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
              />
              <label htmlFor="input-field" className="input-label">
                Search a location...
              </label>
              <span className="input-highlight"></span>
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
