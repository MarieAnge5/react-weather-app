import React, { useState } from "react"; 
import "./Weather.css"; 
import axios from "axios"; 

export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ready:false}); 
    function handleResponse(response) {
        setWeatherData({
            ready: true, 
            temperature: response.data.main.temp, 
            humidity: response.data.main.humidity, 
            wind: response.data.wind.speed,
            city: response.data.name,
            description: response.data.weather[0].description
        }); 
    }

    if (weatherData.ready){
        return ( 
<div className="Weather">
<h1>Sunday, 10h34pm</h1>
      <form>
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              type="text"
              placeholder="Enter your city"
            />
          </div>
          <div className="col-4">
            <input className="form-control" type="submit" value="Search" />
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
        <h2>{weatherData.city}</h2>
        </div>
        </div>
         <div className="row">
        <div className="col-6">
        <h4 className="text-capitalize">{weatherData.description}</h4>
        </div>
        <div className="col-6">
          <h3>
            <span></span>
            <span className="units">
            {Math.round(weatherData.temperature)}
              <a href="/" className="active">
                °C
              </a>
              |
              <a href="/" className="activated">
                °F
              </a>{" "}
            </span>
          </h3>
        </div>
      </div>
        <div className="row">
        <div className="col-6">
          <img />
        </div>
        <div className="col-6">
          <ul>
            <li>
        Humidity <span>{weatherData.humidity}</span>%<h></h>
            </li>
            <li>
        Wind <span>{weatherData.wind}</span>km/h
            </li>
          </ul>
        </div>
      </div>
        </div>
); 
    } else {
    const apiKey = "fb2f9eb010f9051a5c44f0016e042eaa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse); 

    return "Loading..."
    }
}