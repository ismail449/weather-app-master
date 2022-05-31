import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import CloudBackground from '../../images/Cloud-background.png';
import './Weather.css';

const Weather = ({ temperature, weatherDescription }) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDay();
  const dayNumber = date.getDate();

  return (
    <div className="weather">
      <div className="top-bar">
        <button className="weather-button">Seach for places</button>
        <div className="gps-background">
          <GpsFixedIcon className="gps-icon" />
        </div>
      </div>

      <img src={CloudBackground} alt="clouds" className="weather-background" />
      <div className="weather-image">
        <img src={`/images/${weatherDescription}.png`} alt="weather" />
      </div>

      <div className="weather-details">
        <p className="weather-temperature">
          <span>{Math.floor(temperature)}</span>&deg;c
        </p>
        <p className="weather-condition">{weatherDescription}</p>
        <p className="weather-date">
          Today •{` ${days[day]} ,${dayNumber} ${months[month]}`}
        </p>
        <p className="weather-location">
          {' '}
          <LocationOnIcon /> <span>Cairo</span>
        </p>
      </div>
    </div>
  );
};

export default Weather;
