import React from "react"; 
import FormattedDate from "./FormattedDate"; 
import WeatherIcon from "./WeatherIcon"; 
import WeatherTemperature from "./WeatherTemperature"; 


export default function Search(props)  {
return ( 
    <div className="Search">
    <h1><FormattedDate date={props.data.date}/> </h1>
<div className="Search">
<div className="row">
        <div className="col-6">
        <h2>{props.data.city}</h2>
        </div>
           <div className="col-6">
         <WeatherTemperature celsius={props.data.temperature} />
         </div>
         </div>
 <h4 className="text-capitalize">{props.data.description}</h4>
        <div className="float-left">
          <WeatherIcon code={props.data.icon} className="image"/>
          </div>
          <ul>
            <li>
        Humidity <span>{props.data.humidity}</span>%<h></h>
            </li>
            <li>
        Wind <span>{props.data.wind}</span>km/h
            </li>
          </ul>
        </div>
      </div>

); 
}
