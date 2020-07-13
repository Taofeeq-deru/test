import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  geolocation,
  geo_error,
  no_geo_error,
  geolocation_supported,
  geolocation_not_supported,
  loaded,
} from "../actions";
import GetWeather from "./GetWeather";

const Geolocation = () => {
  const dispatch = useDispatch();

  const getLocation = () => {
    //get location if geolocation is supported, if not dispatch geolocation not supported
    if (navigator.geolocation) {
      dispatch(geolocation_supported());
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      dispatch(geolocation_not_supported());
      dispatch(loaded());
    }
  };

  const showPosition = (position) => {
    //get lat and lng
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;

    //get location using google map api
    fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyDDVxlDxBMFkM37SKcxczPnUUuSNr7qwp4`
    )
      .then((resp) => resp.json())
      .then((data) => {
        let geoCity = "";
        const newData = data.results[0].address_components;

        const showCity = (value) => {
          if (value.types[0] === "administrative_area_level_1") {
            geoCity = geoCity + value.long_name;
          }
        };

        //get city from googleAPI
        newData.forEach(showCity);

        let ownCity = geoCity.toLowerCase();

        dispatch(no_geo_error());
        dispatch(geolocation(ownCity));
      })
      .catch((error) => {
        dispatch(geo_error());
        dispatch(loaded());
      });
  };

  useEffect(() => {
    getLocation();
  });

  return (
    <div>
      {/*get weather*/}
      <GetWeather />
    </div>
  );
};

export default Geolocation;
