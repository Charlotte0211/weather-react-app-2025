import React, { useState }   from "react";
import WeatherInfo from "./WeatherInfo";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";
import "./App.css";
import "./index.css";
import axios from "axios";

export default function Weather(props) {

    const [weatherData, setWeatherData] = useState({ready: false});
    const [city, setCity] = useState(props.defaultCity);
function showTemperature(response) {
    console.log(response.data);
    setWeatherData({
        ready: true, 
        temperature: Math.round(response.data.temperature.current),
        city: response.data.city,
        description: response.data.condition.description,
        humidity: Math.round(response.data.temperature.humidity),
        date: new Date(response.data.time * 1000),
        wind: Math.round(response.data.wind.speed),
        iconUrl: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`,
        iconDescription: response.data.condition.description,
    });

  
     }   

     function search() {
const apiKey="o4045te388f5bc6e0abcc5fba3a40236";
let apiUrl=`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(showTemperature);
 }
     function handleSubmit(event) {
        event.preventDefault();
        search();
      }
      function handleCityChange(event) {
        setCity(event.target.value);
      }

     if (weatherData.ready) 
        {
            return (
        <div className="Weather"> 
      <form onSubmit={handleSubmit}> 
        <div className="row">
            <div className="col-9">
<input 
type="search" 
placeholder="Enter a city..." 
className="form-control" 
autoFocus="on"
onChange={handleCityChange} 
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
        <WeatherInfo data={weatherData} />
        
</div>
        );
    }
    else {
        search();
        return "Loading...";

}
}