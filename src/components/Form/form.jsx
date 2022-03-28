import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Error from "../Error/error";
import "./form.css";

const Form = ({submitSearch}) => {
  const [location, setLocation] = useState("Famagusta");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!location || location === "") return;
    submitSearch(location); 
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="location"
        className="input"
        type="text"
        required
        placeholder="Search for Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit} className="button">
        Search{" "}
      </button>
    </form>
  );
};

export default Form;
