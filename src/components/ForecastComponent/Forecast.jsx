import React from 'react';
import { months, days } from '../data';
import useDate from '../useDate';
import './Forecast.css';

const Forecast = ({ maxTemp, minTemp, icon, index }) => {
  const { month, day, dayNumber } = useDate(index);

  return (
    <div className="forecast background">
      <div className="forecast-date">{`${days[day]} ,${dayNumber} ${months[month]}`}</div>
      <img
        className="forecast-icon"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <div className="forecast-temp">
        <span>{Math.round(maxTemp)} &deg;c</span>
        <span>{Math.round(minTemp)} &deg;c</span>
      </div>
    </div>
  );
};

export default Forecast;
