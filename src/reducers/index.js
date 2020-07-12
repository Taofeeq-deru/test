import geoCityReducer from "./geoCity";
import searchedCityReducer from "./searchedCity";
import notificationReducer from "./notification";
import ownWeatherReducer from "./ownWeather";
import searchedWeatherReducer from "./searchedWeather";
import onLoadReducer from "./onLoad";
import searchLoaderReducer from "./searchLoader";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  geoCityReducer,
  searchedCityReducer,
  notificationReducer,
  ownWeatherReducer,
  searchedWeatherReducer,
  onLoadReducer,
  searchLoaderReducer,
});

export default allReducers;
