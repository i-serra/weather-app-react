import React from "react";
import "./Location.css";

export default function Location() {
  return (
    <form className="location">
      <input className="city" type="text" placeholder="Enter a city..." autoFocus="on" />
      <div className="row">
        <div className="col">
          <input className="search" type="submit" value="Search" />
        </div>
        <div className="col">
          <input className="current" type="submit" value="Current" />
        </div>
      </div>
    </form>
  );
}
