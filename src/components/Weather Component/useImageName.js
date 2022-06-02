const useImageName = (mainWeather, weatherDescription) => {
    if (mainWeather === 'Clear') {
      return 'clear sky';
    } else if (mainWeather === 'Rain') {
      if (weatherDescription === 'freezing rain') {
        return 'Hail';
      } else if (
        weatherDescription === 'heavy intensity rain' ||
        weatherDescription === 'very heavy rain' ||
        weatherDescription === 'extreme rain'
      ) {
        return 'HeavyRain';
      } else if (
        weatherDescription === 'light rain' ||
        weatherDescription === 'moderate rain'
      ) {
        return 'LightRain';
      } else {
        return 'Shower';
      }
    } else if (mainWeather === 'Clouds') {
      if (
        weatherDescription === 'broken clouds' ||
        weatherDescription === 'overcast clouds'
      ) {
        return 'HeavyCloud';
      } else if (
        weatherDescription === 'few clouds' ||
        weatherDescription === 'scattered clouds'
      ) {
        return 'LightCloud';
      }
    } else if (mainWeather === 'Snow') {
      if (
        weatherDescription === 'Sleet' ||
        weatherDescription === 'Light shower sleet' ||
        weatherDescription === 'Shower sleet'
      ) {
        return 'Sleet';
      } else {
        return 'Snow';
      }
    } else if (mainWeather === 'Thunderstorm') {
      return 'Thunderstorm';
    } else {
      return 'HeavyCloud';
    }
  };

  export default useImageName