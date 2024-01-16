import React, { useState } from "react";
import './styles/UI.css';

export const UI = ({ handleRotate }) => {

  /*Fade-Out MainUI*/
  const [opacity, setOpacity] = useState(1);
  const handleClick = () => {

    setOpacity(prevOpacity => prevOpacity === 1 ? 0 : 1);
    handleRotate(inputValue);
  };

  /*InputTextCity*/
  const [alignment, setAlignment] = useState("left");
  const [inputValue, setInputValue] = useState('');
  const handleChange = (e) => {

    setInputValue(event.target.value);

    if (e.target.value.length === 1) {
      setAlignment("center");
    } else if (e.target.value.length === 0) {
      setAlignment("left");
    }
  };

  return (
    <>
      <div style={{ opacity: opacity, transition: 'opacity 0.5s ease-out'  }} className="containerUI">
        <div className="mainUI">
          <h1>WEATHER APP</h1>

          <div className="search">
            <div className="search-box">
              <div className="search-field">
                <input
                  className="input"
                  type="text"
                  placeholder="Search a location..."
                  style={{ textAlign: alignment }}
                  onChange={handleChange}
                />
                <button className="search-box-Button" onClick={handleClick}>
                  <div className="search-box-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1.8em"
                      height="1.8em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      >
                        <path d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15h7.9" />
                        <path d="M11.5 3a17 17 0 0 0 0 18m1-18a16.984 16.984 0 0 1 2.574 8.62M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22" />
                      </g>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="or-LineBar">
            <div className="line"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="0.4em"
              height="0.4em"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeWidth="0.1"
                d="M12 22L1 3h22M12 18l7.53-13H4.47"
              />
            </svg>
            <div className="line"></div>
          </div >

          <button className="geoLocationIP" onClick={handleClick} >Where Am I?</button>
        </div>
      </div>
    </>
  );
};
