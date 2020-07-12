import React from "react";
import "../styles/style.css";
import { useSelector } from "react-redux";

const SearchedCityWeather = () => {
  const searchedCityReducer = useSelector((state) => state.searchedCityReducer);
  const searchedWeatherReducer = useSelector(
    (state) => state.searchedWeatherReducer
  );
  const onLoadReducer = useSelector((state) => state.onLoadReducer);
  const notificationReducer = useSelector((state) => state.notificationReducer);
  const weatherApiReducer = useSelector((state) => state.weatherApiReducer);

  if (notificationReducer.message === "error" || onLoadReducer) {
    return (
      <>
        <div id="city"></div>
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
      <div id="search" className="city bordered">
        <div id="searchedIcon" className="weatherIcon">
          <img
            src={`https://openweathermap.org/img/w/${searchedWeatherReducer.icon}.png`}
            alt="weather icon"
            id="cityIcon"
          />
        </div>
        <div id="searchedCityType" className="cityType"></div>
        <div id="cityWeather" className="cityWeather">
          <p>
            <span className="cityName" id="own">
              {searchedCityReducer}
            </span>{" "}
            <br />
            <span className="temperature">{searchedWeatherReducer.temp}°C</span>
            <br />
            <span className="description">{searchedWeatherReducer.desc}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SearchedCityWeather;
