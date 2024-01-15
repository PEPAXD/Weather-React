import React, { useState } from "react";

import { Background } from "./WeatherApp/circleContainer.jsx";
import { UI } from "./WeatherApp/UI.jsx";
import WeatherUI from "./WeatherApp/weatherUI.jsx";

import homeImg from "./assets/Backgrounds/home.jpg";
import clearImg from "./assets/Backgrounds/clear.jpg";

function App() {
  
  /*rotateButton*/
  const [showUI, setShowUI] = useState(true);
  const [rotate, setRotate] = useState(false);

  const handleRotate = () => {
    setRotate(!rotate);

    setTimeout(() => {
      setShowUI(false);
    }, 1000);
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
          <WeatherUI />
        </div>
      </div>
    </>
  );
}

export default App;
