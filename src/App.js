import React, { useEffect, useState } from 'react';
import Weather from './components/Weather Component/Weather';
import WeatherDetails from './components/WeatherDetails Component/WeatherDetails';
import key from './apiKey';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(0);
  const [weatherDescription, setWeatherDescription] = useState('')
  useEffect(() => {
    fetchWeather();
  }, []);
  const fetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=cairo&${key}`,
      );
      const data = await response.json();
      console.log(data);
      setTemperature(data.main.temp)
      setWeatherDescription(data.weather[0].description)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="App">
      <Weather temperature={temperature} weatherDescription={weatherDescription} />
      <WeatherDetails />
    </div>
  );
}

export default App;
