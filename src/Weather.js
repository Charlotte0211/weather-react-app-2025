import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";
import "./App.css";
import "./index.css";

export default function Weather() {
    return (
        <div className="Weather"> 
      <form>
        <div className="row">
            <div className="col-9">
<input 
type="search" 
placeholder="Enter a city..." 
className="form-control" 
/>
</div>
            <div className="col-3">
<input 
type="submit" 
value="Search" 
className="btn btn-primary w-100"
 />   
 </div>
 </div>
      </form>
        <h1> New York</h1>
        <ul>
            <li>Saturday 16:29</li>
            <li>Mostly cloudy</li>
</ul>
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" 
                alt="sunny" 
                />
                10°C
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 10%</li>
                    <li>Humidity: 20%</li>
                    <li>Wind: 5 km/h</li>
                </ul>
            </div>
        </div> 
          </div> 
    );
    }