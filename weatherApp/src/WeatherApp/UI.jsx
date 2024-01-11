import React from 'react';

export const UI = ({ handleRotate }) => {
  return (
    
    <>
    <div className="containerUI">
      <div className="tittle">
        <h1>WEATHER APP</h1>
        <div className="bar"></div>
        <h2>SEARCH CITY</h2>
      </div>




    <button className="buttonRotate" onClick={handleRotate}>Rotate</button>
    </div>
    </>
  );
};

