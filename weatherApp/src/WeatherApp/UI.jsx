import React, { useState } from "react";

export const UI = ({ handleRotate }) => {
  /*Center.UserInputTextCity*/
  const [alignment, setAlignment] = useState("left");
  const handleChange = (e) => {
    if (e.target.value.length === 1) {
      setAlignment("center");
    } else if (e.target.value.length === 0) {
      setAlignment("left");
    }
  };

  return (
    <>
      <div className="containerUI">
        <div className="tittle">
          <h1>WEATHER APP</h1>

          <div className="search">
            <div className="search-box">
              <div className="search-field">
                <input
                  className="input"
                  type="text"
                  placeholder="Search for a city, province or country..."
                  style={{ textAlign: alignment }}
                  onChange={handleChange}
                />
                <div className="search-box-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.6em"
                    height="0.6em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15h7.9" />
                      <path d="M11.5 3a17 17 0 0 0 0 18m1-18a16.984 16.984 0 0 1 2.574 8.62M15 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0m5.2 2.2L22 22" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="buttonRotate" onClick={handleRotate}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3em"
            height="3em"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M463.5 224h8.5c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S461.9 48.1 455 55l-41.6 41.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 224 344 224z"
            />
          </svg>
        </button>
      </div>
    </>
  );
};
