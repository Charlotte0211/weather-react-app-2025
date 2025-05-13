import React, { useState }   from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";
import "./App.css";
import "./index.css";
import axios from "axios";

export default function Weather() {
    const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState(null);
function showTemperature(response) {
    console.log(response.data);
    setWeatherData({
        temperature: Math.round(response.data.temperature.current),
        city: response.data.city,
        date: new Date(response.data.time * 1000),
        description: response.data.condition.description,
        humidity: Math.round(response.data.temperature.humidity),
        wind: Math.round(response.data.wind.speed),
        iconUrl: response.data.condition.icon_url
    });

    setReady(true);
     }   

     if (ready) 
        {
            return (
        <div className="Weather"> 
      <form>
        <div className="row">
            <div className="col-9">
<input 
type="search" 
placeholder="Enter a city..." 
className="form-control" 
autoFocus="on"
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
        <h1>{weatherData.city}</h1>
        <ul>
            <li>Saturday 16:29</li>
            <li>{weatherData.description}</li>
</ul>
        <div className="row">
            <div className="col-6">
                <div className="clearfix d-flex align-items-center">
                    <img 
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                    alt="sunny" 
                    className="weather-icon"/>
                <div className="temperature-container">
                <span className="temperature">{weatherData.temperature}
</span>
                <span className="unit">°C</span>
            </div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {weatherData.humidity}</li>
                    <li>Wind: {weatherData.wind}km/h</li>
                </ul>
            </div>
        </div> 
          </div> 
    );
    }

    else {

const apiKey="o4045te388f5bc6e0abcc5fba3a40236";
let city="New York";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
return "Loading...";
}
}