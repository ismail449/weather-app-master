import React from 'react';
import Weather from './components/Weather Component/Weather';
import WeatherDetails from './components/WeatherDetails Component/WeatherDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Weather />
      <WeatherDetails />
    </div>
  );
}

export default App;
