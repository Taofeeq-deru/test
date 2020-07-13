import React from "react";
import "../styles/style.css";
import { useDispatch, useSelector } from "react-redux";
import { search, loaded_and_neutral, other, search_loading } from "../actions";

const SearchForm = () => {
  const geoCityReducer = useSelector((state) => state.geoCityReducer);
  const searchedCityReducer = useSelector((state) => state.searchedCityReducer);
  //const notificationReducer = useSelector((state) => state.notificationReducer);
  const dispatch = useDispatch();

  const handleFormSubmission = (e) => {
    e.preventDefault();
    //get city value
    const cityName = e.target.elements.city.value;
    //convert to lowercase
    let searchedCity = cityName.toLowerCase();

    //if city is already displayed, alert that, else, update city state
    if (
      searchedCity === geoCityReducer.toLowerCase() ||
      searchedCity === searchedCityReducer.toLowerCase()
    ) {
      dispatch(loaded_and_neutral());
    } else {
      //get searched city weather
      dispatch(other());
      //dispatch city name
      dispatch(search(searchedCity));
      //show loading
      dispatch(search_loading());
    }
  };
  return (
    <form action="" method="" id="cityForm" onSubmit={handleFormSubmission}>
      <div id="formInput">
        <input
          type="text"
          name="city"
          id="cityInput"
          placeholder="Enter City Name"
        />
        <button type="submit" id="submitBtn">
          See Weather
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
