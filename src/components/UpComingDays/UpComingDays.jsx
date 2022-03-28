import React from "react";
import "./UpComingDays.css";

const UpComingDays = ({ forecast }) => {
 
  return (
    <div className="upComingDays-container">
      {forecast.map(items => (
        <ul>
          <li><img src={items.weatherIcon}></img></li>
          <li>{items.day}</li>
          <li>{items.avgTemp} °C</li>
          
        </ul>
      ))}
      
    </div>
  );
};
export default UpComingDays;
