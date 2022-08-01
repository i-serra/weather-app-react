import Description from "./Description";
import "./Header.css";
import Location from "./Location";

export default function Header() {
  return (
    <div className="container-fluid">
      <div className="card mt-5 pl-5">
        <div className="card-body">
          <div className="info">
            <h1>Lisbon</h1>
            <p>Tuesday | 20/06 | 13:29</p>
            <h2>
              {" "}
              <span className="temperature">19</span>
              <span className="unit">°C|°F</span>
            </h2>
            <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="sun" className="main-icon" />
            <Description />
            <Location />
          </div>
        </div>
      </div>
    </div>
  );
}
