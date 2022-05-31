import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = () => {
  return (
    <div className="WeatherDetails">
      <div className="WeatherDetails-temperature-options">
        <div className="WeatherDetails-cel">&deg;c</div>
        <div className="WeatherDetails-f">&deg;f</div>
      </div>
			<div></div>
      <div>WeatherDetails</div>
    </div>
  );
};

export default WeatherDetails;
