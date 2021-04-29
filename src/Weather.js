import React, { useState } from "react"; 
import WeatherForecast from "./WeatherForecast"
import "./Weather.css"; 

import Search from "./Search"; 
import axios from "axios"; 

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false}); 
    const [city, setCity] = useState(props.defaultCity); 
    function handleResponse(response) {
        setWeatherData({
            ready: true, 
            coordinates: response.data.coord, 
            date: new Date(response.data.dt * 1000),
            temperature: response.data.main.temp, 
            humidity: response.data.main.humidity, 
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon, 
        }); 
    }

    function searchCity(){
    const apiKey = "fb2f9eb010f9051a5c44f0016e042eaa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 
    }

    function handleSubmit(event){
        event.preventDefault(); 
        searchCity(); 
    }

    function handleCityChange(event){
        setCity(event.target.value); 
    }

    if (weatherData.ready){
        return (
<div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter your city"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-4">
            <input className="form-control" type="submit" value="Search" />
          </div>
        </div>
      </form>
      <Search data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates}/>
        </div>
        );
} else {
 searchCity(); 
 return "Loading..."; 
    }
}