import React, { useState } from "react"; 

export default function WeatherTemperature(props){
const [unit, setUnit] = useState("celsius"); 
function  convertFahrenheit(event) {
    event.preventDefault(); 
    setUnit("fahrenheit"); 
}

function convertCelsius(event){
  event.preventDefault(); 
    setUnit("celsius"); 
}

if (unit === 'celsius') {
    return (
         <h3 className="WeatherTemperature">
            <span className="temperature">
                {Math.round(props.celsius)} </span>
            <span className="unit">
             °C | {" "}
              <a href="/" onClick={convertFahrenheit}>
             °F
              </a>
            </span>
          </h3>
    ); 
} else {
    let fahrenheit = (props.celsius * 9/5) + 32; 
    return (
         <h3 className="WeatherTemperature">
            <span className="temperature">
                {Math.round(fahrenheit)}
            </span>
            <span className="unit">
                <a href="/" onClick={convertCelsius}>
             °C </a> {""}
              | °F
            </span>
          </h3>
    ); 
}
}