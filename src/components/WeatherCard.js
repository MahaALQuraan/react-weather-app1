import React from "react";
import sunnyImage from "../assets/clear.png";
import cloudyImage from "../assets/cloud_icon.jpg";
import rainyImage from "../assets/rain_icon.png";
import snowImage from '../assets/snow_icon.jpg';

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather } = weatherData;

  // Determine the weather condition
  const weatherCondition = weather[0].main.toLowerCase();

  // Map conditions to images
  const weatherImages = {
    clear: sunnyImage,
    clouds: cloudyImage,
    rain: rainyImage,
    snow: snowImage,
  };
  const weatherImage = weatherImages[weatherCondition] || cloudyImage; // Default to cloudy

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <h3>{main.temp}°C</h3>
      <p>{weather[0].description}</p>
      <p>Humidity: {main.humidity}%</p>
      <p>Pressure: {main.pressure} hPa</p>
      <img
        src={weatherImage}
        alt={weather[0].description}
        className="weather-icon"
      />
    </div>
  );
};

export default WeatherCard;
