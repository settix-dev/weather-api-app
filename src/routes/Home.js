import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <p>Welcome to our Weather app</p>
      <Link to="nationalWeatherAlerts">/NationalWeatherAlerts</Link>
      <Link to="minuteForecast">/MinuteForecast</Link>
      <Link to="hourlyForecast">/HourlyForecast</Link>
      <Link to="dailyForecast">/DailyForecast</Link>
    </div>
  );
};

export default Home;
