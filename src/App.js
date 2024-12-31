
import React, { useState } from "react";
import axios from "axios";
import WeatherCard from "./components/WeatherCard";
import SearchBar from "./components/SearchBar";
import './App.css';
const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    const API_KEY = "4b9f74c39f7b1a22ff139efcb5565dee"; 
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    try {
      const response = await axios.get(URL);
      setWeatherData(response.data);
      setError("");
    } catch (err) {
      setError("City not found. Please try again.");
      setWeatherData(null);
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <SearchBar fetchWeather={fetchWeather} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};

export default App;
