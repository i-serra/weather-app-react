import React from "react";
import "./Description.css";

export default function Description() {
  return (
    <ul className="weather-description">
      <li>Humidity: 10%</li>
      <div>Wind: 4km/h</div>
      <div>Preview: Sunny</div>
    </ul>
  );
}
