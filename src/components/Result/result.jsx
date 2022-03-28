import React from "react";
import "./result.css";
import PropTypes from "prop-types";
import CurrentDay from "../CurrentDay/CurrentDay";
import CurrentDayDetail from "../CurrentDayDetail/CurrentDayDetail";
import UpComingDays from "../UpComingDays/UpComingDays";

const Result = ({ forecast }) => {
  return (
    <div className="result-container">
      <div className="CurrentDay">
        <CurrentDay {...forecast.currentDay}/>
      </div>

      <div className="currentDayDetail">
        <CurrentDayDetail forecast = {forecast.currentDayDetail}/>
      </div>
      <div className="upComingDay">
       <UpComingDays forecast = {forecast.upComingDayForecast}/>
      </div>
    </div>
  );
};
Result.propTypes = {
  forecast: PropTypes.shape({
    currentDay: PropTypes.object,
    currentDayDetail: PropTypes.array, 
    upComingDayForecast: PropTypes.array
  }),
};

export default Result;
