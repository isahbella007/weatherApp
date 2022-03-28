import React from "react";
import "./error.css";
import pawpaw from "./Images/pawpaw_image.png";
import { FaHome } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();
  const goBack = () => { 
    navigate('/');  
  }
 
  return (
    // Have a Container and center the text

    <div className="container">
      {/* Have a header, text and small text */}

      <h2 className="header">404</h2>
      <div className="text">
        <p className="smallText"> You seem Lost</p>
        <p>
          Yeah, we're as confused as you are, you took the wrong turn and came
          here. Luckily unlike some mistakes, you can fix this
        </p>
      </div>

      <div className="Row">
        <span className="span" onClick={goBack} >
          <FaHome /> Go Home
        </span>
      </div>

      <img
        className="image"
        src={pawpaw}
        alt="
          Paw Paw"
      ></img>
    </div>

    // Have a Row for Home Icon and Go Home text
    // Have a picture at the bottom
  );
};

export default Error;
