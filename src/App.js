import React, { useEffect, useState } from 'react';
import Weather from './components/Weather Component/Weather';
import WeatherDetails from './components/WeatherDetails Component/WeatherDetails';
import { key, url } from './apiKey';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(0);
  const [wind, setWind] = useState({ deg: 0, speed: 0 });
  const [humidity, setHumidity] = useState(0);
  const [visibility, setVisibility] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [weatherDescription, setWeatherDescription] = useState('');
  const [mainWeather, setMainWeather] = useState('Clear');
  const [city, setCity] = useState('cairo');
  const [error, setError] = useState(false);
  useEffect(() => {
    getPosition();
  }, []);
  const getPosition = () => {
    const error = () => fetchWeather('no position');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeather, error);
    } else {
      error();
    }
  };
  const fetchWeather = async (position) => {
    let response = '';
    try {
      if (position === 'no position') {
        response = await fetch(`${url}weather?q=cairo&${key}`);
      } else if (position.coords) {
        response = await fetch(
          `${url}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&${key}`,
        );
      } else {
        response = await fetch(`${url}weather?q=${position}&${key}`);
      }

      const data = await response.json();
      setTemperature(data.main.temp);
      setWind(data.wind);
      setHumidity(data.main.humidity);
      setVisibility(data.visibility);
      setPressure(data.main.pressure);
      setWeatherDescription(data.weather[0].description);
      setMainWeather(data.weather[0].main);
      setCity(data.name);
      setError(false);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  return (
    <div className="App">
      <Weather
        city={city}
        temperature={temperature}
        weatherDescription={weatherDescription}
        getPosition={getPosition}
        mainWeather={mainWeather}
        fetchWeather={fetchWeather}
        error={error}
      />
      <WeatherDetails
        wind={wind}
        humidity={humidity}
        visibility={visibility}
        pressure={pressure}
        city={city}
      />
    </div>
  );
}

export default App;
