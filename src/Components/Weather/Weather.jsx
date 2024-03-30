import React from 'react'
import './Weather.css'
import Clear_Icon from '../Assets/clear.png';
import Cloud_Icon from '../Assets/cloud.png';
import Drizzle_Icon from '../Assets/drizzle.png';
import Humidity_Icon from '../Assets/humidity.png';
import Rain_Icon from '../Assets/rain.png';
import search_icon from '../Assets/search.png';
import Snow_Icon from '../Assets/snow.png';
import Wind_Icon from '../Assets/wind.png';
import Back from '../Weather/back.jpg'


const Weather = () => {
  ;
  return (
    <div className='background'>
      <div className='container'>
        <div className="top-bar">
          <input type="text" className="cityInput" placeholder='seach' />
          <div className="search-icon">
            <img src={search_icon} alt="Search" />
          </div>
        </div>
        <div className="weather-image">
          <img src={} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Weather