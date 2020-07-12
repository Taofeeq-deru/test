import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { geolocation } from "../actions";
import GetWeather from "./GetWeather";

const Geolocation = () => {
  //const cityReducer = useSelector((state) => state.cityReducer);
  const dispatch = useDispatch();

  const getLocation = () => {
    //get location if geolocation is supported, if not console.log
    navigator.geolocation
      ? navigator.geolocation.getCurrentPosition(showPosition)
      : console.log("geolocation not supported");
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

        dispatch(geolocation(ownCity));
      })
      .catch((error) => console.log(error));
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
