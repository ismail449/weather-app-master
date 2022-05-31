import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import CloudBackground from '../../images/Cloud-background.png';
import Shower from '../../images/Shower.png';
import './Weather.css';

const Weather = () => {
  return (
    <div className="weather">
      <div className="top-bar">
        <button className="weather-button">Seach for places</button>
        <div className="gps-background">
          <GpsFixedIcon className="gps-icon" />
        </div>
      </div>

      <img src={CloudBackground} alt="clouds" className="weather-background" />
      <img src={Shower} alt="weather" className="weather-image" />
      <div className="weather-details">
        <p className="weather-temperature">
          <span>15</span>&deg;c
        </p>
        <p className="weather-condition">Shower</p>
        <p className="weather-date">Today • Fri, 5 Jun</p>
        <p className="weather-location">
          {' '}
          <LocationOnIcon /> <span>Cairo</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
