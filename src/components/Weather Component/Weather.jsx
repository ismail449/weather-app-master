import React, { useState, useEffect } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { months, days } from './data';
import './Weather.css';

const Weather = ({
  temperature,
  weatherDescription,
  city,
  getPosition,
  mainWeather,
}) => {
  const [imageName, setImageName] = useState('clear sky');
  useEffect(() => {
    getImageName();
  }, [weatherDescription]);
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const dayNumber = date.getDate();
  const getImageName = () => {
    if (mainWeather === 'Clear') {
      setImageName('clear sky');
    } else if (mainWeather === 'Rain') {
      if (weatherDescription === 'freezing rain') {
        setImageName('Hail');
      } else if (
        weatherDescription === 'heavy intensity rain' ||
        weatherDescription === 'very heavy rain' ||
        weatherDescription === 'extreme rain'
      ) {
        setImageName('HeavyRain');
      } else if (
        weatherDescription === 'light rain' ||
        weatherDescription === 'moderate rain'
      ) {
        setImageName('LightRain');
      } else {
        setImageName('Shower');
      }
    } else if (mainWeather === 'Clouds') {
      if (
        weatherDescription === 'broken clouds' ||
        weatherDescription === 'overcast clouds'
      ) {
        setImageName('HeavyCloud');
      } else if (
        weatherDescription === 'few clouds' ||
        weatherDescription === 'scattered clouds'
      ) {
        setImageName('LightCloud');
      }
    } else if (mainWeather === 'Snow') {
      if (
        weatherDescription === 'Sleet' ||
        weatherDescription === 'Light shower sleet' ||
        weatherDescription === 'Shower sleet'
      ) {
        setImageName('Sleet');
      } else {
        setImageName('Snow');
      }
    } else if (mainWeather === 'Thunderstorm') {
      setImageName('Thunderstorm');
    } else {
      setImageName('HeavyCloud');
    }
  };
  return (
    <div className="weather">
      <div className="top-bar">
        <button className="weather-button">Seach for places</button>
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
          <LocationOnIcon /> <span>{city}</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
