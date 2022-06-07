import React from 'react';
import { months, days } from '../data';
import getDate from '../getDate';
import toFahrenheit from '../toFahrenheit';
import './Forecast.css';

const Forecast = ({ maxTemp, minTemp, icon, index, isFahrenheit }) => {
  const { month, day, dayNumber } = getDate(index);
  const fahrenheitMax = toFahrenheit(maxTemp);
  const fahrenheitMin = toFahrenheit(minTemp);
  return (
    <div className="forecast background">
      <div className="forecast-date">{`${days[day]} ,${dayNumber} ${months[month]}`}</div>
      <img
        className="forecast-icon"
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
      />
      <div className="forecast-temp">
        <span>
          {isFahrenheit ? fahrenheitMax : maxTemp.toFixed(1)} &deg;
          {isFahrenheit ? 'f' : 'c'}
        </span>
        <span>
          {isFahrenheit ? fahrenheitMin : minTemp.toFixed(1)} &deg;
          {isFahrenheit ? 'f' : 'c'}
        </span>
      </div>
    </div>
  );
};

export default Forecast;
