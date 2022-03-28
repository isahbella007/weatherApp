import React from "react";
import "./CurrentDayDetail.css";
const CurrentDayDetail = ({ forecast }) => {
  return forecast.map((item) => (
    <div className="details-container" key={item.name}>
      <div>{item.name}</div>
      <div className="right">
        {item.value} {item.unit}
      </div>
    </div>
  ));
};
export default CurrentDayDetail;
