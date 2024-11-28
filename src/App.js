// App.js
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import './styles.css';

const App = () => {
  // State to store weather data
  const [weatherData, setWeatherData] = useState(null);

  // Function to fetch weather data for a given city
  const fetchWeatherData = async (city) => {
    const API_KEY = "22336612d49dc973afbc409740e7e2e9"; // Your OpenWeatherMap API key

    try {
      // API call to fetch weather data
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      // Update the state with the fetched data
      setWeatherData(response.data);
    } catch (error) {
      console.error("Could not fetch weather data. Please try again.", error);
    }
  };

  return (
    <div className="App">
      {/* Search bar for user input */}
      <SearchBar onSearch={fetchWeatherData} />

      {/* Display weather details if data is available */}
      {weatherData && <WeatherDisplay data={weatherData} />}
    </div>
  );
};

export default App;
