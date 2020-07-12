import geoCityReducer from "./geoCity";
import searchedCityReducer from "./searchedCity";
import notificationReducer from "./notification";
import ownWeatherReducer from "./ownWeather";
import searchedWeatherReducer from "./searchedWeather";
import onLoadReducer from "./onLoad";
import searchLoaderReducer from "./searchLoader";
import geoLocationErrorReducer from "./geoLocationError";
import geoSupportReducer from "./geoSupport";
import weatherApiErrorReducer from "./weatherApiError";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  geoCityReducer,
  searchedCityReducer,
  notificationReducer,
  ownWeatherReducer,
  searchedWeatherReducer,
  onLoadReducer,
  searchLoaderReducer,
  geoLocationErrorReducer,
  geoSupportReducer,
  weatherApiErrorReducer,
});

export default allReducers;
