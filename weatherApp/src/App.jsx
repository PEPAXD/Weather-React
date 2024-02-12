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

  /*GetLocation*/
  const [location, setLocation] = useState({});
  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    console.log(location);
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
      setCityName(cityName);

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

          {showUI && <UI handleRotate={handleRotate} onLocationChange={handleLocationChange} />}
          <WeatherUI rotate={rotate} inputValue={CityName}/>
        </div>
      </div>
    </>
  );
}

export default App;
