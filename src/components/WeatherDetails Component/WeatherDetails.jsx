import React, { useState, useEffect } from 'react';
import Forecast from '../ForecastComponent/Forecast';
import East from '@mui/icons-material/East';
import useDirction from './useDirection';
import { url, key } from '../../apiKey';
import './WeatherDetails.css';

const WeatherDetails = ({ wind, humidity, visibility, pressure, city }) => {
  const direction = useDirction(wind.deg);
  const [celActive, setCelActive] = useState(true);
  const [forecast, setForecast] = useState([]);
  useEffect(() => {
    fetchForecast();
  }, [city]);
  const fetchForecast = async () => {
    try {
      const response = await fetch(`${url}forecast?q=${city}&${key}`);
      const data = await response.json();
      console.log(data.list);
      setForecast(data.list);
    } catch (error) {
      console.log(error);
    }
  };
  const handleTempChange = (isActive) => {
    setCelActive(isActive);
  };
  return (
    <div className="WeatherDetails">
      <div className="WeatherDetails-container">
        <div className="WeatherDetails-temperature-options">
          <div
            onClick={() => handleTempChange(true)}
            className={`WeatherDetails-cel ${celActive ? 'active' : ''}`}
          >
            &deg;c
          </div>
          <div
            onClick={() => handleTempChange(false)}
            className={`WeatherDetails-f  ${!celActive ? 'active' : ''}`}
          >
            &deg;f
          </div>
        </div>
        <div className="WeatherDeatails-forecast">
          {forecast?.map((day, index) => {
            if (index % 8 === 0) {
              return (
                <Forecast
                  key={day.dt_txt}
                  maxTemp={day.main.temp_max}
                  minTemp={day.main.temp_min}
                  icon={day.weather[0].icon}
                  index={index / 8 + 1}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
        <h2 className="WeatherDetails-title">today's hightlights </h2>
        <div className="WeatherDetails-grid">
          <div className="WeatherDetails-grid-item ">
            <p>Wind status</p>
            <div className="WeatherDetails-grid-info">
              <span className="WeatherDetails-grid-main">
                {(wind.speed * 2.237).toFixed(1)}
              </span>
              mps
              <div className="WeatherDetails-grid-container">
                <div className="WeatherDetails-grid-background">
                  <East style={{ transform: `rotate(-${wind.deg}deg)` }} />
                </div>

                <span className="WeatherDetails-grid-direction">
                  {direction}
                </span>
              </div>
            </div>
          </div>
          <div className="WeatherDetails-grid-item ">
            <p>Humidity</p>
            <div className="WeatherDetails-grid-info">
              <span className="WeatherDetails-grid-main">{humidity}</span>%
              <div className="WeatherDetails-grid-progress">
                <span className="zero small-number number">0</span>
                <span className="small-number number">50</span>
                <span className="hunderd small-number number">100</span>
                <progress max={100} value={humidity}></progress>
                <p className="percent small-number">%</p>
              </div>
            </div>
          </div>
          <div className="WeatherDetails-grid-item ">
            <p>Visibility</p>
            <div className="WeatherDetails-grid-info">
              <span className="WeatherDetails-grid-main">
                {(visibility * 0.000621).toFixed(1)}{' '}
              </span>
              miles
            </div>
          </div>
          <div className="WeatherDetails-grid-item ">
            <p>Air Pressure</p>
            <div className="WeatherDetails-grid-info">
              <span className="WeatherDetails-grid-main">{pressure} </span>mb
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
