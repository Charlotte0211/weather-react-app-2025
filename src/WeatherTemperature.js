import React, { useState } from "react";

export default function WeatherTemperature(props) {
   const [unit, setUnit] = useState("celsius");
       function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
        }

        function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
        }
   if (unit === "celsius") {

return (  
 <div clqassName="WeatherTemperature">
<span className="temperature">{props.celsius}</span>
<span className="unit">
°C |{""}
    <a href="/" onClick={showFahrenheit}>
   °F
    </a>
    </span>
</div>
);
}
else {
return (
<div className="WeatherTemperature">
<span>
<span className="temperature">{Math.round((props.celsius * 9) / 5 + 32)}</span>
<span className="unit">
    <a href="/" onClick={showCelsius}>°C
    </a>{""}
   | °F
    </span>
</span>
</div>
);  
}
}