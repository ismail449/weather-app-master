import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { cityAutoCompleteKey, cores } from '../../apiKey';
import './Search.css';

const Search = ({ toggleSearch, fetchWeather }) => {
  const [cityName, setCityName] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const handleSearch = (value) => {
    setCityName(value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${cores}http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${cityAutoCompleteKey}&q=${cityName}`,
      );
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleCitySelect = (postion) => {
    fetchWeather(postion);
    toggleSearch();
  };
  return (
    <div className="search">
      <CloseIcon onClick={toggleSearch} className="search-close" />
      <form onSubmit={(e) => handleSubmit(e)} className="search-form">
        <input
          value={cityName}
          onChange={(e) => handleSearch(e.target.value)}
          type="search"
          className="search-form-input"
          placeholder="search location"
        />
        <button className="search-form-button" type="submit">
          Search
        </button>
      </form>
      <div className="search-suggestions">
        {suggestions?.map((suggestion) => (
          <div
            className="search-suggestion"
            onClick={() => handleCitySelect(suggestion.LocalizedName)}
            key={suggestion.Key}
          >
            <div>{suggestion.LocalizedName}</div>
            <ChevronRightIcon />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
