import React, { useState, useEffect } from "react";
import { Background } from "./WeatherApp/circleContainer.jsx";
import { UI } from "./WeatherApp/UI.jsx";
import WeatherUI from "./WeatherApp/weatherUI.jsx";

import homeImg from "./assets/Backgrounds/home.jpg";
import clearImg from "./assets/Backgrounds/clear.jpg";

function App() {
  /*activeButton*/
  const [showUI, setShowUI] = useState(true);
  const [rotate, setRotate] = useState(false);

  const handleRotate = (inputValue) => {
    if (inputValue === "") {
      setCityName("Invalid Input - Try Again");
    } else {
      setCityName(inputValue);
    }

    search(inputValue);
    setRotate(!rotate);

    setTimeout(() => {
      setShowUI(false);
    }, 500);
  };

  /*App-Cityvalue*/
  const [CityName, setCityName] = useState("");

  /*OpenWeatherMap API*/
  const [showData, setShowData] = useState(false);
  let api_Key = "d346f2daac5cb21f0aa55da07724ace3";
  const search = async (CityName) => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${api_Key}&units=metric`;
      let response = await fetch(url);
      let data = await response.json();

      if (!response.ok) {
        throw new Error("No data found");
      }

      setShowData(true);

      //* Cityname
      const cityName = data.name;
      console.log("cityName: ", cityName);
      setCityName(cityName);

      //* weather description
      const weatherDescription = data.weather[0].description;
      console.log("weatherDescription: ", weatherDescription);

      //* TempData
      const temperature = data.main.temp;
      console.log("temperature: ", temperature);

      //* Min Temp
      const minTemp = data.main.temp_min;
      console.log("minTemp: ", minTemp);

      //* Max Temp
      const maxTemp = data.main.temp_max;
      console.log("maxTemp: ", maxTemp);

      //* humidity
      const humidity = data.main.humidity;
      console.log("humidity: ", humidity);

      //* pressure
      const pressure = data.main.pressure;
      console.log("pressure: ", pressure);
    } catch (error) {
      console.log(error.message);
      setCityName("Invalid Input - Try Again");
    }
  };

  return (
    <>
      <div className="App">
        <div className="background">
          <Background
            bgImg={homeImg}
            rotateDeg={720}
            shouldRotate={rotate}
            opacity={1}
          />
          <Background
            bgImg={clearImg}
            rotateDeg={-720}
            shouldRotate={rotate}
            opacity={0}
          />

          {showUI && <UI handleRotate={handleRotate} />}
          <WeatherUI rotate={rotate} inputValue={CityName} />
        </div>
      </div>
    </>
  );
}

export default App;
