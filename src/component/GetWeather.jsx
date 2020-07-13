import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  see_own,
  see_searched,
  loaded,
  loaded_and_error,
  loaded_and_success,
  done_loading,
  owm_error,
  no_owm_error,
} from "../actions";
import OwnCityWeather from "./OwnCityWeather";
import SearchedCityWeather from "./SearchedCityWeather";

const GetWeather = () => {
  const onLoadReducer = useSelector((state) => state.onLoadReducer);
  const geoCityReducer = useSelector((state) => state.geoCityReducer);
  const searchedCityReducer = useSelector((state) => state.searchedCityReducer);
  const dispatch = useDispatch();

  const fetchWeather = (city) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=2c52f44abc37225f70c03a60124e1680`
    )
      .then((respo) => respo.json())
      .then((data) => {
        //if city is in open weather map database give succes else give error
        if (data.cod === 200) {
          //remove loading icon
          dispatch(done_loading());
          //show success
          dispatch(loaded_and_success());
        } else {
          //remove loading icon
          dispatch(done_loading());
          //show error
          dispatch(loaded_and_error());
        }

        if (onLoadReducer) {
          dispatch(
            see_own({
              cod: data.cod,
              temp: data.main.temp,
              desc: data.weather[0].description,
              icon: data.weather[0].icon,
            })
          );
        } else {
          dispatch(
            see_searched({
              cod: data.cod,
              temp: data.main.temp,
              desc: data.weather[0].description,
              icon: data.weather[0].icon,
            })
          );
        }

        dispatch(no_owm_error());
      })
      .catch((error) => {
        if (onLoadReducer) dispatch(loaded());
        dispatch(owm_error());
      });
  };

  useEffect(() => {
    onLoadReducer
      ? fetchWeather(geoCityReducer)
      : fetchWeather(searchedCityReducer);
  });

  return (
    <>
      <OwnCityWeather />
      <SearchedCityWeather />
    </>
  );
};

export default GetWeather;
