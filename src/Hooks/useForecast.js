import axios from "axios";
import React, { useState } from "react";
import getCurrentDayForecast from "../helper/getCurrentDayForecast";
import getCurrentDayDetail from "../helper/getCurrentDayDetail";
import getUpcomingDayForecast from "../helper/getUpcomingDayForecast";

const BASE_URL = "http://api.weatherapi.com/v1/forecast.json?key=";
const API_KEY = "12a453b5b1ab4117be9141609221503";
const REQUEST_URL = `${BASE_URL}${API_KEY}&q=`;

const useForecast = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [forecast, setForecast] = useState(null);

  //   get the Location entered
  const submitLocation = async (location) => {
    console.log("I am being printed from the hook", location);
    setLoading(true);
    await axios
      .get(`${REQUEST_URL}${location}&days=3`)
      .then((response) => {
        gatherData(response);
      })
      .catch((error) => {
        if (error.response) {
          setError(true);
        }
      });
  };

  const gatherData = (response) => {
    const currentDay = getCurrentDayForecast(
      response.data.current,
      response.data.location.name
    );
    const currentDayDetail = getCurrentDayDetail(response);

    const upComingDayForecast = getUpcomingDayForecast(response.data.forecast.forecastday); 

    setForecast({ currentDay, currentDayDetail, upComingDayForecast});

    console.log(currentDay);
    console.log(currentDayDetail);
    console.log(upComingDayForecast); 
    console.log(response);
    setLoading(false);
  };

  return {
    isError,
    isLoading,
    forecast,
    submitLocation,
  };
};
export default useForecast;
