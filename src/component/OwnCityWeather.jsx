import React from "react";
import "../styles/style.css";
import { useSelector } from "react-redux";

const OwnCityWeather = () => {
  const geoCityReducer = useSelector((state) => state.geoCityReducer);
  const ownWeatherReducer = useSelector((state) => state.ownWeatherReducer);
  const notificationReducer = useSelector((state) => state.notificationReducer);

  if (!notificationReducer.loaded) {
    return (
      <>
        <div id="city" className="city">
          <div className="lds-facebook cityWeather">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <div id="city" className="city bordered">
        <div id="ownIcon" className="weatherIcon">
          <img
            src={`https://openweathermap.org/img/w/${ownWeatherReducer.icon}.png`}
            alt="weather icon"
            id="cityIcon"
          />
        </div>
        <div id="yourCityType" className="cityType"></div>
        <div id="ownCityWeather" className="cityWeather">
          <p>
            <span className="cityName" id="own">
              {geoCityReducer}
            </span>{" "}
            <br />
            <span className="temperature">{ownWeatherReducer.temp}°C</span>
            <br />
            <span className="description">{ownWeatherReducer.desc}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default OwnCityWeather;
