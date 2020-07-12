//city gotten from geolocation
export const geolocation = (city) => {
  return {
    type: "GEOLOCATION",
    payload: city,
  };
};

//city from search form
export const search = (city) => {
  return {
    type: "SEARCH",
    payload: city,
  };
};

//see geolocation city weather
export const see_own = ({ cod, temp, desc, icon }) => {
  return {
    type: "SEE_OWN",
    payload: {
      cod: cod,
      temp: temp,
      desc: desc,
      icon: icon,
    },
  };
};

//see search form city weather
export const see_searched = ({ cod, temp, desc, icon }) => {
  return {
    type: "SEE_SEARCHED",
    payload: {
      cod: cod,
      temp: temp,
      desc: desc,
      icon: icon,
    },
  };
};

//loading
export const loading = () => {
  return {
    type: "LOADING",
  };
};

//loaded
export const loaded = () => {
  return {
    type: "LOADED",
  };
};

//loaded and found city
export const loaded_and_success = () => {
  return {
    type: "LOADED_AND_SUCCESS",
  };
};

//loaded but didn't find city
export const loaded_and_error = () => {
  return {
    type: "LOADED_AND_ERROR",
  };
};

//loaded but city already displaying
export const loaded_and_neutral = () => {
  return {
    type: "LOADED_AND_NEUTRAL",
  };
};

//doesn't display searched city weather
export const own = () => {
  return {
    type: "OWN",
  };
};

//displays searched city's weather
export const other = () => {
  return {
    type: "OTHER",
  };
};

//show loading on search
export const search_loading = () => {
  return {
    type: "SEARCH_LOADING",
  };
};

//removes loading on search
export const done_loading = () => {
  return {
    type: "DONE_LOADING",
  };
};
