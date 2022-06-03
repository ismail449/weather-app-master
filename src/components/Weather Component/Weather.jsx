import React, { useState, useEffect } from 'react';
import Search from '../Search Component/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import useImageName from './useImageName';
import useDate from '../useDate';
import { months, days } from '../data';
import './Weather.css';

const Weather = ({
  temperature,
  weatherDescription,
  city,
  getPosition,
  mainWeather,
  fetchWeather,
  error,
}) => {
  const [showSearch, setShowSearch] = useState(false);
  const imageName = useImageName(mainWeather, weatherDescription);
  const { month, day, dayNumber } = useDate();

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <div className="weather">
      {showSearch ? (
        <Search fetchWeather={fetchWeather} toggleSearch={toggleSearch} />
      ) : null}
      <div className="top-bar">
        <button onClick={toggleSearch} className="weather-button">
          Seach for places
        </button>
        <div onClick={getPosition} className="gps-background">
          <GpsFixedIcon className="gps-icon" />
        </div>
      </div>

      <img
        src="/images/Cloud-background.png"
        alt="clouds"
        className="weather-background"
      />
      <div className="weather-image">
        <img src={`/images/${imageName}.png`} alt="weather" />
      </div>

      <div className="weather-details">
        <p className="weather-temperature">
          <span>{Math.round(temperature)}</span>&deg;c
        </p>
        <p className="weather-condition">{weatherDescription}</p>
        <p className="weather-date">
          Today •{` ${days[day]} ,${dayNumber} ${months[month]}`}
        </p>
        <p className="weather-location">
          {' '}
          <LocationOnIcon />{' '}
          {error ? (
            <span className="error">Error city not found</span>
          ) : (
            <span>{city}</span>
          )}
        </p>
      </div>
    </div>
  );
};

export default Weather;
