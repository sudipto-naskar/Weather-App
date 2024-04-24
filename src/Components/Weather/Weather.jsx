import React, { useEffect, useState } from "react";
import "./Weather.css"; // Assuming you have your CSS file
import Clear_Icon from "../Assets/clear.png";
import Night_Icon from "../Assets/night.png";
import Cloud_Icon from "../Assets/cloud.png";
import Drizzle_Icon from "../Assets/drizzle.png";
import Humidity_Icon from "../Assets/humidity.png";
import Rain_Icon from "../Assets/rain.png";
import search_icon from "../Assets/search.png";
import Snow_Icon from "../Assets/snow.png";
import Wind_Icon from "../Assets/wind.png";
import Loading from "../Assets/loading.gif"

const Weather = () => {
  const api_key = "c47221636141993144d47e66bc31fcca"; // Replace with your actual API key

  const [weatherIcon, setWeatherIcon] = useState(Cloud_Icon);

  useEffect(() => {
    const search = async () => {
      const element = document.getElementsByClassName("cityInput");
      if (element[0].value === "") {
        return 0;
      }

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;

      try {
        let response = await fetch(url);
        let data = await response.json();

        const iconMapping = {
          "01d": Clear_Icon,
          "01n": Night_Icon,
          "02d": Cloud_Icon,
          "02n": Cloud_Icon,
          "03d": Drizzle_Icon,
          "03n": Drizzle_Icon,
          "04d": Drizzle_Icon,
          "04n": Drizzle_Icon,
          "09d": Rain_Icon,
          "09n": Rain_Icon,
          "10d": Rain_Icon,
          "10n": Rain_Icon,
          "13d": Snow_Icon,
          "13n": Snow_Icon,
        };

        // Update weather data
        const humidity = document.getElementsByClassName("humidity-percent");
        const wind = document.getElementsByClassName("wind-rate");
        const temperature = document.getElementsByClassName("weather-temp");
        const location = document.getElementsByClassName("weather-location");
        humidity[0].innerHTML = data.main.humidity + " %";
        wind[0].innerHTML = Math.floor(data.wind.speed) + " km/h";
        temperature[0].innerHTML = Math.floor(data.main.temp) + "°C ";
        location[0].innerHTML = data.name;

        // Update weather icon
        setWeatherIcon(iconMapping[data.weather[0].icon] || Clear_Icon);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const handleSearch = () => {
      search();
    };

    const searchButton = document.querySelector(".search-icon");
    searchButton.addEventListener("click", handleSearch);

    return () => {
      searchButton.removeEventListener("click", handleSearch);
    };
  }, []);

  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search here.." />
        <div className="search-icon">
          <img src={search_icon} className="Button" alt="Search" />
          <img src={Loading} className='Buttonn'  alt="" />
        </div>
      </div>
      <div className="weather-image">
        <img src={weatherIcon} alt="Weather Icon" />
      </div>
      <div className="weather-temp">0°C</div>
      <div className="weather-location">Location</div>
      <div className="data-container">
        <div className="element">
          <img src={Humidity_Icon} alt="" />
          <div className="data">
            <div className="humidity-percent">0%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={Wind_Icon} alt="" />
          <div className="data">
            <div className="wind-rate">0 km/h</div>
            <div className="text">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
