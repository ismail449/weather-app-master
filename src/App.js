import React, { useEffect, useState } from 'react';
import Weather from './components/Weather Component/Weather';
import WeatherDetails from './components/WeatherDetails Component/WeatherDetails';
import key from './apiKey';
import './App.css';

function App() {
  const url = 'https://api.openweathermap.org/data/2.5/';
  const [temperature, setTemperature] = useState(0);
  const [weatherDescription, setWeatherDescription] = useState('');
  const [mainWeather, setMainWeather] = useState('Clear');
  const [city, setCity] = useState('cairo');
  useEffect(() => {
    getPosition();
  }, []);
  const getPosition = () => {
    console.log('Hello')
    const error = () => fetchWeather('no position');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(fetchWeather, error);
    } else {
      error();
    }
  };
  const fetchWeather = async (position) => {
    console.log(position);
    let response = '';
    try {
      if (position === 'no position') {
        response = await fetch(`${url}weather?q=cairo&${key}`);
      } else {
        response = await fetch(
          `${url}weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&${key}`,
        );
      }

      const data = await response.json();
      console.log(data);
      setTemperature(data.main.temp);
      setWeatherDescription(data.weather[0].description);
      setMainWeather(data.weather[0].main)
      setCity(data.name);
    } catch (error) {
      console.log(error);
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
      />
      <WeatherDetails />
    </div>
  );
}

export default App;
