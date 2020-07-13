import React from "react";
import "../styles/style.css";
import { useSelector } from "react-redux";

const OwnCityWeather = () => {
  const geoCityReducer = useSelector((state) => state.geoCityReducer);
  const ownWeatherReducer = useSelector((state) => state.ownWeatherReducer);
  const notificationReducer = useSelector((state) => state.notificationReducer);
  const geoLocationErrorReducer = useSelector(
    (state) => state.geoLocationErrorReducer
  );
  const geoSupportReducer = useSelector((state) => state.geoSupportReducer);
  const weatherApiReducer = useSelector((state) => state.weatherApiReducer);

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
  } else if (geoLocationErrorReducer) {
    return (
      <>
        <div id="city" className="city bordered error">
          <div className="cityWeather text-white">
            <p>
              Error!{" "}
              <span role="img" aria-label="emoji">
                🚨
              </span>
              .
              <br />
              Can't load address
              <br />
              Please refresh and enter city name to load weather.
            </p>
          </div>
        </div>
      </>
    );
  } else if (!geoSupportReducer) {
    return (
      <>
        <div id="city" className="city bordered error">
          <div className="cityWeather text-white">
            <p>
              Geolocation not supported by browser{" "}
              <span role="img" aria-label="emoji">
                😒
              </span>
              .
              <br />
              Please enter your city to see it's weather.
            </p>
          </div>
        </div>
      </>
    );
  } else if (weatherApiReducer) {
    return (
      <>
        <div id="city" className="city bordered error">
          <div className="cityWeather text-white">
            <p>
              Sorry{" "}
              <span role="img" aria-label="emoji">
                😞
              </span>
              <br />
              Can't load weather at this moment
              <br />
              Please try again later
            </p>
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
        <div id="yourCityType" className="cityType">
          <small>Your city's weather</small>
        </div>
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
