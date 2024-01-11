import React, { useState } from 'react';

import { Background } from './WeatherApp/circleContainer.jsx';
import { UI } from './WeatherApp/UI.jsx';


import homeImg from "./assets/Backgrounds/home.png";
import clearImg from "./assets/Backgrounds/clear.jpg";




function App() {

  /*rotateButton*/
  const [rotate, setRotate] = useState(false);
  const handleRotate = () => {
    setRotate(!rotate);
    console.log(rotate);
  };

  return (
    <>
      <div className="App">
        <div className="background">
            <Background bgImg={homeImg}  rotateDeg={720} shouldRotate={rotate}/>
            <UI handleRotate={handleRotate} />
        </div>
      </div>
    </>
  )
}

export default App;