import React from "react"; 
import "./Weather.css"; 

export default function Weather() {
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
          <h2>New York</h2>
        </div>
        </div>
         <div className="row">
        <div className="col-6">
        <h4>Cloudy</h4>
        </div>
        <div className="col-6">
          <h3>
            <span></span>
            <span className="units">
              13{" "}
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
          <i className="fas fa-cloud-moon-rain"></i>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Humidity <span>13</span>%<h></h>
            </li>
            <li>
              Wind <span>14</span>km/h
            </li>
          </ul>
        </div>
      </div>
        </div>
); 
}