import React from "react";
import styles from "./CurrentDay.module.css";
import { FaLocationArrow } from "react-icons/fa";

const CurrentDay = ({
  day,
  location,
  temperature,
  weatherDescription,
  weatherIcon,
}) => {
  var currentDate = new Date(day);
  var weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var currentDayOfTheWeek = weekdays[currentDate.getDay()];

  var date = currentDate.getDate();
  var month = currentDate.toLocaleString("default", { month: "long" });

  return (
    <div className={styles.background}>
      <div className={styles.gradient}></div>
      <div className={styles.textContainer}>
        <div className={styles.topPart}>
          <h1>{currentDayOfTheWeek}</h1>
          <p>
            {" "}
            {month} {date}
          </p>
          <span>
            <FaLocationArrow />
          </span>{" "}
          {location}
        </div>
        <div className={styles.bottomPart}>
          <h1>{temperature} °C</h1>
          <h5>{weatherDescription}</h5>
        </div>
      </div>
    </div>
  );
};
export default CurrentDay;
