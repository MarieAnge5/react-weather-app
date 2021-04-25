import React from "react"; 
import FormattedDate from "./FormattedDate"; 
import WeatherIcon from "./WeatherIcon"; 



export default function Search(props) {
return ( 
    <div className="Search">
    <h1><FormattedDate date={props.data.date}/> </h1>
<div className="Search">
<div className="row">
        <div className="col-6">
        <h2>{props.data.city}</h2>
        </div>
        </div>
         <div className="row">
        <div className="col-6">
        <h4 className="text-capitalize">{props.data.description}</h4>
        </div>
        <div className="col-6">
          <h3>
            <span></span>
            <span className="units">
            {Math.round(props.data.temperature)}
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
        <div className="float-left">
          <WeatherIcon code={props.data.icon}/>
          </div>
        <div className="col-6">
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
    </div>
    </div>
    </div>
); 
}
