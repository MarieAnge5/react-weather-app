import React from "react"; 
import WeatherIcon from "./WeatherIcon";

export default function WaetherForecastDay(props){
    function maxTemperature() {
        let temperature = Math.round(props.data.temp.max); 
    return `${temperature}°`; 
}

    function minTemperature() {
        let temperature = Math.round(props.data.temp.min); 
    return `${temperature}°`; 
}

function day() {
        let date = new Date(props.data.dt * 1000); 
        let day = date.getDay(); 

        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",  "Saturday"]; 
        return days[day]; 
}

    return (
        <div>
       <div className="WeatherForcecast-day">{day()}</div>
                <WeatherIcon code={props.data.weather[0].icon} size={10}/>
<div className ="WeatherForecast-temperatures">
<span className="WeatherForecast-temperature-max"><strong>{maxTemperature()}</strong></span>| 
<span className="WeatherForecast-temperature-min">{minTemperature()}</span>
</div>
</div>
    ); 
}