import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css";
import "./index.css";

import Weather from "./Weather";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h2>Weather App </h2>
       <Weather defaultCity="Madrid" />    

        <footer>
          This project was coded by{" "}
          <a
            href="https://myportfoliocharlotteriviere.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
           Charlotte Rivière
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Charlotte0211/weather-react.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://meteoweatherproject.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
       </div>
  </div>
  );
}


