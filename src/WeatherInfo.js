import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
    return( 
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
            <li>
                <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalised">{props.data.description}</li>
</ul>
        <div className="row">
            <div className="col-6">
                <div className="clearfix d-flex align-items-center">
                    <WeatherIcon code={props.data.iconUrl} 
                    alt={props.data.description}/>

                <div className="temperature-container">

                    <WeatherTemperature celsius={props.data.temperature} />
 
            </div>
            </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {props.data.humidity}</li>
                    <li>Wind: {props.data.wind}km/h</li>
                </ul>
            </div>
        </div> 
        </div> 
    );
}